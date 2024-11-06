import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import Colors from "../../../style/Colors";
type Props = {
	title: string;
};

const Header: React.FC<Props> = ({ title }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: Constants.statusBarHeight - 20,
		width: "100%",
		backgroundColor: Colors.primary,
	},
	text: {
		fontSize: 20,
		fontWeight: "bold",
		color: Colors.textPrimary,
	},
});
export default Header;
