import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import Cart from "../../../screens/Cart/Cart.js";

const CartStack = createStackNavigator();

const CartStackScreen = () => {
    return (
        <CartStack.Navigator>
            <CartStack.Screen name="CartScreen" component={Cart} />
        </CartStack.Navigator>
    );
}

export default CartStackScreen;
