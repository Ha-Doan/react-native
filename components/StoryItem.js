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

export default class StoryItem extends React.PureComponent {
  static propTypes = {
    storyItem: PropTypes.object.isRequired,
  }
  selectItem = (item) => {
    console.log('SELECTED ', item.item)
  }
  render() {
    const { storyItem } = this.props
    console.log('PICTURE ', storyItem.picture)
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.selectItem(storyItem)}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: storyItem.picture }} style={styles.image} />
        </View>
        <Text style={styles.title} numberOfLines={1}>{storyItem.item}</Text>
      </TouchableOpacity>
  )}}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginBottom: 10,
    height: 100,
    width: 100,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 14,
    marginTop: 4,
  },
  note: {
    marginLeft: 10,
    marginBottom: 10,
    textAlign: 'center',
  }

})
