import React, { useContext, useEffect, useState , useRef} from "react"
import { View, Text, Button, useWindowDimensions , TextInput} from 'react-native';
import { AppContext } from '@context';
import { CustomModal } from '@components';
const ComponentA = (props) => {
    const ctx = useContext(AppContext);
    const [newHeight, setHeight] = useState(0);
    const { height, weidth } = useWindowDimensions();
    const [visible, setVisible] = useState(false);
    const ref = useRef();
    const ref1 = useRef();

    useEffect(() => {
        console.log(`HEIGHT-==> ${height}`)
    }, [])

    const buttonRef = useRef(null);

  const updateButtonText = () => {
    if (buttonRef.current) {
      buttonRef.current.setNativeProps({
        title: 'Updated Button Text',
      });
    }
  };

    const domManupulate = () => {
            if(ref1 && ref1?.current){
                ref1?.current.setNativeProps({
                    style : {backgroundColor : 'green'},
                    title : 'OnPress'
                })
                
                //console.log(`ref1 ------> ${JSON.stringify(ref1.current)}`);
            }
    }
    const moveToClass = () => {
        props.navigation.navigate('MyClassComponent');
    }
    const moveToAnimation =()=>{
      props.navigation.navigate('AnimationComponent');
    }
    return (
        <View style={{ justifyContent: 'center', alignSelf: 'center', flex: 1 }}>
            <View  ref={ref} style={{backgroundColor : 'red'}} onPress={() => { console.log("asdadfsdfsdfs sdfsdff") }}>
                <Text  >Hey , Raju ComponentA</Text>
            </View>
            <TextInput ref={ref1} value="raju" editable={true}/>
            <CustomModal visible={visible} onClose={() => { setVisible(!visible) }} />
            <Button style={{ marginTop: 10 }} title="Click" onPress={() => { props.navigation.navigate("ComponentB") }} />
            <Button style={{ marginTop: 30 }} title="Open Modal" onPress={() => { setVisible(true) }} />
            <Button ref={buttonRef} style={{ marginTop: 30 }} title="DOM Manupulation" onPress={updateButtonText} />
            <Button ref={buttonRef} style={{ marginTop: 30 }} title="Class Component" onPress={moveToClass} />
            <Button ref={buttonRef} style={{ marginTop: 30 }} title="Animation" onPress={moveToAnimation} />
        </View>
    )
}

export default ComponentA;