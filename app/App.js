/**
 * LazyCat
 * Created by hicoldcat
 * Created on 2017/11/6  22:22
 * https://github.com/hicoldcat/LazyCat.git
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {SafeAreaView,StackNavigator} from 'react-navigation';
import {RouteConfigs, RouteNavigatorConfig,LoginConfig,LoginNavigatorConfig} from './config/routeConfig';
import {
    Provider,
    observer
} from 'mobx-react';

import RootStore from './store/RootStore';
const RootStack = StackNavigator(RouteConfigs, RouteNavigatorConfig);
const LoginStack = StackNavigator(LoginConfig, LoginNavigatorConfig);

@observer
export default class App extends Component {
    render() {
        if (RootStore.isLogin) {
            return (
                <Provider store={RootStore}>
                    <RootStack/>
                </Provider>
            )
        } else {
            return (
                <Provider store={RootStore}>
                    <LoginStack/>
                </Provider>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    }
});
