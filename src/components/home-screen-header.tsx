import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, parameters } from '../global/styles'
import { Icon } from '@rneui/themed'

const HomeScreenHeader = () => {
  return (
    <View style={styles.header}>
        <View style={styles.icon1}>
            <Icon 
                type="material-community" 
                name="menu" 
                color={colors.white} 
                size={35} 
            /> 
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.blue,
        height: parameters.headerHeight,
        alignItems: 'flex-start',
    },
    icon1: {
        marginLeft: 10,
        marginTop: 5
      },
})

export default HomeScreenHeader
