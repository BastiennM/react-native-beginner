import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../../providers/theme_provider';
import Text from '../Text';

interface HeaderLabelsProps {
    headerLabel: string;
}

const HeaderList: React.FC<HeaderLabelsProps> = ({ headerLabel }) => {
    const { theme } = useTheme();
    const styles = createStyles(theme);

    return (
        <View style={styles.container}>
            <Text semiBold style={styles.textHeader}>{headerLabel}</Text>
            <Text semiBold style={styles.seeMore}>See more</Text>
        </View>
    );
}

const createStyles = (theme: any) => StyleSheet.create({
    textHeader: {
        fontSize: 20,
        color: theme.colors.text,
    },
    seeMore: {
        fontSize: 14,
        color: theme.colors.primary,
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});

export default HeaderList;
