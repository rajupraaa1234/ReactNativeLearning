import React from "react";
import {View , Text , Animated } from 'react-native';


const AnimationComponent = () =>{
    const position = new Animated.ValueXY({x:0,y:0});
    Animated.timing(position,{              // use timing method for linear movement in x & y axis .
        toValue : {x:200,y:500},
        useNativeDriver : true,              // use this for smoth move 
        duration : 5000                      // duration to complete an animation .
    }).start()                              // need to start animation using start method . 


    // Animated.spring(position,{              // use timing method for linear movement in x & y axis .Animates a value according to an analytical spring model based on damped harmonic oscillation.
    //     toValue : {x:200,y:500},
    //     useNativeDriver : true,              // use this for smoth move 
    //     speed : 20,                           // speed of animation 
    //     bounciness : 40                       // for give bounice 
    // }).start()                              // need to start animation using start method . 

    const rotate = position.x.interpolate({             /// interpolate is use for to change the input form to output form so here it is cangeing from 
                                                        // range from 0 - 100 to 0-360 deg
        inputRange : [0,100],
        outputRange : ['0deg','360deg']
    })
    return (
        <View style={{flex:1}}>
            <Animated.View style={{         // wrap componet with Animated 
                height:80,
                width:80,
                backgroundColor:'red',
                transform : [               // add transform ( aray which take set of object or animation )
                    {translateX : position.x},
                    {translateY : position.y},
                    {rotate : rotate}
                ]
             }}>

            </Animated.View>
            
        </View>
    )
}

export default AnimationComponent;