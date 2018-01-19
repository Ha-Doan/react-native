import React from 'react';
import { StyleSheet, Text, View, NavigatorIOS } from 'react-native';
import CategorySelectionScene from './components/CategorySelectionScene'

class App extends React.PureComponent {
  render() {
   return (
     <NavigatorIOS
       initialRoute={{
         component: CategorySelectionScene,
         title: 'Story Generator',
         passProps: {index: 1},
       }}
       style={{flex: 1}}
     />
   )}
}

export default App
