import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const About = props => {

    const goHomeHandler = () => {
        props.navigation.navigate('Home');
    }

    return (
        <View style={styles.screen}>
            <Text>This is the About screen</Text>
            <Button title="Go to home" onPress={goHomeHandler} />
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

export default About;
