import React, { Component } from 'react';
import { View }             from 'react-native';
import styles               from './styles';

import HeaderContainer   from '../../containers/HeaderContainer';
import NewsListContainer from '../../containers/NewsListContainer'
import ModalContainer    from '../../containers/ModalContainer';
import Footer            from '../Footer';
import ErrorsScreen      from '../ErrorScreen';
import SideMenuContainer from '../../containers/SideMenuContainer';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      error: false
    };
  }

  onError() {
    this.setState({
      error: !this.state.error
    })
  }

  render() {
    if (!this.state.error) {
      return ([
        <SideMenuContainer key='sideMenu'>
          <View style={styles.container}>
            <HeaderContainer/>
            <NewsListContainer onErrorHappens={this.onError.bind(this)}/>
            <Footer/>
          </View>
        </SideMenuContainer>,
        <ModalContainer key='modal'/>
      ]);
    }

    return <ErrorsScreen onErrorClick={this.onError.bind(this)}/>
  }
}