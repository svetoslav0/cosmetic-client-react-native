import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";
import {TestService} from "../../services/TestService.js";

const Home = props => {
    const testService = new TestService();

    const sendRequestHandler = () => {
        testService.getTestData()
            .then(console.log);
    }

    const goToAboutHandler = () => {
        props.navigation.navigate('About');
    }

    return (
        <View style={styles.screen}>
            <Text>This is the Home screen with value: {props.someValue}</Text>
            <Text>Open up App.js to start working on your app!</Text>
            <Button title="Send Request" onPress={sendRequestHandler} />
            <Button title="Go to About" onPress={goToAboutHandler} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Home;
