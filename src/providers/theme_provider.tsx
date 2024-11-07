// src/themes/ThemeContext.js
import React, {createContext, useContext, useState, useMemo, ReactNode} from 'react';
import {LightModeTheme, DarkModeTheme} from '../constants/theme';

const ThemeContext = createContext({
    theme: DarkModeTheme,
    toggleTheme: () => {},
    isDark: true,
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [isDark, setIsDark] = useState(true); // Commence par le thème clair par défaut

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
