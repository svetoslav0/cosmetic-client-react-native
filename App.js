import React  from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TabNavigator from './routes/TabNavigator.js';

function App() {
    return (
        <TabNavigator />
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 50,
        // flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});

export default App;
