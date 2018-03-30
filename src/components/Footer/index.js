import React          from 'react';
import { Text, View } from 'react-native';
import I18n from '../../i18n';
import styles         from './styles';

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.footerContent}>{I18n.t('footer-menu')}</Text>
    </View>
  );
};

export default Footer;