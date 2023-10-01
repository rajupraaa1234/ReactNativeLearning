import React , {useEffect , memo}from "react"
import {View , Text , Button} from 'react-native';


const ComponentC = (props) =>{
    const {count , childMethod } = props;
   useEffect(()=>{
        console.log(`component C`);
   },[]);
    
    return (
        <View>
           {console.log(`component C`)}
            <Text>Component C {count}</Text>
             <Button title="Click C" onPress={childMethod}/>

        </View>
    )
}

export default memo(ComponentC);