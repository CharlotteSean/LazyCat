import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ViewPagerAndroid,
    ImageBackground,
    Dimensions,
    PixelRatio
} from 'react-native';

import {getWidthByPercent, getHeightByPercent} from '../assets/uitl/baseTool'

export default class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/images/welcome_bg1.jpeg')} style={styles.loginBgImg}>

                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        width: getWidthByPercent(100),
        height: getHeightByPercent(100)
    },
    loginBgImg: {
        width: getWidthByPercent(100),
        height: getHeightByPercent(100),
        zIndex: 100
    },
    welcomeInfo: {
        zIndex: 1000,
        fontSize: 30,
        color: '#000000'
    }
})
