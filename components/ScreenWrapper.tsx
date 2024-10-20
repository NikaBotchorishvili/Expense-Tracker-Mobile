import { StyleSheet, View } from "react-native";
import Colors from "../style/Colors";
type Props = {
	children: React.ReactNode;
};

const ScreenWrapper: React.FC<Props> = ({ children }) => {
	return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.primary,
	},
});

export default ScreenWrapper;
