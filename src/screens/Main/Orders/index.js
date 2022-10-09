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
import OrderDetail from 'src/components/OrderDetail'

const Orders = ({navigation}) => {
  const [checked, setChecked] = React.useState('pending');
  const [isModalVisible, setModalVisible] = useState(false);
  
  const [selectedIndex, setSelectedIndex] = useState(false);
  return (
    <View style={styles.container} >
                      <Header  />
<Head  left={true} title={'Orders'}  />

    <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10*heightRef,width:'95%',alignSelf:'center'}}>
    <TouchableOpacity style={checked=="Complte"?styles.header2:styles.header} onPress={()=>setChecked('Complte')}>

<Icon
                      name="calendar-edit"
                      type='MaterialCommunityIcons'
                      size={25 * heightRef}
                      style={{
                        alignSelf: 'center',

                        // marginTop: getHeight(0.1),
                      }}
                      color={checked=="Complte"?globalStyles.Theme.backgroundColor:globalStyles.Theme.darkGray}
                    />
                    <Text style={{...styles.text,color:checked=="Complte"?globalStyles.Theme.backgroundColor:globalStyles.Theme.darkGray}}>Delivered</Text>
                   
</TouchableOpacity>
  
  <TouchableOpacity style={checked=="pending"?styles.header2:styles.header} onPress={()=>setChecked('pending')}>
  
   
  <Icon
                      name="clock-time-ten-outline"
                      type='MaterialCommunityIcons'
                      size={30 * heightRef}
                      style={{
                        alignSelf: 'center',

                        // marginTop: getHeight(0.1),
                      }}
                      color={checked=="pending"?globalStyles.Theme.backgroundColor:globalStyles.Theme.darkGray}
                    />

    <Text style={{...styles.text,color:checked=="pending"?globalStyles.Theme.backgroundColor:globalStyles.Theme.darkGray}}>Pending</Text>
 
  
</TouchableOpacity>

<TouchableOpacity style={checked=="Cancel"?styles.header2:styles.header} onPress={()=>setChecked('Cancel')}>

<Icon
                      name="closecircleo"
                      type='AntDesign'
                      size={25 * heightRef}
                      style={{
                        alignSelf: 'center',

                        // marginTop: getHeight(0.1),
                      }}
                      color={checked=="Cancel"?globalStyles.Theme.backgroundColor:globalStyles.Theme.darkGray}
                    />
                    <Text style={{...styles.text,color:checked=="Cancel"?globalStyles.Theme.backgroundColor:globalStyles.Theme.darkGray}}>Cancel</Text>
                  
</TouchableOpacity>
  </View>
  
     <FlatList
   data={cards}
   bounces={false}
   keyExtractor={item => item.id}

   ItemSeparatorComponent={() => <View style={{padding: 5 *heightRef}}></View>}
   ListHeaderComponent={() => 
   <View  style={{padding:10,}}>
   
   
  
  
   </View>}
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
     <TouchableOpacity  style={styles.card} activeOpacity={1} onPress={()=>{setModalVisible(true),setSelectedIndex(true)}}>
          <Text style={styles.text2}>Order 19297848457857</Text>
          <Text style={styles.heading2}>Placed on 04 Aug 2022 20:27:33</Text>
          <Divider/>
          <View style={{flexDirection:'row',paddingVertical:5*heightRef}}>
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

 </View>
 <TouchableOpacity onPress={()=>navigation.navigate("DeliveryDetail")} style={{flexDirection:'row',alignSelf:'flex-end',alignItems:'center'} }>
  <Icon
         name="box"
         type="Feather"
         size={20 * fontRef}
         color={globalStyles.Theme.red}
       />
  <Text style={{...styles.text2,alignSelf:'flex-end'}}>{"Track Package"}</Text>
  </TouchableOpacity>
  {selectedIndex == index ? (
              <OrderDetail
                isModalVisible={isModalVisible}
                setModalVisible={setModalVisible}
              />
            ) : null}
</TouchableOpacity>
   
   )}
 />
    </View>
  )
}

export default Orders

