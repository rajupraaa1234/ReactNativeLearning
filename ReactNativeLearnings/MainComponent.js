import React  , { useEffect } from "react"
import {View,Text , DeviceEventEmitter} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import MyClassComponent from './MyClassComponent';
import AnimationComponent from './AnimationComponent';

const MainComponent = () =>{
    const Stack = createStackNavigator();

    useEffect(()=>{
      const subscription = DeviceEventEmitter.addListener('FirstName', (data) => {
        console.log('Event received:', data);
      });
      return ()=>{
        DeviceEventEmitter.removeSubscription(subscription)
      }
},[]);


    return (
        <NavigationContainer>
            <Stack.Navigator
               initialRouteName="ComponentA"
               screenOptions={{
                 headerShown : false
               }}
             >
                  <Stack.Screen
                    name="ComponentA"
                    component={ComponentA}
                  />
                   <Stack.Screen
                    name="AnimationComponent"
                    component={AnimationComponent}
                  />
                   <Stack.Screen
                    name="ComponentB"
                    component={ComponentB}
                  />
                  <Stack.Screen
                    name="MyClassComponent"
                    component={MyClassComponent}
                  />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainComponent;