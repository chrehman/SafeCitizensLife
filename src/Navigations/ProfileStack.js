import React from 'react'
import navigationStrings from '../constants/navigationStrings'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    Profile,
    EditProfile,
} from '../Screens'


const ProfileStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name={navigationStrings.PROFILE}
                component={Profile}
            />
            <Stack.Screen
                name={navigationStrings.EDIT_PROFILE}
                component={EditProfile}
            />
        </Stack.Navigator>
    )
}

export default ProfileStack
