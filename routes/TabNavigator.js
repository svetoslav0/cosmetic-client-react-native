import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import screenOptionsBuilder from './config/ScreensOptionsBuilder.js';
import { TAB_SCREENS_NAMES } from '../constants/TAB_SCREENS_NAMES.js';

import HomeStack from "./config/stacks/HomeStackScreen.js";
import CartStack from "./config/stacks/CartStackScreen.js";
import ProfileStack from "./config/stacks/ProfileStackScreen.js";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={screenOptionsBuilder}>
                {/* That's how to pass data to the component responsible for this screen */}
                {/*<Tab.Screen name={TAB_SCREENS_NAMES.HOME_SCREEN}>*/}
                {/*    { props => <Home {...props} someValue="value"/> }*/}
                {/*</Tab.Screen>*/}
                <Tab.Screen name={TAB_SCREENS_NAMES.HOME_SCREEN} component={HomeStack} />
                <Tab.Screen name={TAB_SCREENS_NAMES.CART_SCREEN} component={CartStack} />
                <Tab.Screen name={TAB_SCREENS_NAMES.PROFILE_SCREEN} component={ProfileStack} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default TabNavigator;
