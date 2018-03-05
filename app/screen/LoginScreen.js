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
// import {observer} from 'mobx-react';
// import { observable, action } from "mobx";

import {baseStyle} from '../assets/style/baseStyle'
import {getWidthByPercent, getHeightByPercent} from '../utils/baseTool'

import LoginComponent from '../modules/login/components/LoginComponent'

// @observer
export default class LoginScreen extends Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            userInfo:{
                userName:'',
                passWord:'',
            },
        };
        this.setState = this.setState.bind(this);
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/images/welcome_bg1.jpeg')} style={styles.loginBgImg}>

                    {/* 标题 */}
                    <View style={styles.titleContainer}>
                        <Image source={require('../assets/images/logo.png')} style={styles.logoImg} />
                    </View>

                    {/* 登录组件 */}
                    <LoginComponent userInfo={this.state.userInfo} handleSetState={this.setState}/>

                    {/* 注册账号和忘记密码 */}
                    <View style={styles.accountContainer}>
                        <Text style={baseStyle.basePromptText} onPress={() => this.props.navigation.navigate("AccountRegisterScreen")}>注册账号</Text>
                        <Text style={baseStyle.basePromptText} onPress={() => this.props.navigation.navigate("ForgetPasswordScreen")}>忘记密码</Text>
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
        justifyContent:'center',
        flexDirection:'row'
    },
    logoImg:{
        width: 100,
        height: 100,
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
