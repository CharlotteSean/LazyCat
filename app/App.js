/**
 * LazyCat
 * Created by hicoldcat
 * Created on 2017/11/6  22:22
 * https://github.com/hicoldcat/LazyCat.git
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';

import LoginScreen from './screen/LoginScreen'
import WelcomeScreen from './screen/WelcomeScreen'

export default class App extends Component<{}> {
  render() {
    return (
        <View style={styles.container}>
            {(Platform.OS === 'android') ? <WelcomeScreen/> : <LoginScreen/>}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  }
});
