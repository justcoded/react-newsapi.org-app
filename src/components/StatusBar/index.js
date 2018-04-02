import { NativeModules, Platform, View } from 'react-native';
import React                             from 'react';

const {StatusBarManager} = NativeModules;

const StatusBar = () => {

  const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT ? 0 : 20;
  return (
    <View style={{height: STATUSBAR_HEIGHT}}></View>
  )
};

export default StatusBar;
