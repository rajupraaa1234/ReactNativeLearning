import React, { useContext, useEffect, useState } from "react"
import { View, Text, Button, useWindowDimensions } from 'react-native';
import { AppContext } from '@context';
import { CustomModal } from '@components';
const ComponentA = (props) => {
    const ctx = useContext(AppContext);
    const [newHeight, setHeight] = useState(0);
    const { height, weidth } = useWindowDimensions();
    const [visible, setVisible ] = useState(false);

    useEffect(() => {
        console.log(`HEIGHT-==> ${height}`)
    }, [])

    return (
        <View style={{ justifyContent: 'center', alignSelf: 'center', flex: 1 }}>
            <Text>Hey , Raju ComponentA {ctx.AppName}</Text>
            <CustomModal visible={visible} onClose={()=>{setVisible(!visible)}}/>
            <Button style={{marginTop:10}} title="Click" onPress={()=>{props.navigation.navigate("ComponentB")}}/>
            <Button style={{ marginTop: 30 }} title="Open Modal" onPress={() => {  setVisible(true)}} />
        </View>
    )
}

export default ComponentA;