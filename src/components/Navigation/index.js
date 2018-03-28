import React, { PureComponent }   from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import styles                     from './styles';

import { NAVIGATION_ITEMS } from '../../constants/view-list';
import I18n from '../../locales';

const LOCALED_NAVIGATION_ITEMS = I18n.t('navigation-items');

export default class Navigation extends PureComponent {
  componentWillMount() {
    this.props.onCategoryChange(NAVIGATION_ITEMS[0]);
  }

  render() {
    const {category, onCategoryChange} = this.props;
    return (
      <View style={styles.header}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.layout}>
          {
            LOCALED_NAVIGATION_ITEMS.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={onCategoryChange.bind(null, NAVIGATION_ITEMS[index])}>
                <Text style={[styles.item, NAVIGATION_ITEMS[index] === category && styles.active]}>
                  {item.toUpperCase()}
                </Text>
              </TouchableOpacity>
              )
            )
          }
        </ScrollView>
      </View>
    )
  }
}