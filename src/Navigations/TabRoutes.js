import React from 'react'
import { BottomBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import navigationStrings from '../constants/navigationStrings'
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
    Home,
    Map,
    Course,
    Profile
} from '../Screens'
const Tab = createBottomTabNavigator();

const TabRoutes = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === navigationStrings.HOME) {
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                    } else if (route.name === navigationStrings.MAP) {
                        iconName = focused ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                    }
                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'green',
                tabBarInactiveTintColor: 'white',
                // headerShown: false,
                // tabBarBackgroundColor: '#eded',
                // tabBarBackgroundColor: 'black',
                // tabBarShowLabel: false,
                animationEnabled: true,
                headerPressColor: 'black',
                style: {
                    backgroundColor: 'black'
                },
                pressColor: 'black',
                indicatorStyle: {
                    backgroundColor: 'pink',
                    height: '100%',
                    borderBottomColor: 'yellow',
                    borderBottomWidth: 1
                },
                tabBarStyle: {
                    backgroundColor: 'black',
                }
            })}
            initialRouteName={navigationStrings.HOME}
        >
            <Tab.Screen name={navigationStrings.HOME} component={Home}
                options={{
                    headerShown: false,
                }}
            />
            <Tab.Screen name={navigationStrings.MAP} component={Map}

                options={{
                    headerShown: false,
                }}
            />
            <Tab.Screen name={navigationStrings.PROFILE} component={Profile}
                options={{
                    headerShown: false,
                }}
            />
            <Tab.Screen name={navigationStrings.COURSE} component={Course}
                options={{
                    headerShown: false,
                }}
            />

        </Tab.Navigator>
    
    )
}

export default TabRoutes
