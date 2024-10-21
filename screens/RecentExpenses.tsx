import ScreenWrapper from "../components/ScreenWrapper";
import ActivityWrapUp from "../components/RecentExpenses/ActivityWrapUp";
import ActivityList from "../components/RecentExpenses/Activity";

type Props = {};
const RecentExpenses: React.FC<Props> = () => {
	return (
		<ScreenWrapper
			style={{ paddingHorizontal: 15, paddingTop: 20, gap: 20 }}
		>
			<ActivityWrapUp />

			<ActivityList />
		</ScreenWrapper>
	);
};

export default RecentExpenses;
