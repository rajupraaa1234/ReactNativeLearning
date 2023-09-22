import React, { useEffect } from "react";
import { View, Text, Button, Alert } from 'react-native';
import notifee from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';


const MyComponent = () => {

    useEffect(() => {
        checkToken();
        notification();
        requestUserPermission();

        //This is for ForeGround 
        const unsubscribe = messaging().onMessage(async remoteMessage => {
            Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
        });
        return unsubscribe;
    }, []);


    const checkToken = async () => {
        const fcmToken = await messaging().getToken();
        if (fcmToken) {
            console.log(fcmToken);
        }
    }

    async function requestUserPermission() {
        const authStatus = await messaging().requestPermission();
        const enabled =
            authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
            console.log('Authorization status:', authStatus);
        }
    }

    const notification = () => {
        messaging().onNotificationOpenedApp(remoteMessage => {
            console.log(
                'Notification caused app to open from background state:',
                remoteMessage.notification,
            );
        });
        messaging()
            .getInitialNotification()
            .then(remoteMessage => {
                if (remoteMessage) {
                    console.log(
                        'Notification caused app to open from quit state:',
                        remoteMessage.notification,
                    );
                }
            });
    }

    const getLocalNotification = async () => {
        // Request permissions (required for iOS)
        await notifee.requestPermission()

        // Create a channel (required for Android)
        const channelId = await notifee.createChannel({
            id: 'default',
            name: 'Default Channel',
        });

        // Display a notification
        await notifee.displayNotification({
            title: 'Notification Title',
            body: 'Main body content of the notification',
            android: {
                channelId,
                //smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
                // pressAction is needed if you want the notification to open the app when pressed
                pressAction: {
                    id: 'default',
                },
            },
        });
    }


    return (
        <View style={{ justifyContent: 'center', flex: 1 }}>
            <View style={{ width: 160, alignItems: 'center', alignSelf: 'center' }}>
                <Button title="Local Notification" onPress={getLocalNotification} />
            </View>
        </View>
    )
}

export default MyComponent;