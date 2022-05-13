import React from "react";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import COLORS from "./src/const/colors";
import OnBoardScreen from "./src/views/screens/OnBoardScreen";
import { StyleSheet, Text, View } from "react-native";
import BottomNavigator from "./src/views/navigation/BottomNavigator";
import HomeScreen from "./src/views/screens/HomeScreen";
import DetailScreen from "./src/views/screens/DetailScreen";
import QuizScreen from "./src/views/screens/QuizScreen";
import KomDasarScreen from "./src/views/screens/KomDasarScreen";
import KomIntiScreen from "./src/views/screens/KomIntiScreen";
import MenuScreen from './src/views/screens/MenuScreen'
import InfoScreen from "./src/views/screens/InfoScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-style" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BoardScreen" component={OnBoardScreen}  />
        <Stack.Screen name="Menu" component={MenuScreen}  />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="QuizScreen" component={QuizScreen}/>
        <Stack.Screen name="DetailScreen" component={DetailScreen}/>
        <Stack.Screen name="InfoScreen" component={InfoScreen}/>
        <Stack.Screen name="KomIntiScreen" component={KomIntiScreen} options={{headerShown: true,title:'Kompetensi Inti'}}/>
        <Stack.Screen name="KomDasarScreen" component={KomDasarScreen} options={{headerShown: true, title:'Kompetensi Dasar'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});