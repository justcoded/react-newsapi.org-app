import React, { Component } from 'react';
import { Provider }         from 'react-redux'
import store                from './src/store'
import { AppRegistry }      from 'react-native';
import App                  from './src/components/App';

class JustNews extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('justNews', () => JustNews);
