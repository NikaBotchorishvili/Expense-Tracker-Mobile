import React from "react";
import { Pressable, StyleSheet, ViewStyle } from "react-native";
import Colors from "../../style/Colors";

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
		backgroundColor: Colors.primary,
	},
	tappedOnButton: {
		opacity: 0.8,
	},
});

export default Button;
