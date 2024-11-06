import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../../style/Colors";

type Props = {
	username: string;
};

const HomeHeader: React.FC<Props> = ({ username }) => {
	const greeting =
		new Date().getHours() < 12 ? "Good morning" : "Good afternoon";
	return (
		<View>
			<Text style={styles.greetingText}>{greeting},</Text>
			<Text style={styles.usernameText}>{username}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	greetingText: {
		zIndex: -10,
		fontSize: 14,
		color: Colors.white,
	},
	usernameText: {
		fontSize: 18,
		color: Colors.white,
		fontWeight: "bold",
	},
});
export default HomeHeader;
