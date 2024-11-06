import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../style/Colors";
import { Ionicons } from "@expo/vector-icons";

const BalanceCard = () => {
	return (
		<View style={styles.balanceCard}>
			<Text style={styles.balanceLabel}>Total Balance</Text>
			<Text style={styles.balanceAmount}>$2,548.00</Text>

			<View style={styles.incomeExpenseRow}>
				<View style={styles.incomeExpenseContainer}>
					<View style={styles.labelContainer}>
						<Ionicons
							name="arrow-up"
							size={18}
							color={Colors.white}
							style={styles.iconStyle}
						/>
						<Text style={styles.incomeExpenseLabel}>Income</Text>
					</View>
					<Text style={styles.incomeAmount}>$1,840.00</Text>
				</View>
				<View style={styles.incomeExpenseContainer}>
					<View style={styles.labelContainer}>
						<Ionicons
							name="arrow-down"
							size={18}
							style={styles.iconStyle}
							color={Colors.white}
						/>
						<Text style={styles.incomeExpenseLabel}>Expenses</Text>
					</View>
					<Text style={styles.expenseAmount}>$184.00</Text>
				</View>
			</View>
		</View>
	);
};

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
	balanceCard: {
		alignSelf: "center",
		width: width * 0.9,
		backgroundColor: Colors.primaryForeground,
		borderRadius: 20,
		padding: 20,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
		zIndex: 10,
	},
	headerText: {
		color: Colors.white,
		fontSize: 18,
		fontWeight: "bold",
	},
	balanceLabel: {
		fontSize: 16,
		color: Colors.white,
		marginBottom: 5,
	},
	balanceAmount: {
		fontSize: 36,
		fontWeight: "bold",
		color: Colors.white,
		marginBottom: 15,
	},
	incomeExpenseRow: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	incomeExpenseContainer: {
		alignItems: "center",
	},
	incomeExpenseLabel: {
		fontSize: 14,
		color: Colors.white,
	},
	incomeAmount: {
		fontSize: 18,
		fontWeight: "bold",
		color: Colors.white,
	},
	expenseAmount: {
		fontSize: 18,
		fontWeight: "bold",
		color: Colors.white,
	},
	transactionsContainer: {
		marginTop: 160,
		paddingHorizontal: 20,
	},
	transactionsTitle: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#333",
	},
	labelContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 5,
	},
	iconStyle: {
		backgroundColor: Colors.primary,
		borderRadius: 10,
		padding: 3,
	},
});

export default BalanceCard;
