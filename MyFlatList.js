import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { MyListItem } from './MyListItem'

export default class MyFlatList extends React.PureComponent {

  state = {selected: (new Map(): Map<string, boolean>)};

  _keyExtractor = (item, index) => item.id;

  _onPressItem = (id: string) => {
    // updater functions are preferred for transactional updates
    this.setState((state) => {
      // copy the map rather than modifying state.
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id)); // toggle
      return {selected};
    });
  };

  _renderItem = ({item}) => (
    <MyListItem
      id={item.id}
      onPressItem={this._onPressItem}
      selected={!!this.state.selected.get(item.id)}
      title={item.title}
      //style={styles.item}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Bible'},
            {key: 'Animals'},
            {key: 'StarWars'},

          ]}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}
