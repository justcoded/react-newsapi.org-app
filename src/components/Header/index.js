import React                             from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import styles                            from './styles';

import Navigation from '../Navigation';

const Header = ({category, country, isSideBarOpen, onCategoryChange, toggleSideMenu, toggleModal}) => {
  return [
    <View style={styles.header} key='top-menu'>
      <TouchableOpacity
        style={styles.imageWrapper}
        onPress={toggleSideMenu.bind(null, !isSideBarOpen)}>
        <Image style={styles.image}
               source={country.img ? country.img : require('../../assets/allCountries.png')}/>
      </TouchableOpacity>
      <View style={styles.imageWrapper}>
        <Image style={styles.logo}
               source={require('../../assets/logo.png')}/>
      </View>
      <TouchableOpacity
        style={styles.imageWrapper}
        onPress={toggleModal}>
        <Image source={require('../../assets/Search.png')}/>
      </TouchableOpacity>
    </View>,
    <Navigation
      category={category}
      onCategoryChange={onCategoryChange}
      key='navigation'/>
  ]
};

export default Header;