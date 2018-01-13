import React from 'react'
import PropTypes from 'prop-types'
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
} from 'react-native'
import StoryItem from './StoryItem'

class MyStoryItems extends React.PureComponent {
  static propTypes = {
   items: PropTypes.arrayOf(PropTypes.object).isRequired,
 }

  render() {
    console.log('ITEMS ', this.props.items)
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollview}>
          {this.props.items.map(item => <StoryItem
            storyItem={item}
          />)}
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
