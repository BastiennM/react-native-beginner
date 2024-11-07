import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider, useTheme } from './src/providers/theme_provider';

// Screens
import HomeScreen from './src/views/Home';
import SearchScreen from './src/views/Search';
import WishlistScreen from './src/views/Wishlist';
import ProfileScreen from './src/views/Profile';

// Icons
import {
    BookmarkIcon, BookmarkDarkIcon, BookmarkFillIcon,
    HomeIcon, HomeDarkIcon, HomeFillIcon,
    ProfileIcon, ProfileDarkIcon, ProfileFillIcon,
    SearchIcon, SearchDarkIcon, SearchFillIcon
} from './assets/icons';

const Tab = createBottomTabNavigator();

// Configuration des onglets de navigation
const getTabScreenOptions = (theme: any, isDark: boolean) => ({
    tabBarStyle: {
        backgroundColor: theme.colors.background,
        borderTopColor: theme.colors.border,
    },
    tabBarActiveTintColor: theme.colors.primary,
    tabBarInactiveTintColor: theme.colors.text,
    headerShown: false,
});

// Configuration des icônes pour chaque onglet
const getTabIcon = (focused: boolean, isDark: boolean, icons: { 
    default: React.ComponentType, 
    dark: React.ComponentType, 
    filled: React.ComponentType 
}) => {
    if (focused) return <icons.filled />;
    return isDark ? <icons.dark /> : <icons.default />;
};

// Configuration des écrans
const TAB_SCREENS = [
    {
        name: 'Home',
        component: HomeScreen,
        icons: {
            default: HomeIcon,
            dark: HomeDarkIcon,
            filled: HomeFillIcon
        }
    },
    {
        name: 'Search',
        component: SearchScreen,
        icons: {
            default: SearchIcon,
            dark: SearchDarkIcon,
            filled: SearchFillIcon
        }
    },
    {
        name: 'Wishlist',
        component: WishlistScreen,
        icons: {
            default: BookmarkIcon,
            dark: BookmarkDarkIcon,
            filled: BookmarkFillIcon
        }
    },
    {
        name: 'Profile',
        component: ProfileScreen,
        icons: {
            default: ProfileIcon,
            dark: ProfileDarkIcon,
            filled: ProfileFillIcon
        }
    }
];

const TabNavigator = () => {
    const { theme, isDark } = useTheme();

    return (
        <Tab.Navigator screenOptions={getTabScreenOptions(theme, isDark)}>
            {TAB_SCREENS.map(screen => (
                <Tab.Screen
                    key={screen.name}
                    name={screen.name}
                    component={screen.component}
                    options={{
                        tabBarIcon: ({focused}) => getTabIcon(focused, isDark, screen.icons)
                    }}
                />
            ))}
        </Tab.Navigator>
    );
};

const App = () => {
    return (
        <SafeAreaProvider>
            <ThemeProvider>
                <NavigationContainer>
                    <TabNavigator />
                </NavigationContainer>
            </ThemeProvider>
        </SafeAreaProvider>
    );
};

export default App;
