import React from "react";
import { FlatList, View } from "react-native";
import useStore from "../../../store/useStore";
import CardModal from "./CardModal";

const ActivityList = () => {
	const { items } = useStore();
	return (
		<View style={{ flex: 1 }}>
			<FlatList
				data={items}
				ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
				renderItem={({ item }) => (
					<View style={{ flex: 1, width: "100%" }}>
						<CardModal item={item} />
					</View>
				)}
				keyExtractor={(item) => item.id.toString()}
			/>
		</View>
	);
};

export default ActivityList;
