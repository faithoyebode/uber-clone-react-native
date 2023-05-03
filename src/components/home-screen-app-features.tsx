import React from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { filterData } from '../global/data';
import { colors } from '../global/styles';


const SCREEN_WIDTH = Dimensions.get('window').width;

const HomeScreenAppFeatures = () => {
  return (
    <View>
        <FlatList
            numRows={4}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={filterData}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <View style={styles.card}>
                    <View style={styles.view2}>
                        <Image 
                            style={styles.image2} 
                            source={item.image} 
                        />
                    </View>
                    <View>
                        <Text style={styles.title}>{item.name}</Text>
                    </View>
                </View>
            )}
        />
    </View>
  )
}

export default HomeScreenAppFeatures

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        margin: SCREEN_WIDTH/22
    },
    view2: {
        marginBottom: 5,
        borderRadius: 15,
        backgroundColor: colors.grey6
    },
    image2: {
        height: 60,
        width: 60,
        borderRadius: 8,
    },
    title: {
        color: colors.black,
        fontSize: 16
    }

})