import React, { useEffect, useState } from 'react'
import { NavigationContainer, useNavigationState } from '@react-navigation/native';


import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { useSelector, useDispatch } from 'react-redux';
import DrawerRoutes from './DrawerRoutes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchUser } from '../redux/Slices/Login/loginSlice';
import { SplashScreen } from '../Screens';



const Routes = () => {
    // const [isLogin, setIsLogin] = useState(false)
    const [firstLaunch, setFirstLaunch] = useState(null)
    const [uid, setUid] = useState(null)
    const dispatch=useDispatch()
    const login = useSelector((state) => {
        // console.log(state.login.isLogin)
        return state.login
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
        AsyncStorage.getItem('uid').then(value => {
            console.log("Userid",value)
            if(value){
                setUid(value)
                dispatch(fetchUser(value))
            }
        })
    }, []);
    if (firstLaunch === null) {
        return null
    }
    if(login.isLoading){
        return <SplashScreen/>
    }
    return (
        <NavigationContainer>
            {true ?
                <DrawerRoutes />
                :
                <AuthStack firstLaunch={firstLaunch} />
            }

        </NavigationContainer>

    )
}

export default Routes
