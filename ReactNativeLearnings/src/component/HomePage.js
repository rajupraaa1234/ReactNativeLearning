//import liraries
import React, { Component , useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
import {useStore} from '@mobx/hooks';

// create a component
const HaomePage = () => {

    const {appStore , loginStore} = useStore;
    const [temp,setTemp] = useState(false);

    const onClick = () =>{
      appStore.setApprName("Mindspark");
      loginStore.setUserName("Study.1430");
      loginStore.setPassword("12345");
      setTemp(true);
    }

    return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                AppName : {appStore.appName}
            </Text>
            <Text>
                UserName : {loginStore.userName}
            </Text>
            <Text>
                user password : {loginStore.password}
            </Text>
            <Text>
                Method call : {loginStore.myUserName}
            </Text>

            <TouchableOpacity onPress={onClick} style={{ height: 40, width: 60, marginTop: 10, borderRadius: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }}>
                <Text style={{ color: 'white' }}>Click</Text>
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
export default HaomePage;
