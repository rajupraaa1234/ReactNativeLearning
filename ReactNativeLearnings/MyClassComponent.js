import React , { createRef } from "react";
import {View , Button , Text} from 'react-native'

class MyClassComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Name : 'raju',
        }
        this.myRef = createRef();
    }
    render(){
        const onClick = () =>{
            this.setState({
                Name : "asdafaf"
            });
            this.myRef.current.setNativeProps({
                style : {backgroundColor : 'red'}
            })
        }
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}> 
                <Text ref={this.myRef}>Hello Class Component {this.state.Name}</Text>
                <Button title="click" onPress={onClick}/>
            </View>
        )
    }
}

export default MyClassComponent;