import React, {Component} from 'react';
import LoginScreen from '../screen/LoginScreen';
import ForgetPasswordScreen from '../screen/ForgetPasswordScreen';
import AccountRegisterScreen from '../screen/AccountRegisterScreen';
import WelcomeScreen from '../screen/WelcomeScreen';

export const RouteConfigs = {
    WelcomeScreen: {
        screen: WelcomeScreen
    },
    ForgetPasswordScreen: {
        screen: ForgetPasswordScreen
    },
    LoginScreen: {
        screen: LoginScreen
    }
}

export const RouteNavigatorConfig = {
    initialRouteName: 'WelcomeScreen',
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#f4511e'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }
}

export const LoginConfig = {
    LoginScreen: {
        screen: LoginScreen
    },
    ForgetPasswordScreen: {
        screen: ForgetPasswordScreen
    },
    AccountRegisterScreen: {
        screen: AccountRegisterScreen
    },
}

export const LoginNavigatorConfig = {
    initialRouteName: 'LoginScreen'
}
