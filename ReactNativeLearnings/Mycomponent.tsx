import React, { useEffect } from "react";
import { View, Text, Button } from 'react-native';
import VIForegroundService from '@voximplant/react-native-foreground-service';
import BackgroundService from 'react-native-background-actions';


const MyComponent = () => {

    // useEffect(() => {
    //     createChannel();
    // }, [])


    const sleep = (time) => new Promise((resolve) => setTimeout(() => resolve(), time));

    const veryIntensiveTask = async (taskDataArguments) => {
        // Example of an infinite loop task
        const { delay } = taskDataArguments;
        await new Promise(async (resolve) => {
            for (let i = 0; BackgroundService.isRunning(); i++) {
                console.log(i);
                await sleep(delay);
            }
        });

        console.log(`its started ---->`)
    };

    const options = {
        taskName: 'Example',
        taskTitle: 'ExampleTask title',
        taskDesc: 'ExampleTask description',
        taskIcon: {
            name: 'ic_launcher',
            type: 'mipmap',
        },
        color: '#ff00ff',
        linkingURI: 'yourSchemeHere://chat/jane', // See Deep Linking for more info
        parameters: {
            delay: 1000,
        },
    };

    const createChannel = async () => {
        const channelConfig = {
            id: 'channelId',
            name: 'Channel name',
            description: 'Channel description',
            enableVibration: false
        };
        await VIForegroundService.getInstance().createNotificationChannel(channelConfig);
    }



    const foreGroundStart = async () => {
        console.log(`start---->`)
        const notificationConfig = {
            channelId: 'channelId',
            id: 3456,
            title: 'Title',
            text: 'Some text',
            icon: 'ic_icon',
            button: 'Some text',
        };
        try {
            await VIForegroundService.getInstance().startService(notificationConfig);
        } catch (e) {
            console.error(e);
        }
    }

    const foreGroundStop = async () => {
        await VIForegroundService.getInstance().stopService();
    }

    const BackgroundServiceStart = async () => {
        console.log(`back start---->`)

        await BackgroundService.start(veryIntensiveTask, options);
        await BackgroundService.updateNotification({ taskDesc: 'New ExampleTask description' });

    }
    const BackgroundServiceStop = async () => {
        await BackgroundService.stop();
    }

    return (
        <View style={{ justifyContent: 'center', flex: 1 }}>
            <View style={{ width: 160, alignItems: 'center', alignSelf: 'center' }}>
                <Button title="ForeGround Start" onPress={foreGroundStart} />
            </View>

            <View style={{ width: 160, marginTop: 10, alignItems: 'center', alignSelf: 'center' }}>
                <Button title="ForeGround stop" onPress={foreGroundStop} />
            </View>



            <View style={{ width: 160, marginTop: 10, alignItems: 'center', alignSelf: 'center' }}>
                <Button title="BackGround Start" onPress={BackgroundServiceStart} />
            </View>

            <View style={{ width: 160, marginTop: 10, alignItems: 'center', alignSelf: 'center' }}>
                <Button title="BackGround stop" onPress={BackgroundServiceStop} />
            </View>

        </View>
    )
}

export default MyComponent;