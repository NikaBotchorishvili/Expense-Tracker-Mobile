import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ScreenWrapper from "../components/ScreenWrapper";
import Colors from "../style/Colors";
import BalanceCard from "../components/common/BalanceCardWithDetails";
import { LinearGradient } from "expo-linear-gradient";
import ActivityWrapUp from "../components/Home/ActivityWrapUp";
import ActivityList from "../components/Home/Activity";

const RecentExpenses = () => {
	return (
		<ScreenWrapper style={styles.screenWrapper}>
			<View style={styles.balanceCardWrapper}>
				<BalanceCard />
			</View>

			<View style={styles.mainContent}>
				<ActivityWrapUp />
				<ActivityList />
			</View>
		</ScreenWrapper>
	);
};

const styles = StyleSheet.create({
	screenWrapper: {
		paddingHorizontal: 15,
		paddingTop: 20,
		position: "relative",
	},

	balanceCardWrapper: {
		position: "absolute",
		top: -20,
		alignSelf: "center",
		zIndex: 100,
	},
	mainContent: {
		padding: 15,
		marginTop: 200,
		rowGap: 20,
	},

	text: {
		color: Colors.white,
	},
});

export default RecentExpenses;
