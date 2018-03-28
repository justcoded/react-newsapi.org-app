import React                                   from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import I18n from 'react-native-i18n';

import styles                                  from './styles';

const ErrorScreen = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onErrorClick}>
        <Image style={styles.image} source={require('../../assets/noWifi.png')}/>
      </TouchableOpacity>
      <Text style={styles.header}>{I18n.t('error-screen.header')}</Text>
      <Text style={styles.errorText}>{I18n.t('error-screen.bad-internet-connection')}</Text>
      <Text style={styles.errorText}>{I18n.t('error-screen.action-internet-connection')}</Text>
    </View>
  );
};

export default ErrorScreen;