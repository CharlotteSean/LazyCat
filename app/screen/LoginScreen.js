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
import {observer} from 'mobx-react/native';


import {baseStyle} from '../assets/style/baseStyle'
import {getWidthByPercent, getHeightByPercent} from '../assets/uitl/baseTool'
import MainStore from '../store/MainStore';

@observer
export default class LoginScreen extends Component {
    static defaultProps = {
        store: MainStore
    };

    constructor(props) {
        super(props);
        this.state = {
            userName:'',
            passWord:'',
        };
        this._onLogin = this._onLogin.bind(this);
    }

    _onLogin() {
        fetch(this.props.store.root + 'login',{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstParam: 'yourValue',
                secondParam: 'yourOtherValue',
            })
        }).then((res) => {
            console.log(res._bodyInit.json())
        })

    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/images/welcome_bg1.jpeg')} style={styles.loginBgImg}>

                    {/* 标题 */}
                    <View style={styles.titleContainer}>
                        <Image source={require('../assets/images/logo.png')} style={styles.logoImg} />
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
        justifyContent:'center',
        flexDirection:'row'
    },
    logoImg:{
        width: 100,
        height: 100,
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
