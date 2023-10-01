/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import MainComponent from './MainComponent';
import {AppContext} from '@context';
import {Provider} from 'react-redux';
import Store from './Redux/Store/Store';

const App = () => {
  const onLoginClick = () =>{
      console.log(`onLogin Click----->`)
  }
  return (
    <Provider store={Store}>  
       <AppContext.Provider
          value={{
            AppName :  'InterView Pre',
            onLogin : onLoginClick
          }}
        >
            
               <MainComponent/>
           
       </AppContext.Provider>
       </Provider>
     
   )
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
