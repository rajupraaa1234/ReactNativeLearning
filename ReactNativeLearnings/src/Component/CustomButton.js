import React , {Component} from "react";
import {View, view , Button} from 'react-native';


class CustomButton extends Component {
    constructor(){
        super();
        console.log(`CustomButton constuctor -------------> `)
    }

    componentDidMount(){
        console.log(`CustomButton componentDidMount --------------> `);
    }

    componentDidUpdate(){
        console.log(`CustomButton componentDidUpdate --update------------> `);
    }

    componentWillUnmount(){
        console.log(`CustomButton componentWillUnmount --------------> `);
    }


    render(){
        console.log(`CustomButton render --------------> `);
        return(
              <View style={{height : 80,width:90}}>
                    <Button title="Click" onPress={()=>{console.log("click me")}}/>
              </View>
        )
    }
}

export default CustomButton;
