import React, { useEffect } from "react";
import { View, Button } from 'react-native';


const MyButton = () => {
    useEffect(() => {
        console.log(`MyButton useEffect---->`);
        return ()=>{
            console.log(`MyButton didunmount ----> `)
        }
    }, []);

    const temp = () =>{
        console.log(`MyButton temp ----> `)
    }
    return (
        <View style={{ height: 80, width: 90 }}>
           {temp()}
            <Button title="Click" onPress={() => { console.log("click me") }} />
        </View>
    )
}

export default MyButton;