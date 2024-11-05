import {Text, View, ViewStyle} from 'react-native';
import * as React from 'react';
import {useTheme} from '../providers/theme_provider';

function SearchScreen() {
    const { theme } = useTheme();

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
            <Text style={{ color: theme.colors.text }}>Detail Screen</Text>
        </View>
    );
}

export default SearchScreen;
