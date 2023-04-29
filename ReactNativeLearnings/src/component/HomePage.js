//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {useSelector , useDispatch} from 'react-redux';
import { setUserName } from '@action';


// create a component
const HomePage = () => {
    const userState = useSelector(state => state.getUserReducer);
    const dispatch = useDispatch();
    
    const onclick = () => {
        dispatch(setUserName("raju kumar"))
    }
  
    return (
        <View style={{ justifyContent: 'center', flex: 1, flexDirection: 'column', alignItems: 'center' }}>
            <Text>New Session 1 {userState.userName}</Text>
            <TouchableOpacity onPress={onclick} style={{ width: 80, height: 40, backgroundColor: 'blue', marginTop: 20, borderRadius: 10, justifyContent: 'center' }}>
                <Text style={{ color: 'white', justifyContent: 'center', alignSelf: 'center', alignItems: 'center' }}>Click</Text>
            </TouchableOpacity>
        </View>
    );
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
export default HomePage;
