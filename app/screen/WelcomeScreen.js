import React ,{ Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    Dimensions
} from 'react-native';

const { height, width } = Dimensions.get('window');

export default class WelcomeScreen extends Component {
    render () {
        return (
            <View style={{flex: 1}}>
                <ImageBackground source={require('../assets/images/welcome_bg1.jpeg')} style={{width:width,height:height,flex: 1}}>
                   <Text style={{zIndex:100,color:'#FFFFFF',fontSize:50,flex: 1}}>你好！</Text>
                 </ImageBackground>
            </View>

        )
    }
}

const styles = StyleSheet.create({

})
