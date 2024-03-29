import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "../screens/SettingsScreen";
import HomeScreen from "../screens/HomeScreen";
import ClickMe from "../screens/ClickMe";

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cards" component={ClickMe} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
