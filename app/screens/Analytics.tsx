import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { Text, View } from "react-native";
import { RootBottomTabParams } from "../types/navigation";

type Props = BottomTabScreenProps<RootBottomTabParams, "Analytics">;

const Analytics: React.FC<Props> = ({ route, navigation }) => {
	return (
		<View>
			<Text>All Expenses Screen</Text>
		</View>
	);
};

export default Analytics;
