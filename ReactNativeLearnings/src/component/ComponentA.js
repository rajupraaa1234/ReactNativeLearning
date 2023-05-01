//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet , TouchableOpacity} from 'react-native';
import useCounter from '../hooks/useCounter';
// create a component
const ComponentA = () => {

    const {Increment , Decreament ,reset ,count } = useCounter(0,1);
  
    return (
        <View style={styles.container}>
            <Text>Count 1 : {count}</Text>
             <View style={{flexDirection:'row',justifyContent:'center',marginTop:10}}> 
                    <TouchableOpacity onPress={Increment} style={{height:40,width:80,borderRadius:10,backgroundColor:'blue',margin:5 , justifyContent:'center',alignItems:'center'}}>
                            <Text style={{color:'white'}}>Increment</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={Decreament} style={{height:40,width:80,borderRadius:10,backgroundColor:'blue',margin:5 , justifyContent:'center',alignItems:'center'}}>
                            <Text style={{color:'white'}}>Decreament</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={reset} style={{height:40,width:80,borderRadius:10,backgroundColor:'blue',margin:5 , justifyContent:'center',alignItems:'center'}}>
                            <Text style={{color:'white'}}>Reset</Text>
                    </TouchableOpacity>
             </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
       
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection : 'column'
    },
});

//make this component available to the app
export default ComponentA;
