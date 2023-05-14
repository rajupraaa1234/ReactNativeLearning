import React, { Component } from 'react';
import {View , Text , Button} from 'react-native';

class MyComponent extends Component{
    constructor(){
        super();
        this.state = {
            counter : 0,
        }
       
    }

    componentDidMount(){
        console.log(`componentDidMount --------------> ${JSON.stringify(this.props)} `);
    }

    componentDidUpdate(){
        console.log(`componentDidUpdate --update------------> `);
    }

    componentWillUnmount(){
        console.log(`componentWillUnmount --------------> `);
    }


    render(){
        const { navigate } = this.props.navigation;
        return(
            
            <View style={{justifyContent:'center',alignItems:'center',alignSelf:'center',flex:1}}>
                <Text>count value : {this.state.counter}</Text>
                <Button title='Inc'  onPress={()=>{this.setState({counter : this.state.counter + 1})}}/>

                <View style={{marginTop:10}}>
                    <Button title='Dec' onPress={()=>{this.setState({counter : this.state.counter - 1})}}/>
                </View>

                <View style={{marginTop:20}}>
                    <Button title='HomePage' onPress={()=>{navigate('HomePage')}}/>
                </View>
            </View>
        )
    }
}

export default (MyComponent);