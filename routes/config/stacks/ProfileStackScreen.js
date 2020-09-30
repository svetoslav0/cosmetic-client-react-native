import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import Profile from "../../../screens/Profile/Profile.js";

const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="ProfileScreen" component={Profile} />
        </ProfileStack.Navigator>
    );
}

export default ProfileStackScreen;
