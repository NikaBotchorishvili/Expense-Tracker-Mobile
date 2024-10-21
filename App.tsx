import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/RecentExpenses";
import Settings from "./screens/Settings";
import { Ionicons } from "@expo/vector-icons";
import Colors from "./style/Colors";
import AllExpenses from "./screens/AllExpenses";
import { RootBottomTabParams } from "./types/navigation";
import ModalComponent from "./components/ui/Modal";
import AddForm from "./components/RecentExpenses/Forms/AddForm";
const Tab = createBottomTabNavigator<RootBottomTabParams>();

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
							backgroundColor: Colors.primaryForeground,
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
						name="RecentExpenses"
						component={Home}
						options={{
							tabBarIcon: ({ focused }) => (
								<Ionicons
									name="hourglass"
									size={24}
									color={
										focused
											? Colors.textPrimary
											: Colors.textSecondary
									}
								/>
							),
							title: "Recent",
							headerRight: () => (
								<>
									<ModalComponent
										button={
											<Ionicons
												name="add"
												size={24}
												color={Colors.textPrimary}
												style={{ marginRight: 10 }}
											/>
										}
										title="Add Expense"
										FormComponent={AddForm}
									/>
								</>
							),
						}}
					/>
					<Tab.Screen
						name="AllExpenses"
						component={AllExpenses}
						options={{
							tabBarIcon: ({ focused }) => (
								<Ionicons
									name="calendar"
									size={24}
									color={
										focused
											? Colors.textPrimary
											: Colors.textSecondary
									}
								/>
							),
							title: "All Expenses",
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
