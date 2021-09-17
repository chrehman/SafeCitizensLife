import React, { useEffect } from 'react'
import navigationStrings from '../constants/navigationStrings'
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

// import { createNotificationListeners } from './src/utils/PushNotifications'

import {
    Map,
    MapBox,
    Home,
    SplashScreen
} from '../Screens'
import { checkPermission } from '../utils/NotificationPermission';
import { createNotificationListeners } from '../utils/PushNotifications';
import { useSelector } from 'react-redux';


const MainStack = () => {
    const Stack = createNativeStackNavigator();
    const userId = useSelector((state) => {
        console.log(state.login.data.userId)
        return state.login.data.userId
        // return "sadads"
    })
    console.log("IsLOGINNNNNNNNNNNNN", userId)
    useEffect(() => {
        checkPermission(userId)
        createNotificationListeners()
    }, [])

    return (
        <Stack.Navigator
        // initialRouteName={navigationStrings.splashScreen}
        >
            {/* <Stack.Screen
                name={navigationStrings.splashScreen}
            >
                {props => SplashScreen(navigationStrings.LOGIN)}
            </Stack.Screen> */}

            <Stack.Screen name={navigationStrings.MAP}
                component={Map}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name={"mapbox"}
                component={MapBox}
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
