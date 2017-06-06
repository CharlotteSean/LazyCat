import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TextInput,
    Button,
    TouchableOpacity
} from 'react-native';

import {baseStyle} from '../assets/style/baseStyle'
import {getWidthByPercent, getHeightByPercent} from '../assets/uitl/baseTool'


export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName:'',
            passWord:'',
        };
    }

    _onLogin () {

    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/images/welcome_bg1.jpeg')} style={styles.loginBgImg}>

                    {/* 标题 */}
                    <View style={styles.titleContainer}>
                        <Text style={[baseStyle.baseText, styles.titleContent]}>LOGO</Text>
                    </View>

                    {/* 登陆项 */}
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
                            inlineImageLeft='../assets/images/welcome_bg1.jpeg'
                            value={this.state.passWord}>
                        </TextInput>
                        <TouchableOpacity onPress={this._onLogin} style={styles.loginBtn} activeOpacity={0.9}>
                            <Text style={[baseStyle.baseText,styles.button]}>登录</Text>
                        </TouchableOpacity>
                    </View>

                    {/* 注册账号和忘记密码 */}
                    <View style={styles.accountContainer}>
                        <Text style={baseStyle.basePromptText}>注册账号</Text>
                        <Text style={baseStyle.basePromptText}>忘记密码</Text>
                    </View>

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
        flexDirection:'column',
    },
    titleContainer: {
        marginTop:getHeightByPercent(10),
    },
    titleContent: {
        textAlign:"center",
        fontSize:50,
    },
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
        marginTop:getHeightByPercent(35)
    },
    passWord: {
        marginTop:getHeightByPercent(2)
    },
    loginBtn: {
        width:getWidthByPercent(80),
        height: 40,
        marginTop:getHeightByPercent(5),
        backgroundColor:'#4C9FF8',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
    },
    button: {
        textAlign:'center',

    },
    accountContainer: {
        width:getWidthByPercent(100),
        marginTop:getHeightByPercent(2),
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        paddingLeft:getWidthByPercent(10),
        paddingRight:getWidthByPercent(10),
    },
})
