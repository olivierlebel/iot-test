import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationNativeContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import * as React from "react"
import { Alert, Button, Dimensions, ScrollView, Text, TouchableOpacity, View } from "react-native"
import MapView from "react-native-maps"

const ActivityScreen = ({ navigation }) => (
		<View style={{ flex: 1 }}>
			<View style={{ height: 40, width: "100%", borderBottomWidth: 3 }} />
			<View style={{ flex: 1, margin: 30 }}>
				<Text style={{ fontWeight: "bold", fontSize: 50 }}>Let's</Text>
				<Text style={{ fontWeight: "bold", fontSize: 50, marginBottom: 40 }}>do this</Text>
				<Text style={{ fontSize: 24 }}>All your recorded ride sessions, will appear here, sorted by days.</Text>
			</View>
			<TouchableOpacity
				onPress={() => navigation.navigate("ActivityDetails")}
				style={{
					alignItems: "center",
					backgroundColor: "black",
					borderRadius: 50,
					marginBottom: 30,
					marginHorizontal: 30,
					paddingVertical: 10,
				}}
			>
				<Text style={{ color: "yellow" }}>View sample activity</Text>
			</TouchableOpacity>
		</View>
	)

const ActivityDetailsScreen = () => (
		<View style={{ flex: 1 }}>
			<View style={{ backgroundColor: "yellow", justifyContent: "center", height: 50 }}>
				<Text style={{ alignSelf: "center" }}>Ride Title</Text>
			</View>
			<ScrollView>
				<View style={{ height: 200, borderWidth: 1, borderColor: "grey", justifyContent: "center" }}>
					<Text style={{ color: "grey", alignSelf: "center" }}>
						No GPS data
					</Text>
				</View>
				<View>
				</View>
			</ScrollView>
		</View>
	)

const ProfileScreen = ({ navigation }) => (
		<View style={{ flex: 1, marginTop: 40 }}>
			<TouchableOpacity
				onPress={() => navigation.navigate("Notio Pairing")}
				style={{ backgroundColor: "white", flexDirection: "row", justifyContent: "center", padding: 20 }}
			>
				<View style={{ flex: 2, borderWidth: 1 }} />
				<View style={{ flex: 9, marginHorizontal: 10 }}>
					<Text style={{ fontWeight: "bold" }}>Add Notio Aerometer</Text>
					<Text style={{ color: "grey" }}>
						Pair your Notio to allow ANT+ sensor pairing and start recording rides
					</Text>
				</View>
				<View style={{ flex: 1, backgroundColor: "black", alignSelf: "center", justifyContent: "center" }}>
					<Text style={{ color: "white", alignSelf: "center" }}>{">"}</Text>
				</View>
			</TouchableOpacity>
		</View>
	)

const NotioPairingScreen = ({ navigation }) => (
		<View style={{ flex: 1, backgroundColor: "white" }}>
			<View style={{ height: 150, borderBottomWidth: 1, borderColor: "grey" }}>
				<Text style={{ color: "grey", flex: 1, alignSelf: "center", marginTop: 40 }}>
					Not paired
				</Text>
				<TouchableOpacity
					onPress={() => null}
					style={{
						alignItems: "center",
						alignSelf: "center",
						backgroundColor: "black",
						borderRadius: 50,
						marginBottom: 20,
						paddingVertical: 10,
						width: "30%",
					}}
					>
					<Text style={{ color: "yellow" }}>Pair</Text>
				</TouchableOpacity>
				</View>
			<Button
				color="black"
				onPress={() => navigation.navigate("Pairing Instructions")}
				title="Pairing Instruction"
			/>
		</View>
	)

const PairingInstructionsScreen = () => (
		<View style={{ flex: 1, backgroundColor: "white" }}>
			<View style={{ height: 250, width: "100%", backgroundColor: "grey" }} />
			<View style={{ flexDirection: "row", padding: 10 }}>
				<Text style={{ marginHorizontal: 10, alignSelf: "center", fontWeight: "bold" }}>1.</Text>
				<Text>To power on your Notio, press and hold the power button for 3 seconds.</Text>
			</View>
			<View style={{ flexDirection: "row", padding: 10 }}>
				<Text style={{ marginHorizontal: 10, alignSelf: "center", fontWeight: "bold" }}>2.</Text>
				<Text>Hold your phone near the powered Notio.</Text>
			</View>
			<View style={{ flexDirection: "row", padding: 10 }}>
				<Text style={{ marginHorizontal: 10, alignSelf: "center", fontWeight: "bold" }}>3.</Text>
				<Text>Tap on PAIR to associate your Notio with the app.</Text>
			</View>
			<View style={{ flex: 1 }} />
			<Text style={{ margin: 10, color: "grey", fontStyle: "italic" }}>
				IMPORTANT - Your Notio might be discharged. If so, connect to a USB charger before proceeding.
			</Text>
			<Button
				color="black"
				onPress={() => null}
				title="I don't own a Notio"
			/>
		</View>
	)

const MapScreen = () => (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<MapView
				followsUserLocation
				showsUserLocation
				rotateEnabled={false}
				scrollEnabled={false}
				pitchEnabled={false}
				zoomEnabled={false}
				style={{ width: Dimensions.get("window").width, height: Dimensions.get("window").height }}
			>
			</MapView>
		</View>
	)

const AboutScreen = () => (
		<View style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}>
			<View style={{ margin: 15 }}>
				<Text>email@gmail.ca</Text>
			</View>
			<TouchableOpacity
				style={{
					alignItems: "center",
					backgroundColor: "grey",
					borderColor: "grey",
					borderWidth: 1,
					padding: 20,
					width: "100%",
				}}>
				<Text style={{ fontWeight: "bold" }}>Reset Password</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={{
					borderBottomWidth: 0.5,
					borderColor: "grey",
					padding: 20,
					width: "100%",
				}}>
				<Text style={{ fontWeight: "bold" }}>Contact Us</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={{
					borderBottomWidth: 0.5,
					borderColor: "grey",
					padding: 20,
					width: "100%",
				}}>
				<Text style={{ fontWeight: "bold" }}>Terms of Use</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={{
					borderBottomWidth: 0.5,
					borderColor: "grey",
					padding: 20,
					width: "100%",
				}}>
				<Text style={{ fontWeight: "bold" }}>Privacy Policy</Text>
			</TouchableOpacity>
			<View style={{ flex: 1 }}/>
			<Text style={{ margin: 10 }}>Notio Version vRN-alpha-01</Text>
			<TouchableOpacity
				style={{
					alignItems: "center",
					backgroundColor: "grey",
					borderColor: "grey",
					borderWidth: 1,
					padding: 20,
					width: "100%",
				}}>
				<Text style={{ fontWeight: "bold" }}>Sign Out</Text>
			</TouchableOpacity>
		</View>
	)

const Tab = createBottomTabNavigator()
const ActivityStack = createStackNavigator()
const HomeStack = createStackNavigator()

const App = () => (
		<NavigationNativeContainer>
			<Tab.Navigator tabBarOptions={{ activeTintColor: "black", style: { backgroundColor: "yellow" } }}>
				<Tab.Screen name="First">
					{() => (
						<ActivityStack.Navigator
							screenOptions={{
								headerStyle: {
									shadowOpacity: 0.5,
									shadowRadius: 10,
								},
								headerTitleStyle: {
									fontWeight: "bold",
								},
							}}
						>
							<ActivityStack.Screen
								name="Activity"
								component={ActivityScreen}
								options={() => ({
									headerRight: () => (
										<Button
											onPress={() => Alert.alert(
												"Add a Notio Ride Tracker",
												"Please turn on your Notio Aerometer",
												[
													{text: "Ok", onPress: () => null},
												],
											)}
											title="Notio files"
											color="black"
										/>
									),
								})}
							/>
							<ActivityStack.Screen
								name="ActivityDetails"
								component={ActivityDetailsScreen}
								options={() => ({
									headerRight: () => (
										<Button
											onPress={() => Alert.alert(
												"Do something",
												"Please, do something.",
												[
													{text: "Ok", onPress: () => null},
												],
											)}
											title="..."
											color="black"
										/>
									),
								})}
							/>
						</ActivityStack.Navigator>
					)}
				</Tab.Screen>
				<Tab.Screen name="Second">
					{() => (
						<HomeStack.Navigator
							screenOptions={{
								headerStyle: {
									shadowOpacity: 0.5,
									shadowRadius: 10,
								},
								headerTitleStyle: {
									fontWeight: "bold",
								},
							}}
						>
							<HomeStack.Screen
								name="Profile"
								component={ProfileScreen}
							/>
							<HomeStack.Screen name="Notio Pairing" component={NotioPairingScreen} />
							<HomeStack.Screen name="Pairing Instructions" component={PairingInstructionsScreen} />
						</HomeStack.Navigator>
					)}
				</Tab.Screen>
				<Tab.Screen name="Third">
					{() => (
						<HomeStack.Navigator
							screenOptions={{
								headerStyle: {
									shadowOpacity: 0.5,
									shadowRadius: 10,
								},
								headerTitleStyle: {
									fontWeight: "bold",
								},
							}}
						>
							<HomeStack.Screen
								name="Ride"
								component={MapScreen}
							/>
						</HomeStack.Navigator>
					)}
				</Tab.Screen>
				<Tab.Screen name="Fourth">
					{() => (
						<HomeStack.Navigator
							screenOptions={{
								headerStyle: {
									shadowOpacity: 0.5,
									shadowRadius: 10,
								},
								headerTitleStyle: {
									fontWeight: "bold",
								},
							}}
						>
							<HomeStack.Screen
								name="General"
								component={AboutScreen}
							/>
						</HomeStack.Navigator>
					)}
				</Tab.Screen>
			</Tab.Navigator>
		</NavigationNativeContainer>
	)

export default App
