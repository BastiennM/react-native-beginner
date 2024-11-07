// src/components/Text.tsx
import React from 'react';
import { Text as RNText, TextProps, StyleSheet } from 'react-native';
import { FONTS } from '../constants/theme';

interface CustomTextProps extends TextProps {
    thin?: boolean;
    ultraLight?: boolean;
    light?: boolean;
    regular?: boolean;
    medium?: boolean;
    semiBold?: boolean;
    bold?: boolean;
    extraBold?: boolean;
    black?: boolean;
}

const Text: React.FC<CustomTextProps> = ({
                                             style,
                                             thin,
                                             ultraLight,
                                             light,
                                             regular,
                                             medium,
                                             semiBold,
                                             bold,
                                             extraBold,
                                             black,
                                             ...props
                                         }) => {
    const getFontFamily = () => {
        if (thin) return FONTS.thin;
        if (ultraLight) return FONTS.ultraLight;
        if (light) return FONTS.light;
        if (medium) return FONTS.medium;
        if (semiBold) return FONTS.semiBold;
        if (bold) return FONTS.bold;
        if (extraBold) return FONTS.extraBold;
        if (black) return FONTS.black;
        return FONTS.regular;
    };

    return (
        <RNText
            style={[{ fontFamily: getFontFamily() }, style]}
            {...props}
        />
    );
};

export default Text;
