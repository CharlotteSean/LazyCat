import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';

import {baseStyle} from '../../../assets/style/baseStyle';
import {getWidthByPercent, getHeightByPercent} from '../../../utils/baseTool'

export default class LoginComponent extends Component {

    static propTypes = {
        userInfo: PropTypes.object,
    };

    constructor(props) {
        super(props);
        this.state = {
            userName:'',
            passWord:'',
        };
        this._onLogin = this._onLogin.bind(this);
    }

    _onLogin = () => {
        fetch('https://www.easy-mock.com/mock/5a1b898afc9bad5c3ee51403/lazycat/hello',{ mode: 'cors'}).then((res) => {
            console.log(res)
        })


        // fetch(this.props.store.root + 'login', {
        //     method: 'POST',
        //     mode:'cors',
        //     headers:new Headers({
        //         'Content-Type': 'application/json; charset=utf-8',
        //         'Access-Control-Allow-Origin': null,
        //         'Access-Control-Allow-Credentials': true,
        //         'Accept':'*/*',
        //         'Host':'www.easy-mock.com'
        //     })
        // }).then((response) => {
        //         if (response.ok) {
        //             console.log(response)
        //         }
        //     })

    }

    render () {
        return (
            <View style={styles.loginContainer}>
                <TextInput
                    style={[baseStyle.baseText,styles.loginItem,styles.userName]}
                    onChangeText={(text) => this.setState({userName:text})}
                    placeholder='用户名'
                    placeholderTextColor='#ffffff'
                    underlineColorAndroid="transparent"
                    blurOnSubmit={true}
                    value={this.state.userName}>
                </TextInput>
                <TextInput
                    style={[baseStyle.baseText,styles.loginItem,styles.passWord]}
                    onChangeText={(text) => this.setState({passWord:text})}
                    secureTextEntry={true}
                    placeholder='密码'
                    placeholderTextColor='#ffffff'
                    underlineColorAndroid="transparent"
                    blurOnSubmit={true}
                    inlineImageLeft='../../../assets/images/welcome_bg1.jpeg'
                    value={this.state.passWord}>
                </TextInput>
                <TouchableOpacity onPress={this._onLogin} style={styles.loginBtn} activeOpacity={0.9}>
                    <Text style={[baseStyle.baseText,styles.button]}>登录</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loginContainer: {
        width:getWidthByPercent(100),
        justifyContent:'center',
        alignItems:'center',
    },
    loginItem: {
        height: 40,
        width:getWidthByPercent(80),
        borderBottomWidth:1,
        borderColor:'#FFFFFF',
        padding: 10,
        fontSize:18,
    },
    userName: {
        marginTop:getHeightByPercent(25)
    },
    passWord: {
        marginTop:getHeightByPercent(2)
    },
    loginBtn: {
        width:getWidthByPercent(80),
        height: 40,
        marginTop:getHeightByPercent(5),
        backgroundColor:'#409EFF',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
    },
})
