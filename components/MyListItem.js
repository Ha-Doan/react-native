import React from 'react'
import axios from 'axios'
import MyStoryItems from './MyStoryItems'
import App from './App'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'
import { StackNavigator } from 'react-navigation'
import {NavigationActions} from 'react-navigation'

class MyListItem extends React.PureComponent {
  constructor(props){
      super(props)
  }

  _onPress = () => {
    this.props.onPressItem(this.props.id)
    var url = 'http://192.168.178.25:8097/' + this.props.title.toLowerCase()
    console.log('CATE ', url)
    axios.get(url)
    .then(responseData => {
      console.log('ITEM ', responseData.data)
      this.props.navigator.push({
      component: MyStoryItems,
      title: 'Story Items',
      passProps: {items: responseData.data},
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <TouchableOpacity key={this.props.title} onPress={this._onPress}>
        <View>
          <Text style={{ paddingTop: 15 }}>
            {this.props.title}
          </Text>
        </View>
      </TouchableOpacity>
    )}}

export default MyListItem
