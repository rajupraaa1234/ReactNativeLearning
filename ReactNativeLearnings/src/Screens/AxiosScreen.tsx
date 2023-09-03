import  React from 'react';
import {View , Text , TouchableOpacity} from 'react-native';
import { AxiosGet , AxiosPost, AxiosDelete} from '@axiosApi';


const AxiosScreen = (props) =>{

    const axiosGet = async () =>{
        const endPoint = '/users/2';
        const res = await AxiosGet(endPoint);
        console.log(`res======> ${JSON.stringify(res)}`);
    }

    const axiosPost = async () =>{
        const req = {
            "name": "morpheus",
            "job": "leader"
        };
        const endPoint = '/users';
        const res = await AxiosPost(endPoint,req);
        console.log(`res======> ${JSON.stringify(res)}`);
    }

    const axiosDelete = async () => {
        const endPoint = '/users/2';
        const res = await AxiosDelete(endPoint);
        console.log(`res======> ${JSON.stringify(res)}`);
    }
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity style={{height:40,width:120,backgroundColor:'blue',borderRadius:10,alignItems:'center',justifyContent:'center'}} onPress={()=>{props.navigation.navigate('FetchScreen')}}>
                <Text style={{color:'white'}}>Axios Screen</Text>
            </TouchableOpacity>

            <View style={{marginTop:20,flexDirection:'row'}}>
                <TouchableOpacity style={{height:40,width:120,backgroundColor:'blue',borderRadius:10,alignItems:'center',justifyContent:'center'}} onPress={()=>{axiosGet()}}>
                    <Text style={{color:'white'}}>Axios Get</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height:40,width:120,backgroundColor:'blue',borderRadius:10,alignItems:'center',justifyContent:'center',marginLeft:10}} onPress={()=>{axiosPost()}}>
                    <Text style={{color:'white'}}>Axios Post</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height:40,width:120,backgroundColor:'blue',borderRadius:10,alignItems:'center',justifyContent:'center',marginLeft:10}} onPress={()=>{axiosDelete()}}>
                    <Text style={{color:'white'}}>Axios Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AxiosScreen;