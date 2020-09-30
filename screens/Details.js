import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Details = props => {

    const goHomeHandler = () => {
        props.navigation.navigate('Home');
    }

    return (
        <View style={styles.screen}>
            <Text>This is the Details screen ! ! !</Text>
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

export default Details;
