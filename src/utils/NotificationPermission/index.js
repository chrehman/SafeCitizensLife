import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createToken } from '../../services/Store';
import { showError } from './../../helper/helperFunctions';



//1
export const checkPermission = async (userId) => {
    const enabled = await messaging().hasPermission();
    console.log("Enabled", enabled)
    if (enabled) {
        getToken(userId);
    } else {
        requestUserPermission(userId);
    }
}

//3
const getToken = async (userId) => {
    
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    if (!fcmToken) {
        await messaging().registerDeviceForRemoteMessages();
        // console.log("resp", resp)
        fcmToken = await messaging().getToken();
        
            // user has a device token
            console.log(fcmToken);
            await AsyncStorage.setItem('fcmToken', fcmToken);
            createToken(userId,{token:fcmToken})
            .then(res=>{
                console.log("token created")
            })
            .catch(err=>{
                showError(err.message)
            })

    }
    else {
        console.log("Old token", fcmToken);
    }

}

//2
async function requestUserPermission(userId) {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log('Authorization status:', authStatus);
        getToken(userId);
    }
}
