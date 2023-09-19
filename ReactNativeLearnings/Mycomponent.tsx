import React, { useEffect } from "react";
import { View, Text, Button } from 'react-native';
import notifee from '@notifee/react-native';


const MyComponent = () => {

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