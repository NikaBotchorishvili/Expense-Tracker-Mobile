import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import { schema, FormType } from "./schema";
import Input from "../../../ui/Input";
import Actions from "../../common/Actions";
import useStore from "../../../../store/useStore";
import { yupResolver } from "@hookform/resolvers/yup";
import { addEntry } from "../../../../utils/entries";
import DatePicker from "../../../ui/DatePicker";
export type AddFormProps = {
	hideModal?: () => void;
};

const AddForm: React.FC<AddFormProps> = ({ hideModal }) => {
	const { control, handleSubmit } = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			title: "",
			description: "",
			category: "",
			amount: 10,
		},
	});
	const { addItem } = useStore();

	const submitHandler: SubmitHandler<FormType> = async (data) => {
		try {
			const dateISOString = new Date(data.date).toISOString().toString();
			const res = await addEntry({ ...data, date: dateISOString });

			if (res) {
				addItem({
					...res.data,
				});
			}
			if (hideModal) {
				hideModal();
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<KeyboardAvoidingView style={styles.container}>
			<Controller
				name="title"
				control={control}
				render={({ field, fieldState }) => (
					<Input
						keyboardType="default"
						field={field}
						fieldState={fieldState}
						placeholder={"Enter a title"}
					/>
				)}
			/>
			<Controller
				name="description"
				control={control}
				render={({ field, fieldState }) => (
					<Input
						keyboardType="default"
						field={field}
						fieldState={fieldState}
						placeholder={"Enter a description"}
					/>
				)}
			/>
			<Controller
				name="category"
				control={control}
				render={({ field, fieldState }) => (
					<Input
						keyboardType="default"
						field={field}
						fieldState={fieldState}
						placeholder={"Enter a category"}
					/>
				)}
			/>
			<Controller
				name="date"
				control={control}
				render={({ field: { onChange, value }, fieldState }) => (
					<DatePicker
						fieldState={fieldState}
						value={value}
						onChange={onChange}
					/>
				)}
			/>
			<Controller
				name="amount"
				control={control}
				render={({ field, fieldState }) => (
					<Input
						keyboardType="default"
						field={field}
						fieldState={fieldState}
						placeholder={"Enter an amount"}
					/>
				)}
			/>
			<Actions
				onCancel={() => {
					if (hideModal) {
						hideModal();
					}
				}}
				onSubmit={handleSubmit(submitHandler)}
			/>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		width: "70%",
		marginHorizontal: "auto",
	},
});

export default AddForm;
