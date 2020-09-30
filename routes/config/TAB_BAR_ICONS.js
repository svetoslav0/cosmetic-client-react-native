import { TAB_SCREENS_NAMES } from "./TAB_SCREENS_NAMES.js";
import FontAwesome from 'react-native-vector-icons/FontAwesome.js';
import AntDesign from 'react-native-vector-icons/AntDesign.js';

const TAB_BAR_ICONS = {
    [TAB_SCREENS_NAMES.HOME_SCREEN]: {
        element: FontAwesome,
        iconName: 'home'
    },
    [TAB_SCREENS_NAMES.ABOUT_US_SCREEN]: {
        element: FontAwesome,
        iconName: 'users'
    },
    [TAB_SCREENS_NAMES.DETAILS_SCREEN]: {
        element: AntDesign,
        iconName: 'infocirlceo'
    }
};

export { TAB_BAR_ICONS };
