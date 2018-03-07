import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { DrawerItems, SafeAreaView,withNavigation} from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import {observer, inject} from 'mobx-react';

import AvatarView from '../../components/AvatarView'

@inject('userStore')
export default class SideBar extends Component {
    static navigationOptions = {

    }

    goProfileScreen = () => {
        console.log(this.props);
        this.props.navigation.navigate("Welcome");
    }

    render () {
        return (
            <LinearGradient  colors={['#409EFF', '#d2d9e0']} style={styles.container}>
                <SafeAreaView  style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>

                    <AvatarView
                        style={{width:200,height:200}}
                        avatar={this.props.userStore.userInfo.avatar}
                        nickName={this.props.userStore.userInfo.nickName}
                        onAvatarPress={this.goProfileScreen}
                        onTextPress={this.goProfileScreen}
                    />

                    <Text>SideBar</Text>
                </SafeAreaView>
            </LinearGradient>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },


});
