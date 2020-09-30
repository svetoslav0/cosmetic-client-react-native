import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../../../screens/Home/Home.js';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="HomeScreen" component={Home} />
        </HomeStack.Navigator>
    );
}

export default HomeStackScreen;
