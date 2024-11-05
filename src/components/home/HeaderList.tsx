import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../providers/theme_provider';

interface HeaderLabelsProps {
    headerLabel: string;
    seeMoreLabel: string;
}

const HeaderList: React.FC<HeaderLabelsProps> = ({ headerLabel, seeMoreLabel }) => {
    const { theme } = useTheme();
    const styles = createStyles(theme);

    return (
        <View style={styles.container}>
            <Text style={styles.textHeader}>{headerLabel}</Text>
            <Text style={styles.seeMore}>{seeMoreLabel}</Text>
        </View>
    );
}

const createStyles = (theme: any) => StyleSheet.create({
    textHeader: {
        fontSize: 20,
        fontWeight: '500',
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
        marginTop: 24,
    }
});

export default HeaderList;
