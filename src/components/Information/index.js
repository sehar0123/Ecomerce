//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {categories, info, Properties} from 'src/config/dummyData';
import {widthRef} from 'src/config/screenSize';
import styles from './styles';

// create a component
const Information = () => {
  const navigation = useNavigation();
  const [selectedCatogry, setSelectedCtogry] = useState('0');
  return (
    <View>
      <FlatList
        data={categories}
        bounces={false}
        horizontal={true}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        // ItemSeparatorComponent={() => <View style={{padding: 10}}></View>}
        // ListHeaderComponent={() => <View style={{padding: 5}}></View>}
        // ListFooterComponent={() => <View style={{height: 120}}></View>}
        renderItem={({item}) =>
          selectedCatogry == item.id ? (
            <TouchableOpacity onPress={() => setSelectedCtogry(item.id)}>
              <LinearGradient
                colors={['#F7931E', '#B45D0D']}
                style={styles.circle}>
                <Text style={styles.title2}>{item.title}</Text>
              </LinearGradient>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.border}
              onPress={() => setSelectedCtogry(item.id)}>
              <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
          )
        }
      />
      <FlatList
        data={Properties}
        bounces={false}
        numColumns={3}
        columnWrapperStyle={{flex: 1, justifyContent: 'space-around'}}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        // ItemSeparatorComponent={() => <View style={{margin: 10}}></View>}
        ListHeaderComponent={() => <View style={{padding: 5}}></View>}
        ListFooterComponent={() => <View style={{padding: 5}}></View>}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.box}>
            <Text style={styles.title3}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
      <View style={{height: 120}}></View>
    </View>
  );
};

// define your styles

//make this component available to the app
export default Information;
