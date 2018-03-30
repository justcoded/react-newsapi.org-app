import React                                    from 'react';
import { Image, Modal, TouchableOpacity, View } from 'react-native';
import styles                                   from './styles';
import I18n from '../../i18n';

import Search from '../Search';

const PLACEHOLDER = I18n.t('query-search-placeholder');

const ModalComponent = ({isModalOpen, toggleModal, onSearchPress}) => {
  return (
    <Modal
      animationType="slide"
      visible={isModalOpen}
      onRequestClose={() => {}}
      transparent={false}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.closeButton}
                          onPress={toggleModal}>
          <Image source={require('../../assets/close.png')}/>
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <Search
            placeHolder={PLACEHOLDER}
            onSearchPress={onSearchPress}/>
        </View>
      </View>
    </Modal>
  );
};

export default ModalComponent;