import React, { Component } from 'react';
import {View , Text , Button} from 'react-native';

class HomePage extends Component{
    constructor(){
        super();
        this.state = {
            counter : 0
        }
        console.log(`constuctor -------------> `)
    }

    componentDidMount(){
        console.log(`componentDidMount --------------> `);
    }

    componentDidUpdate(){
        console.log(`componentDidUpdate --update------------> `);
    }

    componentWillUnmount(){
        console.log(`componentWillUnmount --------------> `);
    }

    render(){
        const onClick = () => {
            console.log(`onClick clicked -------------> `);
        }
       
        return(
            
            <View style={{justifyContent:'center',alignItems:'center',alignSelf:'center',flex:1}}>
                <Text>HomePage count value : {this.state.counter}</Text>
                <Button title='Inc'  onPress={()=>{this.setState({counter : this.state.counter + 1})}}/>

                <View style={{marginTop:10}}>
                    <Button title='Dec' onPress={()=>{onClick()}}/>
                </View>
            </View>
        )
    }
}

export default HomePage;