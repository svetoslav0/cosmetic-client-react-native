import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import screenOptionsBuilder from './config/ScreensOptionsBuilder.js';
import { TAB_SCREENS_NAMES } from './config/TAB_SCREENS_NAMES.js';

import Home from '../screens/Home.js';
import About from '../screens/About.js';
import Details from "../screens/Details.js";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={screenOptionsBuilder}>
                {/* That's how to pass data to the component responsible for this screen */}
                <Tab.Screen name={TAB_SCREENS_NAMES.HOME_SCREEN}>
                    { props => <Home {...props} someValue="value"/> }
                </Tab.Screen>
                <Tab.Screen name={TAB_SCREENS_NAMES.ABOUT_US_SCREEN} component={About} />
                <Tab.Screen name={TAB_SCREENS_NAMES.DETAILS_SCREEN} component={Details} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default TabNavigator;
