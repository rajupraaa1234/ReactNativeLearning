//import liraries
import React , {useContext} from 'react';
import { View, Text, StyleSheet , TouchableOpacity } from 'react-native';
import { AppContext } from '@contexts/context';


const MyComponent = () => {
    const ctx = useContext(AppContext);
    return (
        <View style={styles.container}>
            <Text>Component B {ctx.username}</Text>
            <TouchableOpacity style={{height:40,width:40 , marginTop:10, backgroundColor:'red'}} onPress={ctx.login}>
     
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        flexDirection : 'column',
    },
});

export default MyComponent;
