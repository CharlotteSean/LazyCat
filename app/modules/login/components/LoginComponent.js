import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import { Button,Toast} from 'antd-mobile';

import {baseStyle} from '../../../assets/style/baseStyle';
import {getWidthByPercent, getHeightByPercent} from '../../../utils/baseTool'

import RootStore from '../../../store/RootStore'

export default class LoginComponent extends Component {

    static propTypes = {
        userInfo: PropTypes.object,
        handleSetState:PropTypes.func
    };

    constructor(props) {
        super(props);
    }

    onLogin = () => {
        fetch(RootStore.apiUrl('login'),{
            method:'POST',
            headers:{
                "Accept": "application/json",
               'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                "userName":this.props.userInfo.userName,
                "passWord":this.props.userInfo.passWord
            })
        })
        .then((response) => {return response.json()})
        .then((res) => {
            if (res.success) {
                Toast.info("欢迎你："+res.data.userInfo.userName,2);
            }else {
                Toast.fail(res.msg,2);
            }
        })
        .catch((err) => {
            console.log(err);
        })

    }

    onChangeUserName =  (userName) => {
        this.props.handleSetState({
            userInfo:Object.assign(this.props.userInfo,{
                userName:userName
            })
        } )
    }

    onChangePassword = (passWord) => {
        this.props.handleSetState({
            userInfo:Object.assign(this.props.userInfo,{
                passWord:passWord
            })
        })
    }

    render () {
        return (
            <View style={styles.loginContainer}>
                <TextInput
                    style={[baseStyle.baseText,styles.loginItem,styles.userName]}
                    onChangeText={(userName) => this.onChangeUserName(userName)}
                    placeholder='用户名'
                    placeholderTextColor='#ffffff'
                    underlineColorAndroid="transparent"
                    blurOnSubmit={true}
                    value={this.props.userInfo.userName}>
                </TextInput>
                <TextInput
                    style={[baseStyle.baseText,styles.loginItem,styles.passWord]}
                    onChangeText={(passWord) => this.onChangePassword(passWord)}
                    secureTextEntry={true}
                    placeholder='密码'
                    placeholderTextColor='#ffffff'
                    underlineColorAndroid="transparent"
                    blurOnSubmit={true}
                    value={this.props.userInfo.passWord}>
                </TextInput>
                <Button type="primary" style={styles.loginBtn} onClick={this.onLogin}>
                    登录
                </Button>
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
        borderWidth:0
    },
})
