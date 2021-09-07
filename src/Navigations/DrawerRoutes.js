import React from 'react'
import { View, Text } from 'react-native'

import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import { scale } from '../styles/responsiveSize';
import ProfileStack from './ProfileStack';
import navigationStrings from '../constants/navigationStrings';
import MainStack from './MainStack';
import {
    ResetEmail,
    ResetPassword    
} from '../Screens'


const DummyScreen = (props) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
        <Text>{props.name}</Text>
    </View>
)

const DrawerRoutes = () => {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: {
                    paddingTop: scale(0),
                    borderTopRightRadius: scale(30),
                    borderBottomRightRadius: scale(30),
                },
                headerShown: false,
            }}

            drawerContent={
                (props) => (
                    <CustomDrawer {...props} />
                )
            }>
            <Drawer.Screen
                name={navigationStrings.MAP_DRAWER}
                component={MainStack} />

            <Drawer.Screen
                name={navigationStrings.PROFILE_DRAWER}
                component={ProfileStack} />
            <Drawer.Screen
                name={navigationStrings.RESET_EMAIL}
                component={ResetEmail} />
            <Drawer.Screen
                name={navigationStrings.RESET_PASSWORD}
                component={ResetPassword} />



        </Drawer.Navigator>
    )
}

export default DrawerRoutes
