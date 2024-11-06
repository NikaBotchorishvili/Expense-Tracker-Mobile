import { Platform, StatusBar, StyleSheet, View } from "react-native";
import Colors from "../../style/Colors";
import Constants from "expo-constants";

type Props = {
	children: React.ReactNode;
	rightIcon?: React.ReactNode;
	paddingBottom?: number;
};

const Header: React.FC<Props> = ({
	children,
	rightIcon,
	paddingBottom = 50,
}) => {
	return (
		<>
			<StatusBar barStyle="light-content" />
			<View style={[styles.headerContainer, { paddingBottom }]}>
				{children}
				{rightIcon && (
					<View style={styles.iconContainer}>{rightIcon}</View>
				)}
			</View>
		</>
	);
};

export default Header;

const styles = StyleSheet.create({
	headerContainer: {
		backgroundColor: Colors.primary,
		paddingHorizontal: 20,
		paddingVertical: 20,
		paddingTop: Constants.statusBarHeight + 20,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		position: "relative", // Ensure normal stacking context
		zIndex: -100,
	},
	iconContainer: {
		position: "absolute",
		right: 20,
		top: 15 + Constants.statusBarHeight,
	},
});
