import React from 'react'
import navigationStrings from '../constants/navigationStrings'
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import {
    Map,
    Home
} from '../Screens'


const MainStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>

            <Stack.Screen name={navigationStrings.MAP}
                component={Map}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name={navigationStrings.HOME}
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default MainStack
