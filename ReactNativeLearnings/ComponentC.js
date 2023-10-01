import React , {useEffect , forwardRef , useImperativeHandle}from "react"
import {View , Text , Button} from 'react-native';


const ComponentC = (props , ref) =>{
    const {count , childMethod } = props;
   useEffect(()=>{
        console.log(`component C`);
   },[]);

   useImperativeHandle(ref, ()=>{
         return {
            callMethod : ()=> methodCalledFromParent()
         }
   })
   const methodCalledFromParent = () => {
        console.log(`methodCalledFromParent called`);
   }
    
    return (
        <View>
           {console.log(`component C`)}
            <Text>Component C {count}</Text>
             <Button title="Click C" onPress={childMethod}/>

        </View>
    )
}

export default forwardRef(ComponentC);