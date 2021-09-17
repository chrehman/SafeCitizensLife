import React from 'react'
import navigationStrings from '../constants/navigationStrings'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    Signup,
    Login,
    Onboarding,
    ForgetPassword,
    Status,
    SplashScreen
} from '../Screens'


const AuthStack = ({ firstLaunch }) => {
    const Stack = createNativeStackNavigator();

    return (
        <>
            {firstLaunch ?
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                    initialRouteName={navigationStrings.splashScreen}
                >
                    <Stack.Screen
                        name={navigationStrings.splashScreen}
                        
                    >
                        {() => SplashScreen(navigationStrings.ONBOARDING)}
                    </Stack.Screen>
                    <Stack.Screen
                        name={navigationStrings.ONBOARDING}
                        component={Onboarding}
                    />
                    <Stack.Screen name={navigationStrings.LOGIN} component={Login}
                    />
                    <Stack.Screen
                        name={navigationStrings.SIGNUP}
                        component={Signup}
                    />
                    <Stack.Screen
                        name={navigationStrings.FORGET_PASSWORD}
                        component={ForgetPassword}
                    />
                    <Stack.Screen
                        name={navigationStrings.STATUS}
                        component={Status}
                    />
                </Stack.Navigator>
                :
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                    initialRouteName={navigationStrings.splashScreen}
                >
                    <Stack.Screen
                        name={navigationStrings.splashScreen}
                        
                    >
                        {() => SplashScreen(navigationStrings.LOGIN)}
                    </Stack.Screen>
                    <Stack.Screen
                        name={navigationStrings.LOGIN}
                        component={Login}
                    />
                    <Stack.Screen
                        name={navigationStrings.SIGNUP}
                        component={Signup}
                    />
                    <Stack.Screen
                        name={navigationStrings.FORGET_PASSWORD}
                        component={ForgetPassword}
                    />
                    <Stack.Screen
                        name={navigationStrings.STATUS}
                        component={Status}
                    />
                </Stack.Navigator>
            }
        </>
    )
}

export default AuthStack
