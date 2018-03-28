import React, { PureComponent }                     from 'react';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import styles                                       from './styles';

export default class Search extends PureComponent {
  constructor() {
    super();
    this.state = {
      query: ''
    }
  }

  onChangeText(query) {
    this.setState({query});
    if (this.props.onChange) {
      this.props.onChange(query);
    }
  }

  render() {
    const {onSearchPress, placeHolder} = this.props;

    return (
      <View style={styles.searchFieldWrapper}>
        <TextInput
          style={styles.searchField}
          onChangeText={this.onChangeText.bind(this)}
          underlineColorAndroid='#ffffff'
          placeholder={placeHolder}/>
        <TouchableOpacity
          onPress={onSearchPress.bind(null, this.state.query)}
          style={styles.searchIconWrapper}>
          <Image
            style={styles.searchIcon}
            source={require('../../assets/Search.png')}/>
        </TouchableOpacity>
      </View>
    );
  }
}