import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ScrollView, StyleSheet } from "react-native";
import { schema, FormType } from "./schema";
import Input from "../../../ui/Input";
import Actions from "../../common/Actions";
import useStore from "../../../../store/useStore";
import { yupResolver } from "@hookform/resolvers/yup";
import uuid from "react-native-uuid";
import { addEntry } from "../../../../utils/entries";
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
			date: "",
			amount: 10,
		},
	});
	const { addItem } = useStore();

	const submitHandler: SubmitHandler<FormType> = async (data) => {
		try {
			const res = await addEntry({ data });

			if (res) {
				addItem({
					...data,
					id: uuid.v4().toString(),
					createdAt: new Date().toString(),
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
		<ScrollView contentContainerStyle={styles.container}>
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
				render={({ field, fieldState }) => (
					<Input
						keyboardType="default"
						field={field}
						fieldState={fieldState}
						placeholder={"Enter a date"}
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
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default AddForm;
