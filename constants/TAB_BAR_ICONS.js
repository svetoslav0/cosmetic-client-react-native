import { TAB_SCREENS_NAMES } from "./TAB_SCREENS_NAMES.js";
import FontAwesome from 'react-native-vector-icons/FontAwesome.js';
import AntDesign from 'react-native-vector-icons/AntDesign.js';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons.js';

const TAB_BAR_ICONS = {
    [TAB_SCREENS_NAMES.HOME_SCREEN]: {
        element: AntDesign,
        iconName: 'home'
    },
    [TAB_SCREENS_NAMES.CART_SCREEN]: {
        element: FontAwesome,
        iconName: 'opencart'
    },
    [TAB_SCREENS_NAMES.PROFILE_SCREEN]: {
        element: SimpleLineIcons,
        iconName: 'user'
    }
};

export { TAB_BAR_ICONS };
