import React, { PureComponent }                            from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles                                              from './styles';
import I18n from '../../locales';

import Search from '../Search';

import { COUNTRIES } from '../../constants/view-list';

const PLACEHOLDER = I18n.t('country-search-placeholder');

export default class Menu extends PureComponent {
  constructor() {
    super();
    this.state = {
      countries: COUNTRIES
    }
  }

  filterCountries(query) {
    const queryInLowerCase = query.toLowerCase();
    const countries = COUNTRIES.filter(item => {
      return item.name.toLowerCase().indexOf(queryInLowerCase) >= 0
    });

    this.setState({countries});
  }

  onCountryChoose(item) {
    this.props.onCountryChange(item);
    this.props.toggleSideBar();
  }

  render() {
    const {country} = this.props;

    return ([
      <View key='search' style={styles.search}>
        <Search
          placeHolder={PLACEHOLDER}
          onChange={this.filterCountries.bind(this)}
          onSearchPress={this.filterCountries.bind(this)}/>
      </View>,
      <ScrollView style={styles.menu} key='side-bar'>
        {
          this.state.countries.map(item => (
              <TouchableOpacity
                key={item.code}
                onPress={this.onCountryChoose.bind(this, item)}
                style={[styles.listWrapper, item.name === country.name && styles.activeItem]}>
                <Image
                  style={styles.image}
                  source={item.img}/>
                <Text
                  style={styles.item}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )
          )
        }
      </ScrollView>
    ])
  }
}
