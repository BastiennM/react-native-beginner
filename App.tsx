// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/views/Home.tsx';
import SearchScreen from './src/views/Detail.tsx';
import WishlistScreen from './src/views/Wishlist.tsx';
import ProfileScreen from './src/views/Profile.tsx';

const Tab = createBottomTabNavigator();

function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Details" component={SearchScreen} />
                <Tab.Screen name="Wishlist" component={WishlistScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App;
