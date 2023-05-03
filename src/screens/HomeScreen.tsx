import { StyleSheet, Text, View, Dimensions, StatusBar, ScrollView, Image, FlatList } from 'react-native'
import React from 'react'
import { colors, parameters } from '../global/styles';
import { Icon } from '@rneui/themed';
import CustomStatusBar from '../components/custom-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeScreenHeader from '../components/home-screen-header';
import HomeScreenHero from '../components/home-screen-hero';
import HomeScreenAppFeatures from '../components/home-screen-app-features';
import HomeScreenLocationOptions from '../components/home-screen-location-options';

const SCREEN_WIDTH = Dimensions.get('window').width;


const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <CustomStatusBar
          animated={true}
          backgroundColor={colors.blue}
          barStyle={'light-content'}
          hidden={false}
        />
        <HomeScreenHeader />
        <ScrollView bounces={false}>
            <HomeScreenHero />
            <HomeScreenAppFeatures />
            <HomeScreenLocationOptions />
        </ScrollView>
      <Text>Hello HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingBottom: 30,

      },
      header: {
        backgroundColor: colors.blue,
        height: parameters.headerHeight,
        alignItems: 'flex-start',
      },
      image1: {
        height: 100,
        width: 100,
      },
      home:  {
        backgroundColor: colors.blue,
        paddingLeft: 20,
      },
      text1: {
        color: colors.white,
        fontSize: 21,
        paddingVertical: 20,
      },
      text2: {
        color: colors.white,
        fontSize: 16,
      },
      view1: {
        flexDirection: 'row',
        flex: 1,
        paddingTop: 30,
      },
      button1: {
        height: 40,
        width: 150,
        backgroundColor: colors.black,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 20
      },
      button1Text: {
        color: colors.white,
        fontSize: 17,
        lineHeight: 40
      },
      
      
      map: {
        height: 150,
        marginVertical: 0,
        width: SCREEN_WIDTH*0.92
      },
      text4: {
        fontSize: 20,
        color: colors.black,
        marginLeft: 20,
        marginBottom: 20 
      },
      icon1: {
        marginLeft: 10,
        marginTop: 5
      },
      view8: {
        flex: 4,
        marginTop: -25
      },
      carsAround: {
        width: 28,
        height: 14
      },
      location: {
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: colors.blue,
        alignItems: 'center',
        justifyContent: 'center'
      },
      view9: {
        width: 4,
        height: 4,
        borderRadius: 2,
        backgroundColor: 'white'
      }
})