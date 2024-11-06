import { ControllerFieldState, ControllerRenderProps } from "react-hook-form";
import {
	KeyboardTypeOptions,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";
import {} from "../Home/Forms/AddForm/schema";
import Colors from "../../style/Colors";

type Props = {
	field: ControllerRenderProps<any, any>;
	fieldState: ControllerFieldState;
	placeholder: string;
	keyboardType: KeyboardTypeOptions;
};

const Input: React.FC<Props> = ({
	field,
	fieldState: { error },
	placeholder,
	keyboardType,
}) => {
	return (
		<View style={styles.container}>
			<TextInput
				{...field}
				value={field.value ? String(field.value) : ""}
				placeholder={placeholder}
				style={[styles.input, error && { borderColor: Colors.accent }]}
				placeholderTextColor="#888"
				onChangeText={field.onChange}
				onBlur={field.onBlur}
				keyboardType={keyboardType}
			/>
			{error && <Text style={styles.error}>{error.message}</Text>}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		width: "100%",
	},
	input: {
		width: "100%",
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
	error: {
		color: Colors.accent,
	},
});

export default Input;
