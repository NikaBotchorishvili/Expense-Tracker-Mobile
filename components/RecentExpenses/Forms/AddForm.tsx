import { Controller, Form, SubmitHandler, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { AddFormData } from "./types";
import Input from "../../ui/Input";
import Actions from "../common/Actions";

export type AddFormProps = {
	hideModal?: () => void;
};

const AddForm: React.FC<AddFormProps> = ({ hideModal }) => {
	const { control, handleSubmit } = useForm<AddFormData>();

	const submitHandler: SubmitHandler<AddFormData> = (data) => {
		console.log(data);
		if (hideModal) {
			hideModal();
		}
	};
	return (
		<View style={styles.container}>
			<Controller
				name="title"
				control={control}
				render={({ field }) => (
					<Input
						keyboardType="default"
						field={field}
						placeholder={"Enter a title"}
					/>
				)}
			/>
			<Controller
				name="description"
				control={control}
				render={({ field }) => (
					<Input
						keyboardType="default"
						field={field}
						placeholder={"Enter a description"}
					/>
				)}
			/>
			<Controller
				name="category"
				control={control}
				render={({ field }) => (
					<Input
						keyboardType="default"
						field={field}
						placeholder={"Enter a category"}
					/>
				)}
			/>
			<Controller
				name="date"
				control={control}
				render={({ field }) => (
					<Input
						keyboardType="default"
						field={field}
						placeholder={"Enter a date"}
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
		</View>
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
