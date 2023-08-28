/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React , {useEffect,useCallback,useState , useMemo} from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';
import HomePage from './src/component/HomePage';

const App = () => {

  const[count,setCount] = useState(0);
  const[NEWcount,setNewCount] = useState(0);
  const onClick = () => {
    setCount(count + 1);
  }

  const onNewClick = useCallback( () =>{
    setNewCount(NEWcount + 1);
  },[NEWcount]);


  const factorial = useMemo(() => factorialOf(NEWcount), [NEWcount]);

  function factorialOf(n) {
    console.log('factorialOf(n) called!');
    return n <= 0 ? 1 : n * factorialOf(n - 1);
  }
  return (
      <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            {console.log(`render log ------------>`)}
            <HomePage newCount={NEWcount} onClick={onNewClick}/>
            
            <Text style={{marginTop:10}}>count : {count}</Text>
            <Text>Fact : {factorial}</Text>
            <TouchableOpacity onPress={onClick} style={{justifyContent:'center' ,marginTop:10 , alignItems:'center' , height:40,width:80,backgroundColor:'blue',borderRadius:10}}>
              <Text style={{color:'white'}}>
                  Click
              </Text>
            </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
