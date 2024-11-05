import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import {useTheme} from '../providers/theme_provider';

interface CustomButtonProps {
    label: string;
    iconLight?: React.ReactNode;
    iconDark?: React.ReactNode;
    variant?: 'primary' | 'secondary';
    onPress: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
       label,
       iconLight,
       iconDark,
       variant = 'primary',
       onPress,
   }) => {
    const { theme , isDark} = useTheme();
    const textColor = variant === 'primary'
        ? (isDark ? theme.colors.background : theme.colors.text)
        : (isDark ? theme.colors.text : theme.colors.background);
    const icon = variant === 'primary'
        ? (isDark ? iconDark : iconDark)
        : (isDark ? iconLight : iconLight);

    return (
        <TouchableOpacity
            style={[
                styles.button,
                {backgroundColor: variant === 'primary' ? theme.colors.primary : theme.colors.secondary},
            ]}
            onPress={onPress}>
            <View style={styles.buttonContent}>
                {icon && <View style={styles.iconContainer}>{icon}</View>}
                <Text
                    style={[
                        styles.buttonText,
                        {color: textColor},
                    ]}>
                    {label}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 120,
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconContainer: {
        marginRight: 8,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
    },
});

export default CustomButton;
