import React, { Component } from 'react';
import { View, Text} from 'react-native';
import {observer, inject} from 'mobx-react';

@inject('userStore')
export default class HomeScreen extends Component {
    static navigationOptions = {

    }

    render () {
        console.log('home----');
        console.log(this.props);
        return (
            <View>
                <Text>Home</Text>
            </View>
        )
    }
}
