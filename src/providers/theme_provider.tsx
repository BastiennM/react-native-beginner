// src/themes/ThemeContext.js
import React, {createContext, useContext, useState, useMemo, ReactNode} from 'react';
import {LightModeTheme, DarkModeTheme} from '../constants/theme';

const ThemeContext = createContext({
    theme: LightModeTheme,
    toggleTheme: () => {},
    isDark: false,
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [isDark, setIsDark] = useState(false); // Commence par le thème clair par défaut

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    const theme = useMemo(() => isDark ? DarkModeTheme : LightModeTheme, [isDark]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
