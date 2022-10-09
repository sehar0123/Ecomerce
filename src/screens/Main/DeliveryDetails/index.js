import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { cards, categories } from 'src/config/dummyData'
import styles from './styles'
import { fontRef, heightRef, widthRef } from 'src/config/screenSize'

import globalStyles from 'src/config/globalStyles'
import Icon from 'react-native-dynamic-vector-icons'
import Header from 'src/components/Header'
import Head from 'src/components/Head'
import Button from 'src/components/Button'
import { Divider } from 'react-native-paper'

const DeliveryDetail = () => {
  return (
    <View style={styles.container}>
                       <Header  />
<Head  left={true} title={'Track Details'}  />
<View style={styles.row}>
    <View>
<Text style={styles.text2}>Order 19297848457857</Text>
          <Text style={styles.heading2}>Placed on 04 Aug 2022 20:27:33</Text>
          </View>
          <Text style={styles.text}>Delivered</Text>
          </View>
          <Text style={styles.text}>Billing Address</Text>
          <View style={{flexDirection:'row',paddingHorizontal:10*heightRef,paddingVertical:20*heightRef,}}>
       
          <Icon
         name="address-card-o"
         type="FontAwesome"
         size={30 * fontRef}
         style={{paddingVertical:10*heightRef}}
         color={globalStyles.Theme.red}
       />
       <View>
       
       </View>
       <View style={{paddingVertical:10*heightRef}}>
          <Text style={styles.text2}>Receiver:John </Text>
          <Text style={styles.heading}>04884855858</Text>
          <Text style={styles.heading}>Street No# 12 Mesa, Arizona USA</Text>
          </View>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-around',backgroundColor:'white',padding:2*heightRef,alignItems:'center'}}>
       <Text style={styles.text2}>Tracking Number </Text>
          <Text style={styles.heading}>0499495598</Text>
          <Icon
         name="copy-outline"
         type="Ionicons"
         size={20 * fontRef}
         style={{marginRight:10}}
         color={globalStyles.Theme.red}
       />
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:20*heightRef}}>
            <View>
            <View style={{...styles.circle,backgroundColor:globalStyles.Theme.red}}>
            </View>
                <Divider style={styles.divider}/>

            </View>
          <View style={{width:'70%',justifyContent:'space-around'}}>
          <Text style={styles.text2}>Delivered</Text>
          <Text style={styles.heading2}>Your Package has been Delivered</Text>
          <View></View>
          </View>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-around',}}>
            <View>
            <View style={styles.circle}>
            </View>
                <Divider style={styles.divider}/>

            </View>
          <View style={{width:'70%',justifyContent:'space-around'}}>
          <Text style={styles.text2}>Delivered to Pick-up Point</Text>
          <Text style={styles.heading2}>Your Package has been dropped off at pick-up point!</Text>
          <View></View>
          </View>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-around',}}>
            <View>
            <View style={styles.circle}>
            </View>
                <Divider style={styles.divider}/>

            </View>
          <View style={{width:'70%',justifyContent:'space-around'}}>
          <Text style={styles.text2}>Shipped</Text>
          <Text style={styles.heading2}>Your Package has been Shipped with track number 13Y77476347 </Text>
          </View>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-around'}}>
            <View>
            <View style={styles.circle}>
            </View>
                <Divider style={styles.divider}/>

            </View>
          <View style={{width:'70%',justifyContent:'space-around'}}>
          <Text style={styles.text2}>Reached Logistic Facility</Text>
          <Text style={styles.heading2}>Your Package has been reached our logistics facility </Text>
          </View>
          </View>
    </View>
  )
}

export default DeliveryDetail

