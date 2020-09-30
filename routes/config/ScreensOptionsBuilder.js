import { TAB_SCREENS_NAMES } from './TAB_SCREENS_NAMES.js';
import { TAB_BAR_ICONS } from './TAB_BAR_ICONS.js';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign.js';

import React from "react";

const screenOptionsBuilder = ({ route }) => {
    return {
        tabBarIcon: ({ focused, color, size }) => {
            const constProps = { color, size };

            const icon = TAB_BAR_ICONS[route.name];
            if (!icon) {
                console.warn(`Icon for route '${route.name}' was not found!`);
                return;
            }

            const FontElement = icon.element;
            const iconName = icon.iconName;

            return <FontElement {...constProps} name={iconName} />;
        }
    };
};

export default screenOptionsBuilder;
