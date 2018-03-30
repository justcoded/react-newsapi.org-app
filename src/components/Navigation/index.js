import React, { PureComponent }   from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import styles                     from './styles';

import { NAVIGATION_ITEMS } from '../../constants/view-list';
import I18n from '../../i18n';

const LOCALED_NAVIGATION_ITEMS = I18n.t('navigation-items');

export default class Navigation extends PureComponent {
  componentWillMount() {
    this.props.onCategoryChange(this.props.category);
  }

  render() {
    const {category, onCategoryChange} = this.props;
    return (
      <View style={styles.header}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.layout}>
          {
            NAVIGATION_ITEMS.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={onCategoryChange.bind(null, item)}>
                <Text style={[styles.item, item === category && styles.active]}>
                  {LOCALED_NAVIGATION_ITEMS[item]}
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