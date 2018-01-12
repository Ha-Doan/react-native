import React from 'react'
import PropTypes from 'prop-types'
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
} from 'react-native'

class MyStoryItems extends React.PureComponent {
  static propTypes = {
   // Movie object with title, genre, and poster
   items: PropTypes.arrayOf(PropTypes.object).isRequired,
   // Called when user taps on a poster
  //  onOpen: PropTypes.func.isRequired,
 }
  render() {
    console.log('HUHU ', this.props.items)
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollview}>
          {this.props.items.map(item => <Text>{item.item}</Text>)}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#AF7AC5',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  scrollview: {
    paddingVertical: 20
  }
})
export default MyStoryItems
