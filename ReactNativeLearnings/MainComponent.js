import React from "react"
import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

const MainComponent = () =>{
    const Stack = createStackNavigator();
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
                    name="ComponentB"
                    component={ComponentB}
                  />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainComponent;