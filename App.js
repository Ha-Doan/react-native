import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MyFlatList } from './MyFlatList'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>Welcome to the story generator!</Text>
        <MyFlatList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#AF7AC5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
