import React , { useState } from "react";
import { View ,Text , TextInput} from 'react-native';

const MyComponent = () =>{
    const [name,setName] = useState('');

    const callApi = () => {
        console.log(`calling api --nw---> ${name}`);
    }
   
   const withClosure = (text) =>{
        setName(text);
        debouncedHandleInput();
   }

 function debounce(func, delay) {
    let timerId;
    return function(){
        clearInterval(timerId);
        timerId = setTimeout(()=>{
            func();
        },delay);
    }
  }

  const debouncedHandleInput = debounce(callApi, 1000); 

   let interval;
   const withouuClosure = (text) =>{
         setName(text);
         clearInterval(interval)
         interval = setTimeout(()=>{
            callApi();
         },3000);
   }

   // In every 2 sec Api will call of typing is still going on by the user . 
   const throtling = () =>{
      let flag = true;
      return function(){
        if(flag){
            flag = false;
            callApi();
            setTimeout(()=>{
                flag = true;
            },2000)
        }
      }
   }
   const Throtling = throtling();
   const throtlingCheck = (text) =>{
         setName(text);
         Throtling();
   }
    return (
        <View style={{justifyContent:'center',flex:1,alignSelf:'center'}}>
            <Text>Raju kumar</Text>
            <TextInput value={name} onChange={throtlingCheck} style={{height : 40,width:320,borderColor:'gray',borderWidth:2,marginTop:20}}/>
        </View>
    )
}

export default MyComponent;