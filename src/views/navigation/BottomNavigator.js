import { View, Text, SafeAreaView,TouchableOpacity } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons";
import { FontAwesome5} from '@expo/vector-icons'
import COLORS from "../../const/colors";
import HomeScreen from "../screens/HomeScreen";
import QuizScreen from "../screens/QuizScreen";
import InfoScreen from "../screens/InfoScreen";
import KomDasarScreen from "../screens/KomDasarScreen";
import KomIntiScreen from "../screens/KomIntiScreen";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{ 
        headerShown:false,
        tabBarStyle:{
          height: 55,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarShowLabel:false,
        tabBarIcon:true
       }}
    >
      <Tab.Screen
       name="HomeScreen"
        component={HomeScreen}
        options={{ tabBarIcon:(tabInfo) => (<FontAwesome5 name="home" size={18} />)
        }}
      />
      <Tab.Screen
        name="QuizScreen"
        component={QuizScreen}
        options={{ tabBarIcon:(tabInfo) => (<FontAwesome5 name="book-open" size={18} />)}}
      />
      <Tab.Screen
        name="InfoScreen"
        component={InfoScreen}
        options={{ tabBarIcon:(tabInfo) => (<FontAwesome5 name="info" size={18} />)}}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

