import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    TextInput,
    Button,
    TouchableOpacity
} from 'react-native';

export default class ForgetPasswordView extends Component {
    static defaultProps = {
        userName:'',
        phoneNumber:null
    }

    static navigationOptions = {
        headerStyle: {
            backgroundColor: "#409EFF"
        },
        headerTitle:'注册账号',
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    };

    render () {
        return (
            <Text>这是注册账号页面</Text>
        )
    }
}
