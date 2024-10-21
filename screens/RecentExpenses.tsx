import { StyleSheet, Text, View } from "react-native";
import ScreenWrapper from "../components/ScreenWrapper";
import Colors from "../style/Colors";
import ActivityWrapUp from "../components/RecentExpenses/ActivityWrapUp";
import ActivityList from "../components/RecentExpenses/Activity";

type Props = {};
const RecentExpenses: React.FC<Props> = ({}) => {
	return (
		<ScreenWrapper
			style={{ paddingHorizontal: 15, paddingTop: 20, gap: 20 }}
		>
			<ActivityWrapUp />

			<ActivityList />
		</ScreenWrapper>
	);
};

const styles = StyleSheet.create({
	text: {
		color: Colors.secondary,
	},
});

export default RecentExpenses;
