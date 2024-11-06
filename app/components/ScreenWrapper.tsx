import { StyleSheet, View, ViewStyle } from "react-native";
import Colors from "../style/Colors";
type Props = {
	children: React.ReactNode;
	style?: ViewStyle;
};

const ScreenWrapper: React.FC<Props> = ({ children, style }) => {
	return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default ScreenWrapper;
