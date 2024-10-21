import React from "react";
import { FlatList, Text, View } from "react-native";
import Card from "./Card";
import { Item } from "../../../store/types";

const ActivityList = () => {
	const data: Item[] = [
		{
			id: 1,
			title: "Groceries",
			amount: 50,
			createdAt: new Date().toString(),
		},
		{ id: 2, title: "Gas", amount: 50, createdAt: new Date().toString() },
		{ id: 3, title: "Rent", amount: 50, createdAt: new Date().toString() },
		{
			id: 4,
			title: "Groceries",
			amount: 50,
			createdAt: new Date().toString(),
		},
		{ id: 5, title: "Gas", amount: 50, createdAt: new Date().toString() },
		{ id: 6, title: "Rent", amount: 50, createdAt: new Date().toString() },
	];

	return (
		<View>
			<FlatList
				data={data}
				ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
				renderItem={({ item }) => <Card item={item} />}
				keyExtractor={(item) => item.id.toString()}
			/>
		</View>
	);
};

export default ActivityList;
