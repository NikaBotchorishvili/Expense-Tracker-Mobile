import { ControllerRenderProps } from "react-hook-form";
import { KeyboardTypeOptions, StyleSheet, TextInput } from "react-native";
import { AddFormData } from "../RecentExpenses/Forms/types";
import Colors from "../../style/Colors";

type Props = {
	field: ControllerRenderProps<AddFormData, keyof AddFormData>;
	placeholder: string;
	keyboardType: KeyboardTypeOptions;
};

const Input: React.FC<Props> = ({ field, placeholder, keyboardType }) => {
	return (
		<TextInput
			{...field}
			value={field.value ? String(field.value) : ""}
			placeholder={placeholder}
			style={styles.input}
			placeholderTextColor="#888"
			onChangeText={field.onChange}
			onBlur={field.onBlur}
			keyboardType={keyboardType}
		/>
	);
};

const styles = StyleSheet.create({
	input: {
		borderWidth: 1,
		borderColor: Colors.primaryForeground,
		borderRadius: 8,
		padding: 12,
		marginVertical: 10,
		fontSize: 16,
		backgroundColor: Colors.primary,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 3,
		color: Colors.textPrimary,
	},
});

export default Input;
