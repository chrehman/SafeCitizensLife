import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { ImageBackground, StatusBar,View } from 'react-native'
import imagePath from '../../constants/imagePath'



const SplashScreen=(route)=>{
    const navigation=useNavigation();
    console.log("ROUTTEEEE",route)

    setTimeout(()=>{

        navigation.replace(route)
    },3000)

    return(
        <View style={{flex:1}}>
        <StatusBar hidden={true} />
        <ImageBackground
            source={imagePath.splashScreen}
            style={{flex:1}}
        />
        </View>
    )
}

export default SplashScreen