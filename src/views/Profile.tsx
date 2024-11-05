import {Button, Text, View, ViewStyle} from 'react-native';
import * as React from 'react';
import {useTheme} from '../providers/theme_provider';

function Profile() {
    const { toggleTheme, isDark, theme } = useTheme();

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
            <Button
                title={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
                onPress={() => toggleTheme()}
            />
        </View>
    );
}

export default Profile;
