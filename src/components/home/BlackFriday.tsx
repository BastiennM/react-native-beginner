import {View, Image, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import Text from '../Text';
import {useTheme} from '../../providers/theme_provider';

const BlackFriday = () => {
    const {theme} = useTheme();
    const styles = createStyle(theme);

    return (
        <View style={styles.container}>
            <Image
                source={{uri: 'https://s4844.pcdn.co/wp-content/uploads/2020/11/ashkan-forouzani-sUlR4Iul-9c-unsplash-scaled.jpg'}}
                style={styles.image}
                resizeMode="cover"
            />
            <View style={styles.content}>
                <Text semiBold style={styles.title}>Black friday is here!</Text>
                <Text regular style={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Viverra sociis pulvinar auctor nibh nibh iaculis id.
                </Text>
                <TouchableOpacity style={styles.button}>
                    <Text semiBold style={styles.buttonText}>Check details</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const createStyle = (theme: any) => StyleSheet.create({
    container: {
        position: 'relative',
        marginHorizontal: 24,
        marginTop: 32,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: Dimensions.get('window').height * 0.2,
    },
    content: {
        bottom: 0,
        left: 0,
        right: 0,
    },
    title: {
        fontSize: 24,
        color: theme.colors.text,
        paddingVertical: 16,
    },
    description: {
        fontSize: 14,
        color: theme.colors.text,
        marginBottom: 16,
    },
    button: {
        backgroundColor: theme.colors.primary,
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: theme.colors.border,
        fontSize: 16,
    },
});

export default BlackFriday;
