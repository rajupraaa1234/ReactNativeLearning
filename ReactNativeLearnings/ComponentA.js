import React , {useContext,useEffect, useState} from "react"
import {View,Text , Button , useWindowDimensions } from 'react-native';
import {AppContext} from '@context';

const ComponentA = (props) =>{
    const ctx = useContext(AppContext);
    const [newHeight , setHeight] = useState(0);
    const { height , weidth} = useWindowDimensions();

    useEffect(()=>{
        console.log(`HEIGHT-==> ${height}`)
    },[])

    return (
        <View style={{justifyContent:'center',alignSelf:'center',flex:1}}>
            <Text>Hey , Raju ComponentA {ctx.AppName}</Text>
            <Button style={{marginTop:10}} title="Click" onPress={()=>{props.navigation.navigate("ComponentB")}}/>
        </View>
    )
}

export default ComponentA;