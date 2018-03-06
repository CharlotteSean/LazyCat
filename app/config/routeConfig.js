import {SafeAreaView,StackNavigator,DrawerNavigator} from 'react-navigation';
import React, {Component} from 'react';
import LoginScreen from '../screen/LoginScreen';
import WelcomeScreen from '../screen/WelcomeScreen';
import HomeScreen from '../screen/HomeScreen'
import AboutScreen from '../screen/AboutScreen'
import SideBar from '../modules/sideBar'

import ForgetPasswordScreen from '../screen/ForgetPasswordScreen';
import AccountRegisterScreen from '../screen/AccountRegisterScreen';

// StackNavigator RouteConfigs
export const  StackRouteConfigs = {
    Home: {
        screen: HomeScreen
    },
    Welcome: {
        screen: WelcomeScreen
    }
}

// StackNavigatorConfig
export const StackNavigatorConfig = {
    initialRouteName: 'Home',
}

// DrawerNavigator RouteConfigs
export const DrawerRouteConfigs = {
    Home: {
        screen: StackNavigator(StackRouteConfigs, StackNavigatorConfig)
    },
    About: {
        screen: AboutScreen
    }
}

// DrawerNavigatorConfig
export const DrawerNavigatorConfig = {
    drawerWidth:200,
    drawerPosition:'left',
    drawerBackgroundColor:'#409EFF',
    contentComponent:SideBar
}

// LoginModule RouteConfigs
export const LoginRouteConfigs = {
    Login: {
        screen: LoginScreen
    },
    ForgetPassword: {
        screen: ForgetPasswordScreen,
    },
    AccountRegister: {
        screen: AccountRegisterScreen
    },
}

// LoginModuleConfigs
export const LoginNavigatorConfig = {
    initialRouteName: 'Login',
    mode:'card',
    headerMode:'screen'
}
