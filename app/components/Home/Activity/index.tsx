import React, { useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import useStore from "../../../store/useStore";
import CardModal from "./CardModal";

const ActivityList = () => {
	const { items, initializeItems } = useStore();

	useEffect(() => {
		initializeItems();
	}, [initializeItems]);
	return (
		<FlatList
			data={items}
			keyExtractor={(item) => item.id}
			ItemSeparatorComponent={() => (
				<View
					style={{
						height: 20,
						width: "100%",
					}}
				/>
			)}
			renderItem={({ item }) => <CardModal item={item} />}
		/>
	);
};

export default ActivityList;
