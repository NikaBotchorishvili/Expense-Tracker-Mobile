import { StyleSheet, Text, View } from "react-native";
import ScreenWrapper from "../components/ScreenWrapper";
import Colors from "../style/Colors";

type Props = {};
const Home: React.FC<Props> = ({}) => {
	return (
		<ScreenWrapper>
			<View>
				<Text style={styles.text}>Home</Text>
			</View>
		</ScreenWrapper>
	);
};

const styles = StyleSheet.create({
	text: {
		color: Colors.secondary,
	},
});

export default Home;
