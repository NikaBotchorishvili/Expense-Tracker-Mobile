import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../style/Colors";

const ActivityWrapUp = () => {
	return (
		<View style={styles.container}>
			<Text
				style={[
					{
						fontSize: 15,
						fontWeight: "300",
					},
					styles.text,
				]}
			>
				Last 7 days
			</Text>
			<Text
				style={[
					{
						fontWeight: "800",
						fontSize: 15,
					},
					styles.text,
				]}
			>
				67.7$
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 8,
		backgroundColor: Colors.accent,
	},
	text: {
		color: Colors.textPrimary,
	},
});

export default ActivityWrapUp;
