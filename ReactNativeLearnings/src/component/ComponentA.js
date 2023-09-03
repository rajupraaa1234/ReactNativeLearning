//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { ComponentB } from '@components';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AxiosScreen from '../Screens/AxiosScreen';
import FetchScreen from '../Screens/FetchScreen';



// create a component
const MyComponent = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                   name='AxiosScreen'
                   component={AxiosScreen}
                   options={{title:"AxiosScreen"}} />

                <Stack.Screen
                   name='FetchScreen'
                   component={FetchScreen}
                   options={{title:"FetchScreen"}}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default MyComponent;
