import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import Input from "../../../ui/Input";
import Actions from "../../common/Actions";
import useStore from "../../../../store/useStore";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormType, schema } from "../AddForm/schema";
import { Item } from "../../../../store/types";
import Button from "../../../ui/Button";
import { Ionicons } from "@expo/vector-icons";
import DatePicker from "../../../ui/DatePicker";

export type EditFormProps = {
	hideModal?: () => void;
	defaultValues: Item;
};

const EditForm: React.FC<EditFormProps> = ({ hideModal, defaultValues }) => {
	const { control, handleSubmit } = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			title: defaultValues.title,
			description: defaultValues.description,
			category: defaultValues.category,
			date: defaultValues.date,
			amount: defaultValues.amount,
		},
	});
	const { editItem, deleteItem } = useStore();

	const submitHandler: SubmitHandler<FormType> = (data) => {
		editItem(defaultValues.id, data);
		if (hideModal) {
			hideModal();
		}
	};
	const deleteHandler = () => {
		deleteItem(defaultValues.id);
		if (hideModal) {
			hideModal();
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
			<Button
				style={{
					backgroundColor: "",
					marginBottom: 20,
				}}
				onPress={deleteHandler}
			>
				<Ionicons size={30} name="trash-bin" />
			</Button>
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

export default EditForm;
