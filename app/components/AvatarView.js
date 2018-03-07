import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {baseStyle} from '../assets/style/baseStyle'

export default class AvatarView extends Component {

    static propTypes = {
        avatar:PropTypes.string.isRequired,
        nickName:PropTypes.string.isRequired,
        onAvatarPress:PropTypes.func.isRequired,
        onTextPress:PropTypes.func.isRequired,
    }

    render () {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.props.onAvatarPress} style={styles.avatarContainer} activeOpacity={0.8}>
                    <Image  source={this.props.avatar === '' ? require('../assets/images/avatar_white.png') : this.props.avatar} style={styles.avatar}></Image>
                </TouchableOpacity>
                <Text style={[baseStyle.baseText,styles.nickName]} onTouch={this.props.onTextPress}>{this.props.nickName}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        marginTop:10
    },
    avatarContainer:{
        borderWidth:1,
        borderRadius:30,
        borderColor:'#fff',
    },
    avatar: {
        width:60,
        borderRadius:30,
        height:60,
    },
    nickName: {
        fontSize:16,
        marginTop:10
    }


})
