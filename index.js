/**
 * @format
 */

import { AppRegistry, Platform } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';
import messaging from '@react-native-firebase/messaging';
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";
import { showNotification } from './src/utils/PushNotifications';

PushNotification.configure({
    onRegister: function (token) {
        console.log("TOKEN:", token);
    },
    onNotification: function (notification) {
        // console.log("NOTIFICATION:", notification);
        // console.log("Action",notification.action)
        // PushNotification.getChannels(function (channel_ids) {
        //     console.log(channel_ids); // ['channel_id_1']
        // });
        // showNotification(notification.channelId, notification.title, notification.message);
    },
    onAction: function (notification) {
        console.log("ACTION:", notification.action);
        console.log("NOTIFICATION:", notification);

        // process the action
    },
    permissions: {
        alert: true,
        badge: true,
        sound: true,
    },
    popInitialNotification: true,
    requestPermissions: Platform.OS === 'ios',
});

PushNotification.createChannel(
    {
        channelId: "fcm_fallback_notification_channel", // (required)
        channelName: "My channel", // (required)
        channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
        playSound: true, // (optional) default: true
        soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
        importance: 4, // (optional) default: 4. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
        visibility: 1, // (optional) default: 1. Int value of the Android notification visibility
    },
    (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
);




messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
    let channel_Id = '';
    PushNotification.getChannels(function (channel_ids) {
        channel_Id = channel_ids; // ['channel_id_1']
    });
    // showNotification('fcm_fallback_notification_channel', remoteMessage.notification.title, remoteMessage.notification.body);

});
AppRegistry.registerComponent(appName, () => App);
