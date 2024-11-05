import {View, ViewStyle} from 'react-native';
import * as React from 'react';
import {useTheme} from '../providers/theme_provider';
import CustomButton from '../components/button';
import AddIconDark from '../images/svg/white/AddIcon.svg';
import AddIconWhite from '../images/svg/dark/AddIcon.svg';

function Wishlist() {
    const { theme} = useTheme();
    const style: { container: ViewStyle } = {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.colors.background,
        },
    };

    return (
        <View style={style.container}>
            <CustomButton
                label="Label"
                variant="primary"
                onPress={() => console.log('Primary button pressed')}
                iconDark={<AddIconDark />}
                iconLight={<AddIconWhite />}
            />
            <CustomButton
                label="Label"
                variant="secondary"
                onPress={() => console.log('Primary button pressed')}
            />
        </View>
    );
}

export default Wishlist;
