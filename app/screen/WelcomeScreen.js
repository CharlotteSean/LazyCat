import React ,{ Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    Dimensions,
    Button
} from 'react-native';

const { height, width } = Dimensions.get('window');

class LogoTitle extends Component {
  render() {
    return (
      <Image
        source={require('../assets/images/logo.png')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}

export default class WelcomeScreen extends Component {
    static navigationOptions = {
        // title: 'Welcome Ni',
        headerTitle: <LogoTitle />,
        headerRight: (
     <Button
       onPress={() => {console.log(this.props)}}
       title="Info"
       color="#fff"
     />
   ),
        /* No more header config here! */
      };


    render () {
        return (
            <View style={{flex: 1}}>
                <ImageBackground source={require('../assets/images/welcome_bg1.jpeg')} style={{width:width,height:height,flex: 1}}>
                   <Text style={{zIndex:100,color:'#FFFFFF',fontSize:50,flex: 1}}>你好！</Text>
                   <Button
                     onPress={() => {console.log(this.props)}}
                     title="Info"
                     color="#000"
                   />
                 </ImageBackground>
            </View>

        )
    }
}

const styles = StyleSheet.create({

})
