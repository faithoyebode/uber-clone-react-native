import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/styles';

const HomeScreenHero = () => {
  return (
    <View style={styles.home}>
        <Text style={styles.text1}>Destress your commute</Text>
        <View style={styles.view1}>
            <View style={styles.view8}>
                <Text style={styles.text2}>Read a book. Take a nap. Stare out the window</Text>
                <View style={styles.button1}>
                    <Text style={styles.button1Text}>Ride with Uber</Text>
                </View>
            </View>
            <View>
                <Image 
                    style={styles.image1}
                    source={require('../../assets/uberCar.png')}
                />
            </View>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
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
    view8: {
        flex: 4,
        marginTop: -25
    },

});

export default HomeScreenHero;
