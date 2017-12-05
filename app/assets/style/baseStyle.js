import React from 'react';
import {Platform,StyleSheet} from 'react-native';

const baseStyle = StyleSheet.create({
    baseText: {
        color:"#ffffff",
        fontFamily:(Platform.OS === 'android' ? 'fangzhengkaitijianti' : 'Times'),
        fontSize:20,
        backgroundColor:'transparent'
    },
    basePromptText: {
        color:"#ffffff",
        fontFamily:(Platform.OS === 'android' ? 'fangzhengkaitijianti' : 'Times'),
        fontSize:16,
        backgroundColor:'transparent'
    }
})

export {baseStyle}
