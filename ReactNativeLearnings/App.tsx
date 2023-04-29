/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/Redux/store/store';
import HomePage from './src/component/HomePage';



function App(): JSX.Element {

  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}


export default App;
