import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../style/Colors";
import useStore from "../../store/useStore";

const ActivityWrapUp = () => {
	const { items } = useStore();
	const totalCost = items.reduce((acc, item) => acc + item.amount, 0);
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
				{totalCost}$
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
		backgroundColor: Colors.primary,
	},
	text: {
		color: Colors.textPrimary,
	},
});

export default ActivityWrapUp;
