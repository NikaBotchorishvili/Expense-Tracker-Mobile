import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import Colors from "../../style/Colors";
import { StyleSheet, Text, View } from "react-native";

const BankCard = () => {
	return (
		<LinearGradient
			colors={[Colors.primaryForeground, Colors.primary]}
			locations={[0.2, 0.92]}
			style={styles.gradientContainer}
		>
			<View style={styles.balanceInfoContainer}>
				<Text
					style={[styles.text, { fontWeight: "300", fontSize: 14 }]}
				>
					Balance
				</Text>
				<Text
					style={[styles.text, { fontWeight: "800", fontSize: 20 }]}
				>
					380.0$
				</Text>
			</View>
		</LinearGradient>
	);
};

const styles = StyleSheet.create({
	gradientContainer: {
		borderRadius: 20,
		marginTop: 150,
	},
	balanceInfoContainer: {
		height: 150,
		padding: 15,
	},
	balanceCardWrapper: {
		position: "absolute",
		top: -20,
		alignSelf: "center",
		zIndex: 100,
	},

	text: {
		color: Colors.white,
	},
});

export default BankCard;
