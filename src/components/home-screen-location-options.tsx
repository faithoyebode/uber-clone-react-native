import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from '@rneui/themed';
import { colors } from '../global/styles';

const adresses = [
    {
        street: '32 Olivia Rd',
        city: 'Klipfontein 83-Ir',
        state: 'Boksburg',
    },
    {
        street: 'Hughes Industrial Park',
        city: 'Hughes',
        state: 'Boksburg',
    }
]

const HomeScreenLocationOptions = () => {

  return (
    <>
        <View style={styles.view3}>
            <Text style={styles.text3}>Where to?</Text>
            <View style={styles.view4}>
                <Icon 
                    type="material-community" 
                    name="clock-time-four" 
                    color={colors.grey1} 
                    size={26} 
                />
                <Text style={{marginLeft: 5}}>Now</Text> 
                <Icon 
                    type="material-community" 
                    name="chevron-down" 
                    color={colors.grey1} 
                    size={26} 
                />
            </View>
        </View>
        {
            adresses.map((item, i) => (
                <View style={{...styles.view5, borderBottomWidth: i === adresses.length - 1 ? 0 : 1 }}>
                    <View style={styles.view6}>
                        <View style={styles.view7}>
                            <Icon 
                                type="material-community" 
                                name="map-marker" 
                                color={colors.black} 
                                size={22} 
                            />
                        </View>
                        <View>
                            <Text style={{fontSize: 18, color: colors.black}}>
                                {item.street}
                            </Text>
                            <Text style={{color: colors.grey3}}>
                                {item.city}, {item.state}
                            </Text>
                        </View>
                        <View style={{marginLeft: 'auto'}}>
                            <Icon 
                                type="material-community" 
                                name="chevron-right" 
                                color={colors.grey} 
                                size={26} 
                            />  
                        </View>
                    </View>
                </View>
            ))
        }
        
    </>
  )
}

export default HomeScreenLocationOptions

const styles = StyleSheet.create({

    view3: {
        flexDirection: 'row',
        marginTop: 5,
        height: 50,
        backgroundColor: colors.grey6,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 15
    },
    text3: {
        marginLeft: 15,
        fontSize: 20,
        color: colors.black
    },
    view4: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 20,
    },
    view5: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 25,
        justifyContent: 'space-between',
        marginHorizontal: 15,
        borderBottomColor: colors.grey4,
        borderBottomWidth: 1,
        flex: 1
    },
    view6: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 5
    },
    view7: {
        backgroundColor: colors.grey6,
        height: 40,
        width: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
    },
})