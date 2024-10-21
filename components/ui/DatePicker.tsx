import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Colors from "../../style/Colors";

type Props = {
	value: string;
	onChange: (date: Date) => void;
	fieldState: any;
};

const DatePicker: React.FC<Props> = ({ fieldState, onChange, value }) => {
	const [showDatePicker, setShowDatePicker] = useState(false);

	const handleConfirm = (selectedDate: Date) => {
		setShowDatePicker(false);
		onChange(selectedDate);
	};

	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		return new Intl.DateTimeFormat("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		}).format(date);
	};

	return (
		<Pressable
			style={styles.container}
			onPress={() => setShowDatePicker(true)}
		>
			<Text>Date</Text>
			<DateTimePickerModal
				isVisible={showDatePicker}
				mode="date"
				date={value ? new Date(value) : new Date()}
				onConfirm={handleConfirm}
				onCancel={() => setShowDatePicker(false)}
			/>
			<TextInput
				editable={false}
				value={value ? formatDate(value) : ""}
				style={styles.input}
			/>
			{fieldState.error && (
				<Text style={{ color: "red" }}>{fieldState.error.message}</Text>
			)}
		</Pressable>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
	},
	input: {
		paddingVertical: 10,
		borderRadius: 8,
		backgroundColor: Colors.primary,
		color: Colors.textPrimary,
		paddingHorizontal: 10,
	},
});

export default DatePicker;
