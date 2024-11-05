import React from "react";
import {Text, View, ViewStyle} from "react-native";
import CustomButton from "../Button";
import AddIconDark from '../../images/svg/dark/AddIcon.svg';
import AddIconWhite from '../../images/svg/white/AddIcon.svg';
import {useTheme} from "../../providers/theme_provider";

const HeaderHome: React.FC = () => {
    const style: { container: ViewStyle, buttonContainer: ViewStyle, parentContainer: ViewStyle} = {
        container: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 16,
        },
        parentContainer: {
            marginTop: -48,
            gap: 24,
        },
        buttonContainer: {
            flex: 1,
        },
    };

    const {theme} = useTheme();

    return (
        <View style={style.parentContainer}>
            <View style={style.container}>
                <Text style={{color: theme.colors.textHeaderGradient, fontSize: 16}}>My list</Text>
                <Text style={{color: theme.colors.textHeaderGradient, fontSize: 16}}>Discover</Text>
            </View>
            <View style={style.container}>
                <View style={style.buttonContainer}>
                    <CustomButton
                        label="Wishlist"
                        variant="secondary"
                        onPress={() => console.log('Secondary button pressed')}
                        iconDark={<AddIconDark/>}
                        iconLight={<AddIconWhite/>}
                        needIcon={true}
                    />
                </View>
                <View style={style.buttonContainer}>
                    <CustomButton
                        label="Details"
                        variant="primary"
                        onPress={() => console.log('Primary button pressed')}
                    />
                </View>
            </View>
        </View>
    );
}

export default HeaderHome;
