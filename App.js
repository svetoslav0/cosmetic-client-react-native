import { StatusBar } from 'expo-status-bar';
import React  from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { TestService } from "./services/TestService.js";

export default function App() {
    const testService = new TestService();

    const sendRequestHandler = () => {
        testService.getTestData()
            .then(console.log);
    }

    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
            <Button title="Send Request" onPress={sendRequestHandler} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
