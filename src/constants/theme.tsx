import { DefaultTheme, DarkTheme } from '@react-navigation/native';

// Thème clair
const LightModeTheme = {
    ...DefaultTheme,
    dark: false,
    colors: {
        ...DefaultTheme.colors,
        primary: 'rgb(242, 201, 76)',
        secondary: 'rgb(51, 51, 51)',
        background: 'rgb(255, 255, 255)',
        border: 'rgb(255, 255, 255)',
        text: 'rgb(0,0,0)',
        textCard: 'rgb(255,255,255)',
        textHeaderGradient: 'rgb(0,0,0)',
    },
};

// Thème sombre
const DarkModeTheme = {
    ...DarkTheme,
    dark: true,
    colors: {
        ...DarkTheme.colors,
        primary: 'rgb(242, 201, 76)',
        secondary: 'rgb(51, 51, 51)',
        background: 'rgb(0,0,0)',
        border: 'rgb(0,0,0)',
        text: 'rgb(255,255,255)', // Couleur du texte
        textCard: 'rgb(255,255,255)',
        textHeaderGradient: 'rgb(255,255,255)',
    },
};

export { LightModeTheme, DarkModeTheme };
