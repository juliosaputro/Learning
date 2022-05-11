import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoardScreen from "../views/screens/OnBoardScreen";
import HomeScreen from "../views/screens/HomeScreen";
import DetailScreen from "../views/screens/DetailScreen";
import BottomNavigator from "../views/navigation/BottomNavigator";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{ title: "Materi", headerShown: false }}
      />
      {/* <Tab.Screen name="Profile" component={Profile} options={{headerShown: false}} /> */}
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="OnBoard">
      <Stack.Screen
        name="onBoard"
        component={OnBoardScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
