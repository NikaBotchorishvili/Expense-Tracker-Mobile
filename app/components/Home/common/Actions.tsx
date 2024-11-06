import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../../style/Colors";
import Button from "../../ui/Button";

type Props = {
	onCancel: () => void;
	onSubmit: () => void;
};

const Actions: React.FC<Props> = ({ onCancel, onSubmit }) => {
	return (
		<View style={styles.actionsContainer}>
			<Button style={styles.cancelButton} onPress={onCancel}>
				<Text style={styles.buttonText}>Cancel</Text>
			</Button>
			<Button
				style={styles.actionButton}
				onPress={() => {
					onSubmit();
				}}
			>
				<Text style={styles.buttonText}>Submit</Text>
			</Button>
		</View>
	);
};

const styles = StyleSheet.create({
	actionsContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 30,
	},
	actionButton: {
		flex: 1,
		marginHorizontal: 10,
		borderRadius: 10,
		paddingVertical: 15,
		backgroundColor: Colors.primary,
		alignItems: "center",
	},
	cancelButton: {
		flex: 1,
		marginHorizontal: 10,
		borderRadius: 10,
		paddingVertical: 15,
		alignItems: "center",
		backgroundColor: Colors.accent,
		opacity: 0.7,
	},

	buttonText: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
	},
});

export default Actions;
