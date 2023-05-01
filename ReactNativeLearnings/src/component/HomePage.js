//import liraries
import React, { Component , useEffect , memo } from 'react';
import { View, Text, StyleSheet , TouchableOpacity } from 'react-native';

const HomePage = (props) => {
    const {newCount , onClick} = props;
    return (
        <View style={styles.container}>
            {console.log(`frm homepage ---------RENDER-`)}
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

export default memo(HomePage);
