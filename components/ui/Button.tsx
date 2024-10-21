import React from "react";
import { Pressable, StyleSheet, ViewStyle } from "react-native";

export type ButtonProps = {
	children: React.ReactNode;
	onPress: () => void;
	style?: ViewStyle;
};

const Button: React.FC<ButtonProps> = ({ children, onPress, style }) => {
	return (
		<Pressable
			style={({ pressed }) => [
				styles.button,
				pressed && styles.tappedOnButton,
				style && style,
			]}
			onPress={onPress}
		>
			{children}
		</Pressable>
	);
};

const styles = StyleSheet.create({
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},
	tappedOnButton: {
		opacity: 0.8,
	},
	buttonOpen: {
		backgroundColor: "#F194FF",
	},
	buttonClose: {
		backgroundColor: "#2196F3",
	},
	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center",
	},
});

export default Button;
