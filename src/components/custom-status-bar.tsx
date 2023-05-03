import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../global/styles';

const CustomStatusBar = ({backgroundColor, ...props}) => {
  return (
    <>
        <View style={[styles.statusBar, { backgroundColor }]}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
        <View style={styles.appBar} />
    </>
  )
}

export default CustomStatusBar; 

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 40: 50;
const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor: colors.blue,
    height: Platform.OS === 'ios' ? APPBAR_HEIGHT : 0, 
    width: Platform.OS === 'ios' ? '100%' : 0, 
    opacity: Platform.OS === 'ios' ? 1 : 0,
  },
})