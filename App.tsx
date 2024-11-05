// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/views/Home.tsx';
import SearchScreen from './src/views/Search.tsx';
import WishlistScreen from './src/views/Wishlist.tsx';
import ProfileScreen from './src/views/Profile.tsx';
import BookmarkIcon from './src/images/svg/white/Bookmark.svg';
import BookmarkDarkIcon from './src/images/svg/dark/Bookmark.svg';
import BookmarkFillIcon from './src/images/svg/BookmarkFill.svg';
import HomeIcon from './src/images/svg/white/Home.svg';
import HomeDarkIcon from './src/images/svg/dark/Home.svg';
import HomeFillIcon from './src/images/svg/HomeFill.svg';
import ProfileIcon from './src/images/svg/white/Profile.svg';
import ProfileDarkIcon from './src/images/svg/dark/Profile.svg';
import ProfileFillIcon from './src/images/svg/ProfileFill.svg';
import SearchIcon from './src/images/svg/white/Search.svg';
import SearchDarkIcon from './src/images/svg/dark/Search.svg';
import SearchFillIcon from './src/images/svg/SearchFill.svg';
import {ThemeProvider, useTheme} from './src/providers/theme_provider';

const Tab = createBottomTabNavigator();

const Body = () => {
    const { theme, isDark } = useTheme();

    return (
            <Tab.Navigator screenOptions={{
                tabBarStyle: {
                    backgroundColor: theme.colors.background,
                    borderTopColor: theme.colors.border,
                },
                tabBarActiveTintColor: theme.colors.primary,
                tabBarInactiveTintColor: theme.colors.text,
            }}>
                <Tab.Screen name="Home" component={HomeScreen} options={
                    {
                        tabBarIcon: ({focused}) => (
                            focused ? <HomeFillIcon /> : !isDark ? <HomeIcon /> : <HomeDarkIcon />
                        ),
                        headerShown: false,
                    }
                }/>
                <Tab.Screen name="Search" component={SearchScreen} options={
                    {
                        tabBarIcon: ({focused}) => (
                            focused ? <SearchFillIcon /> : !isDark ? <SearchIcon /> : <SearchDarkIcon />
                        ),
                        headerShown: false,
                    }
                }/>
                <Tab.Screen name="Wishlist" component={WishlistScreen} options={
                    {
                        tabBarIcon: ({focused}) => (
                            focused ? <BookmarkFillIcon /> : !isDark ? <BookmarkIcon /> : <BookmarkDarkIcon />
                        ),
                        headerShown: false,
                    }
                }/>
                <Tab.Screen name="Profile" component={ProfileScreen} options={
                    {
                        tabBarIcon: ({focused}) => (
                            focused ? <ProfileFillIcon /> : !isDark ? <ProfileIcon /> : <ProfileDarkIcon />
                        ),
                        headerShown: false,
                    }
                }/>
            </Tab.Navigator>
    );
}

export default function App() {
    return (
        <ThemeProvider>
            <NavigationContainer>
                <Body />
            </NavigationContainer>
        </ThemeProvider>
    );
}
