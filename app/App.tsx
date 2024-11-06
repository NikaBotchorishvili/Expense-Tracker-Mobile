import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import { Ionicons } from "@expo/vector-icons";
import Colors from "./style/Colors";
import Analytics from "./screens/Analytics";
import { RootBottomTabParams } from "./types/navigation";
import ModalComponent from "./components/ui/Modal";
import AddForm from "./components/Home/Forms/AddForm";
import Wallets from "./screens/Wallets";
import Header from "./components/Header";
import HomeHeader from "./components/Home/Header";
import Button from "./components/ui/Button";
import { View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const Tab = createBottomTabNavigator<RootBottomTabParams>();
const tabItemColor = (focused: boolean) =>
	focused ? Colors.primary : Colors.primaryForeground;

export default function App() {
	const [isModalVisible, setIsModalVisible] = useState(false);

	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={{
					headerShown: true,
					headerStyle: {
						backgroundColor: Colors.primary,
					},
					headerTitleStyle: {
						color: Colors.textPrimary,
					},
					tabBarActiveTintColor: Colors.primary,
					tabBarInactiveTintColor: Colors.primaryForeground,
				}}
			>
				<Tab.Screen
					name="Home"
					component={Home}
					options={{
						tabBarIcon: ({ focused }) => (
							<Ionicons
								name="home"
								size={30}
								color={tabItemColor(focused)}
							/>
						),
						title: "Home",
						header: () => (
							<Header
								rightIcon={
									<Button
										style={{
											backgroundColor:
												Colors.primaryForeground,
										}}
										onPress={() => {}}
									>
										<Ionicons
											color={Colors.white}
											name="notifications"
										/>
									</Button>
								}
							>
								<HomeHeader username="Nick" />
							</Header>
						),
					}}
				/>
				<Tab.Screen
					name="Analytics"
					component={Analytics}
					options={{
						tabBarIcon: ({ focused }) => (
							<Ionicons
								name="bar-chart"
								size={30}
								color={tabItemColor(focused)}
							/>
						),
						title: "Analytics",
					}}
				/>

				{/* Center Floating Button */}
				<Tab.Screen
					name="Add"
					component={Home} // Temporary component, as it won't navigate
					options={{
						tabBarButton: () => {
							const buttonSize = 45;
							return (
								<View
									style={{
										left: "50%",
										transform: [
											{ translateX: -(buttonSize / 2) },
										],
										top: "-50%",
										position: "absolute",
										alignSelf: "center",
										zIndex: 1,
									}}
								>
									<ModalComponent
										button={
											<Ionicons
												size={buttonSize / 2}
												color={Colors.white}
												name="add"
											/>
										}
										buttonStyle={{
											backgroundColor:
												Colors.primaryForeground,
											width: buttonSize,
											height: buttonSize,
											justifyContent: "center",
											alignItems: "center",
										}}
										FormComponent={AddForm}
										title="Add Expense"
									/>
								</View>
							);
						},
					}}
				/>

				<Tab.Screen
					name="Wallets"
					component={Wallets}
					options={{
						tabBarIcon: ({ focused }) => (
							<Ionicons
								name="wallet"
								size={30}
								color={tabItemColor(focused)}
							/>
						),
					}}
				/>
				<Tab.Screen
					name="Profile"
					component={Profile}
					options={{
						tabBarIcon: ({ focused }) => (
							<Ionicons
								name="person"
								size={30}
								color={tabItemColor(focused)}
							/>
						),
					}}
				/>
			</Tab.Navigator>

			{/* Modal Component */}
			{isModalVisible && (
				<ModalComponent
					button={
						<Ionicons
							name="add"
							size={30}
							color={Colors.textPrimary}
						/>
					}
					title="Add Expense"
					FormComponent={AddForm}
				/>
			)}

			<StatusBar style="auto" />
		</NavigationContainer>
	);
}
