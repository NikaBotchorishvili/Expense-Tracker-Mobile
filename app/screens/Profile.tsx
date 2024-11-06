import { Text, View } from "react-native";
import ScreenWrapper from "../components/ScreenWrapper";

type Props = {};
const Profile: React.FC<Props> = () => {
	return (
		<ScreenWrapper>
			<View>
				<Text>Profile</Text>
			</View>
		</ScreenWrapper>
	);
};

export default Profile;
