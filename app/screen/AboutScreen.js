import React, { Component } from 'react';
import { View, Text, Image, StyleSheet,findNodeHandle} from 'react-native';
import { DrawerItems, SafeAreaView} from 'react-navigation';
import { BlurView, VibrancyView } from 'react-native-blur';



export default class SideBar extends Component {
    static navigationOptions = {

    }

    constructor(props) {
        super(props);
        this.state = { viewRef: null };
    }

    imageLoaded() {
        this.setState({ viewRef: findNodeHandle(this.backgroundImage) });
     }


    render () {
        return (
            <View style={styles.container}>
                <SafeAreaView  style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
                    <Image
                        ref={(img) => { this.backgroundImage = img; }}
                        onLoadEnd={this.imageLoaded.bind(this)}
                        source={require('../assets/images/welcome_bg.jpeg')}
                        style={{width:200,height:700}}/>

                    <BlurView
                        style={styles.absolute}
                        viewRef={this.state.viewRef}
                        blurType="dark"
                        blurAmount={10}>

                       <Text>SideBar</Text>

                   </BlurView>
                </SafeAreaView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#00ff00'
    },
    absolute: {
    position: "absolute",
    top: 0, left: 0, bottom: 0, right: 0,
  },


});
