//import liraries
import React, { Component , useEffect , forwardRef , useImperativeHandle} from 'react';
import { View, Text, StyleSheet , TouchableOpacity } from 'react-native';

const HomePage = (props , ref) => {
    const {newCount , onClick} = props;

    useImperativeHandle(ref , ()=>{
            return {
                CallchildMethod : () => childMethod(),
            };
    });

    const childMethod = () =>{
        console.log(`childMethod ----------------> `);
    }
    return (
        <View style={styles.container}>
            <Text>HomePage {newCount}</Text>
            <TouchableOpacity onPress={onClick} style={{justifyContent:'center' ,marginTop:10 , alignItems:'center' , height:40,width:80,backgroundColor:'blue',borderRadius:10}}>
              <Text style={{color:'white'}}>
                  inc
              </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default forwardRef(HomePage);
