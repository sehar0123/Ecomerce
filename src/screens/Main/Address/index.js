import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { address, cards, categories } from 'src/config/dummyData'
import styles from './styles'
import { fontRef, heightRef, widthRef } from 'src/config/screenSize'

import globalStyles from 'src/config/globalStyles'
import Icon from 'react-native-dynamic-vector-icons'
import Header from 'src/components/Header'
import Head from 'src/components/Head'
import Button from 'src/components/Button'
import { FAB } from 'react-native-paper'
import OrderDetail from 'src/components/OrderDetail'

const Address = ({navigation}) => {

  return (
    <View style={styles.container}>
           <Header  />
<Head  left={true} title={'Addresses'}  />
     <FlatList
   data={address}
   bounces={false}
   keyExtractor={item => item.id}

   ItemSeparatorComponent={() => <View style={{padding: 5 *heightRef}}></View>}
   ListHeaderComponent={() => <View style={{padding: 10 *heightRef}}></View>}
   ListEmptyComponent={() => (
     <View style={styles.empty}>
       <Icon
         name="bookmark-minus"
         type="MaterialCommunityIcons"
         size={120 * fontRef}
         color={globalStyles.Theme.primary}
       />
       <Text style={styles.text}>No Menu Yet </Text>
     </View>
   )}
   ListFooterComponent={() => <View style={{padding: 10*heightRef}}></View>}
   renderItem={({item,index}) => (
     <TouchableOpacity  style={styles.card} activeOpacity={1}>
          
          <Icon
            name={item.icon}
            type={item.type}
            size={40 * fontRef}
            // style={{alignSelf:'center'}}
            color={globalStyles.Theme.red}
          />
   <View style={styles.view}>

 <Text style={styles.text}>{item.title}</Text>
 <Text style={styles.heading}>Jolly Grande</Text>
  
   <Text style={styles.heading}>C962+XRH, Glaxo Town, Lahore, Punjab</Text>
  
 
 </View>
 <Icon 
         name="check"
         type="Feather"
         size={30 * fontRef}
         color={globalStyles.Theme.primary}
       />

</TouchableOpacity>
   
   )}
 />
  <FAB
    icon="plus"
    color={globalStyles.Theme.backgroundColor}
    style={styles.fab}
    onPress={() =>navigation.navigate('EditedAddress')}
  />
    </View>
  )
}

export default Address
