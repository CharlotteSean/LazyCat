import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { DrawerItems, SafeAreaView} from 'react-navigation';




export default class SideBar extends Component {
    static navigationOptions = {

    }

    render () {
        return (

            <View>
                <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
                    <Text>SideBar</Text>
                </SafeAreaView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
