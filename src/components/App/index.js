import React from 'react';
import { View }             from 'react-native';
import styles               from './styles';

import HeaderContainer   from '../../containers/HeaderContainer';
import NewsListContainer from '../../containers/NewsListContainer'
import ModalContainer    from '../../containers/ModalContainer';
import Footer            from '../Footer';
import ErrorsScreen      from '../ErrorScreen';
import SideMenuContainer from '../../containers/SideMenuContainer';

const App = ({error}) => {
  return ([
    <SideMenuContainer key='sideMenu'>
      <View style={styles.container}>
        <HeaderContainer/>
        {
          !error ? (
            <NewsListContainer/>
          ) : (
            <ErrorsScreen/>
          )
        }
        <Footer/>
      </View>
    </SideMenuContainer>,
    <ModalContainer key='modal'/>
  ]);
}

export default App;