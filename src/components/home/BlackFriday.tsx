import {View, Image, StyleSheet} from 'react-native';
import React from "react";

const BlackFriday = () => {
    return (
        <View>
            <Image
                source={require('../../../assets/images/png/black_friday.png')}
                style={styles.image}
                resizeMode="cover"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 100,
    }
});

export default BlackFriday;
