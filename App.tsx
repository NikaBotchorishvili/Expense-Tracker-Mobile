import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import Settings from "./screens/Settings";
import { Ionicons } from "@expo/vector-icons";
import Colors from "./style/Colors";
const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<>
			<NavigationContainer>
				<Tab.Navigator
					screenOptions={{
						headerShown: true,
						headerStyle: {
							backgroundColor: Colors.primaryForeground,
						},
						tabBarStyle: {
							backgroundColor: Colors.primaryForeground, // Set background color for the tab bar
						},
						headerTitleStyle: {
							color: Colors.textPrimary,
						},
						tabBarActiveTintColor: Colors.textPrimary,
						tabBarInactiveTintColor: Colors.textPrimary,
						tabBarIconStyle: {
							color: Colors.textSecondary,
						},
					}}
				>
					<Tab.Screen
						name="Home"
						component={Home}
						options={{
							tabBarIcon: ({ focused }) => (
								<Ionicons
									name="home"
									size={24}
									color={
										focused
											? Colors.textPrimary
											: Colors.textSecondary
									}
								/>
							),
						}}
					/>
					<Tab.Screen
						name="Settings"
						component={Settings}
						options={{
							tabBarIcon: ({ focused }) => (
								<Ionicons
									name="settings"
									size={24}
									color={
										focused
											? Colors.textPrimary
											: Colors.textSecondary
									}
								/>
							),
						}}
					/>
				</Tab.Navigator>
			</NavigationContainer>
			<StatusBar style="auto" />
		</>
	);
}

const styles = StyleSheet.create({});
