import PushNotification from "react-native-push-notification";
import messaging from '@react-native-firebase/messaging';


export const showNotification = (channelId, title, message) => {

    PushNotification.localNotification({
        channelId: channelId, // (optional)
        title: title,
        message: message,
        playSound: true,
        soundName: "default",
        vibrate: true,
        vibration: 300,
        
    });
}

export const createNotificationListeners = async () => {

    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
            'Notification caused app to open from background state:',
            remoteMessage.notification,
        );
    });

    messaging().onMessage(async remoteMessage => {
        console.log('Message Foreground', remoteMessage);
        showNotification('fcm_fallback_notification_channel',remoteMessage.notification.title, remoteMessage.notification.body);
    });

    // Check whether an initial notification is available
    messaging()
        .getInitialNotification()
        .then(remoteMessage => {
            if (remoteMessage) {
                console.log(
                    'Notification caused app to open from quit state:',
                    remoteMessage.notification,
                );
            }
        })
}