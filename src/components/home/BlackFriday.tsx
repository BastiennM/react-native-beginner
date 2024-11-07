import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from "react";
import Text from '../Text';

const BlackFriday = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../../assets/images/png/black_friday.png')}
                style={styles.image}
                resizeMode="cover"
            />
            <View style={styles.content}>
                <Text bold style={styles.title}>Black friday is here!</Text>
                <Text regular style={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Viverra sociis pulvinar auctor nibh nibh iaculis id.
                </Text>
                <TouchableOpacity style={styles.button}>
                    <Text bold style={styles.buttonText}>Check details</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: "100%",
        height: 300,
    },
    content: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 16,
    },
    title: {
        fontSize: 24,
        color: '#FFFFFF',
        marginBottom: 8,
    },
    description: {
        fontSize: 14,
        color: '#FFFFFF',
        marginBottom: 16,
    },
    button: {
        backgroundColor: '#F4C95D',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#000000',
        fontSize: 16,
    }
});

export default BlackFriday;
