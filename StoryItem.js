import React from 'react';
import PropTypes from 'prop-types'
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

const { width, height } = Dimensions.get('window')
// How many story items we want to have in each row and column
const cols = 2, rows = 2;

export default class StoryItem extends React.PureComponent {
  static propTypes = {
    storyItem: PropTypes.object.isRequired,
    // Called when user taps on a story item
    // onSelect: PropTypes.func.isRequired,
  }
  render() {
    const { storyItem, onSelect } = this.props
    console.log('PIC ', storyItem.picture)
    return (
      <TouchableOpacity style={styles.container} onPress={() => onSelect(storyItem)}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: storyItem.picture }} style={styles.image} />
        </View>
        <Text style={styles.title} numberOfLines={1}>{storyItem.item}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginBottom: 10,
    height: 100,
    width: 100,
  },
  imageContainer: {
    flex: 1,                          // take up all available space
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 14,
    marginTop: 4,
  },

})
