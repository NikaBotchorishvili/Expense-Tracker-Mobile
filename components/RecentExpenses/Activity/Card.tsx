import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../../style/Colors";
import { Item } from "../../../store/types";

type Props = {
	item: Item;
};

const Card: React.FC<Props> = ({ item }) => {
	return (
		<View style={[styles.container]}>
			<View style={[styles.infoContainer]}>
				<Text style={styles.text}>{item.title}</Text>
				<Text style={styles.text}>
					{new Date(item.createdAt)
						.toLocaleDateString("en-GB", {
							year: "numeric",
							month: "2-digit",
							day: "2-digit",
						})
						.replace(/\//g, "-")}
				</Text>
			</View>
			<View style={styles.priceContainer}>
				<Text style={styles.priceText}>{item.amount}$</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.primaryForeground,
		paddingHorizontal: 15,
		paddingVertical: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		borderRadius: 10,
	},
	text: {
		color: Colors.textPrimary,
	},
	infoContainer: {
		flexDirection: "column",
		gap: 5,
		flex: 1,
		marginRight: 10,
	},
	priceContainer: {
		flexDirection: "row",
		backgroundColor: Colors.accent,
		paddingHorizontal: 20,
		paddingVertical: 5,
		borderRadius: 5,
		justifyContent: "center",
		alignItems: "center",
		height: "100%",
	},
	priceText: {
		color: Colors.textPrimary,
		height: "auto",
		alignSelf: "center",
	},
});

export default Card;
