import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native'
import MyListItem from './MyListItem'
import axios from 'axios'

class CategorySelectionScene extends React.PureComponent {
  state = {selected: (new Map(): Map<string, boolean>)}
  keyExtractor = (item, index) => item.id || item.category
  onPressItem = (id: string) => {
    // updater functions are preferred for transactional updates
    this.setState((state) => {
      // copy the map rather than modifying state.
      const selected = new Map(state.selected)
      selected.set(id, selected.get(id)) // toggle
      return {selected}
    })}

  renderItem = ({item}) => (
    <MyListItem
      id={item.id}
      onPressItem={this.onPressItem}
      selected={!!this.state.selected.get(item.id)}
      title={item.category}
      navigator={this.props.navigator}
    />)

  componentDidMount() {
    axios.get('http://192.168.178.25:8097/categories')
    .then(responseData => {
      console.log('RES ', responseData.data)
      if (responseData)
        this.setState( {'data' : responseData.data} )})
    .catch(err => console.log(err))
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          extraData={this.state}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          style={styles.myList}
        />
      </View>
    )}}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#AF7AC5',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  myList: {
    paddingTop: 20,
  },
})

export default CategorySelectionScene

//'https://0fkx6lrbs1.execute-api.eu-central-1.amazonaws.com/prod/categories', { headers: { "x-api-key": "726mno5K5paxoUdS8aaWo5b1qfcLOTWtsuyGrWp0" }}
