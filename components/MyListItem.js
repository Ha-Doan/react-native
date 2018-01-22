import React from 'react'
import axios from 'axios'
import MyStoryItems from './MyStoryItems'
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

  onPress = () => {
    this.props.onPressItem(this.props.id)
    var url = 'http://172.16.30.139:8097/' + this.props.title.toLowerCase()
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
      <TouchableOpacity key={this.props.title} onPress={this.onPress}>
        <View>
          <Text style={{ paddingTop: 15 }}>
            {this.props.title}
          </Text>
        </View>
      </TouchableOpacity>
    )}}

export default MyListItem
