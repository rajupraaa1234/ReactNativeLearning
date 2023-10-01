import React , {useMemo, useState} from "react"
import {View,Text , Button} from 'react-native';
// Example of useMemo 
const ComponentB = (props) =>{
   const [count,setCount] = useState(0);
   const [name,setName] = useState(false);
   
   const getNewFactorial = (num) =>{
    console.log("getNewFactorial called")
      if(num == 0 || num<0) return 1;
      if(num == 1) return 1;
      return getNewFactorial(num-1) * num;
   }
   
   //const factorial = getNewFactorial(count);    // If you are using directly then whenever any any state will change then
                                                 //  getNewFactorial method will call to prevent this we can use useMemo hooks . 

   const factorial =  useMemo(
     ()=> getNewFactorial(count),              // It will return memoized value . 
   [count]);

    return (
        <View style={{justifyContent:'center',alignSelf:'center',flex:1}}>
            <Text>Hey , New Count {count}</Text>
            <Text>Hey , New Factorial {factorial}</Text>
            <View style={{marginTop:10}}>
                <Button title="click" onPress={()=>{setCount(count + 1)}}/>
            </View>
            <View style={{marginTop:10}}>
                <Button title={name ? "Clicked" : "Click"} onPress={()=>{setName(!name)}}/>
            </View>
        </View>
    )
}

export default ComponentB;