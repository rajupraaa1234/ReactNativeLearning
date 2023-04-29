/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React , {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { ComponentA } from '@components';
import { AppContext } from '@contexts/context';


function App(): JSX.Element {

  const [username , setUserName] = useState("raju kumar gupta");

  const login = () => {
     console.log("OnLogin Btn click ---------------->")
  }

  const logout = () => {
    console.log("logout Btn click ---------------->")
  }

  const onClick = () => {
    console.log("onClick Btn click ---------------->")
  }

  // onClick : ()=> {},
  //   login: () => {},
  //   logout: () => {},
  //   username : "raju kumar

  return (
    <AppContext.Provider
        value={{
          login,
          logout,
          onClick,
          username,
        }}>
        <ComponentA />
    </AppContext.Provider>
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
