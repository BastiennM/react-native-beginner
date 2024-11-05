import { DefaultTheme, DarkTheme } from '@react-navigation/native';

// Thème clair
const LightModeTheme = {
    ...DefaultTheme,
    dark: false,
    colors: {
        ...DefaultTheme.colors,
        primary: 'rgb(242, 201, 76)',
        background: 'rgb(255, 255, 255)',
        border: 'rgb(255, 255, 255)',
        text: 'rgb(0,0,0)',  // Couleur du texte
    },
};

// Thème sombre
const DarkModeTheme = {
    ...DarkTheme,
    dark: true,
    colors: {
        ...DarkTheme.colors,
        primary: 'rgb(242, 201, 76)',
        background: 'rgb(0,0,0)',
        border: 'rgb(0,0,0)',
        text: 'rgb(255,255,255)', // Couleur du texte
    },
};

export { LightModeTheme, DarkModeTheme };
