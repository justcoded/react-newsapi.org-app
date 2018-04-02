import React, { Component } from 'react';
import { Provider }         from 'react-redux'
import store                from './src/store'
import { AppRegistry }      from 'react-native';
import AppContainer               from './src/containers/AppContainer';

class JustNews extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('justNews', () => JustNews);
