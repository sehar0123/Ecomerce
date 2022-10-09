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

const Checkout = ({navigation}) => {
  return (
    <View style={styles.container}>
    <Header  />
<Head  left={true} title={'Check Out'}  />

<View style={{height:600*heightRef}}>
   <FlatList
   data={cards}
   bounces={false}
   keyExtractor={item => item.id}

   ItemSeparatorComponent={() => <View style={{padding: 5 *heightRef}}></View>}
   ListHeaderComponent={() => <View ><Text style={styles.title}>Shipping Address</Text>
   <View  style={{padding:10,}}>
   
   
   <View style={{flexDirection:'row'}}>
   <Icon
            name="location-outline"
            type="Ionicons"
            size={30 * fontRef}
            color={globalStyles.Theme.red}
          />
          <View>
   <Text style={styles.heading}>Jolly Grande</Text>
   <Text style={styles.heading}>+ (042) 35950591</Text>
   <Text style={styles.heading}>C962+XRH, Glaxo Town, Lahore, Punjab</Text>
   </View>
   </View>
   
   </View>
   <Text style={styles.title}>Order Summary</Text></View>}
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
          
      <Image
resizeMode='contain'
 style={styles.image}
 source={item.icon}>
   </Image> 
   <View style={styles.view}>

 <Text style={styles.text}>Beechtree</Text>
  <Text style={styles.heading} >French Toast Big Girls</Text>
  
  <Text style={styles.price}>{item.price}</Text>
  
 
 </View>
 <Text style={{...styles.price,alignSelf:'center'}}>{" 1x "}</Text>


</TouchableOpacity>
   
   )}
 />
 </View>
  <Text style={styles.title}>Payment With</Text>
          <View style={styles.cardview}>
            <TouchableOpacity
              style={styles.iconview}
              activeOpacity={0.6}
             >
              <Image
                resizeMode="contain"
                source={require('../../../assets/Images/money.png')}
                style={styles.image2}
              />
              <Text style={styles.text}>Cash</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.iconview}>
              <Image
                resizeMode="contain"
                source={require('../../../assets/Images/apple-pay.png')}
                style={styles.image2}
              />
              <Text style={{...styles.text,textAlign:'center'}}>Apple Pay</Text>
            </TouchableOpacity>

            <TouchableOpacity
            
              style={styles.iconview}
              activeOpacity={0.6}>
              <Image
                resizeMode="contain"
                source={require('../../../assets/Images/paypal.png')}
                style={styles.image2}
              />
              <Text style={styles.text}>G Pay</Text>
            </TouchableOpacity>
          
          </View>
  
   <Button
             elevation={10}
             buttonText={'Pay'}
             buttonHeight={60 * heightRef}
             titleFontStyle={'600'}
             titleColor={globalStyles.Theme.backgroundColor}
             titleFontSize={20 * fontRef}
             buttonWidth={'90%'}
           //   isLoading={state.loginLoading}
             buttonColor={globalStyles.Theme.primary}
             borderColor={globalStyles.Theme.primary}
             buttonCorners={10 * heightRef}
             style={{opacity: 1,position:"absolute",bottom:25*heightRef,
           }}
             onPress={() => navigation.navigate('Sucess')}
           />


</View>
  )
}

export default Checkout

