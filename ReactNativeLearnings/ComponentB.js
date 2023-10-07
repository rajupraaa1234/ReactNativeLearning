import React, { useMemo, useState, useCallback, useRef } from "react"
import { View, Text, Button , DeviceEventEmitter } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ComponentC from './ComponentC';
import { setUseName, setAppName } from '@actions';
import UserModule from './UserModule.js';
// Example of useMemo 
const ComponentB = (props) => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState(false);
    const dispatch = useDispatch();
    const UserSelector = useSelector(state => state.UserReducer);
    const getNewFactorial = (num) => {
        console.log("getNewFactorial called")
        if (num == 0 || num < 0) return 1;
        if (num == 1) return 1;
        return getNewFactorial(num - 1) * num;
    }

    const ref = useRef();

    const childMethod = useCallback(() => {
        console.log(`child method`)
    }, [count]);


    //const factorial = getNewFactorial(count);    // If you are using directly then whenever any any state will change then
    //  getNewFactorial method will call to prevent this we can use useMemo hooks . 

    const factorial = useMemo(
        () => getNewFactorial(count),              // It will return memoized value . 
        [count]);

    const setUserName = () => {
        dispatch(setUseName("Raju kumar"))
    }
    const setAppName1 = () => {
        dispatch(setAppName("MindSpark"))
    }

    const customModule = () => {
        UserModule.MyMessage('RAjuk dasd');
    }
    
    const callEventEmiter = () =>{
        DeviceEventEmitter.emit("FirstName", "Raju kumar");
    }
    return (
        <View style={{ justifyContent: 'center', alignSelf: 'center', flex: 1 }}>
            <Text>Hey , New Count {count}</Text>
            <Text>Hey , New Factorial {factorial}</Text>
            <Text>Redux Value1 , {UserSelector.UserName}</Text>
            <Text>Redux Value2 , {UserSelector.AppName}</Text>
            <View style={{ marginTop: 10 }}>
                <Button title="click" onPress={() => { setCount(count + 1) }} />
            </View>
            <ComponentC count={count} childMethod={childMethod} ref={ref} />
            <View style={{ marginTop: 10 }}>
                <Button title={name ? "Clicked" : "Click"} onPress={() => { ref.current.callMethod() }} />
            </View>
            <View style={{ marginTop: 10 }}>
                <Button title={"setUserName"} onPress={setUserName} />
            </View>
            <View style={{ marginTop: 10 }}>
                <Button title={"setAppName"} onPress={setAppName1} />
            </View>

            <View style={{ marginTop: 10 }}>
                <Button title={"Costum Module"} onPress={customModule} />
            </View>

            <View style={{ marginTop: 10 }}>
                <Button title={"Call Event Emitter"} onPress={callEventEmiter} />
            </View>

        </View>
    )
}

export default ComponentB;