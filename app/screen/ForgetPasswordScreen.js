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

    render () {
        return {
            <Text>这是忘记密码页面</Text>
        }
    }
}
