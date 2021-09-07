import React, { useEffect, useState } from 'react'
import { NavigationContainer, useNavigationState } from '@react-navigation/native';


import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { useSelector } from 'react-redux';
import DrawerRoutes from './DrawerRoutes';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Routes = () => {
    // const [isLogin, setIsLogin] = useState(false)
    const [firstLaunch, setFirstLaunch] = useState(null)
        const isLogin = useSelector((state) => {
        // console.log(state.login.isLogin)
        return state.login.isLogin
    })

    useEffect(() => {
        AsyncStorage.getItem('firstLaunch').then(value => {
            if (value !== null) {
                setFirstLaunch(false)
            } else {
                AsyncStorage.setItem('firstLaunch', 'true')
                setFirstLaunch(true)
            }
        })
    },[]);
    if(firstLaunch===null){
        return null
    }
    return (
        <NavigationContainer>
                {true ?
                    <DrawerRoutes/>
                    :
                    <AuthStack firstLaunch={firstLaunch}/>
                }
            
        </NavigationContainer>

    )
}

export default Routes
