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
import DeletedModal from 'src/components/Modal';
const Cards = ({navigation}) => {
    const[data,setData]=useState(cards)
    const [counter, setCounter] = useState(0);
    const [isModalVisible, setModalVisible] = useState(false);
  
  const [selectedIndex, setSelectedIndex] = useState(false);
    const increase = () => {
      setCounter(count => count + 1);
    };
    const  add =(i) =>{
      
      setData(
          [
          ...data.slice(0, i),
          Object.assign({}, data[i], { quantity: data[i].quantity + 1, }),
          ...data.slice(i + 1),
          ]
      )
      }
      const  sub =(i) =>{
      if(data[i].quantity>0){
        setData(
            [
            ...data.slice(0, i),
            Object.assign({}, data[i], { quantity: data[i].quantity - 1, }),
            ...data.slice(i + 1),
            ]
        )}
        }
    //decrease counter
    const decrease = () => {
      setCounter(count => count - 1);
    };
  return (
    <View style={styles.container}>
         <Header  />
    <Head  left={false} title={"My Cart "}  />
        <FlatList
        data={data}
        bounces={false}
        keyExtractor={item => item.index}
     
        ItemSeparatorComponent={() => <View style={{padding: 10 *heightRef}}></View>}
        ListHeaderComponent={() => <View style={{padding: 20*heightRef}}></View>}
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
        ListFooterComponent={() => <View style={{padding: 65*heightRef}}></View>}
        renderItem={({item,index}) => (
          <TouchableOpacity  style={styles.card} activeOpacity={1}>
               
           <Image
    resizeMode='contain'
      style={styles.image}
      source={item.icon}>
        </Image> 
        <View style={styles.view}>
     
      <Text style={styles.heading}>French Toast Big Girls</Text>
       <Text style={styles.text} >{'Size: M'}</Text>
       <View style={styles.row}>
       <Text style={styles.price}>{" 1x "+item.price}</Text>
       <View style={styles.space}>
   <TouchableOpacity style={styles.circle}  onPress={()=>add(index)}>
   <Icon
            name="plus"
            type="Entypo"
            onPress={()=>add(index)}
            size={25* fontRef}
            color={globalStyles.Theme.backgroundColor}
          />
   
   </TouchableOpacity>
   <Text style={styles.text}>{item.quantity}</Text>
   <TouchableOpacity style={styles.circle}    onPress={()=>sub(index)}>
   <Icon
            name="minus"
            type="Entypo"
           
            size={23* fontRef}
            color={globalStyles.Theme.backgroundColor}
            onPress={()=>sub(index)}
          />
   </TouchableOpacity>
 </View>
       </View>
      </View>
      
   
     

   
       <Icon
              name="delete-outline"
              type="MaterialCommunityIcons"
              size={30 * fontRef}
              style={{  position:'absolute',
              top:10*heightRef,
              right:15*widthRef,}}
              onPress={() => {
                     
                setSelectedIndex(index), setModalVisible(!isModalVisible);
              }}
              color={globalStyles.Theme.red}
            />
             {selectedIndex == index ? (
              <DeletedModal
                isModalVisible={isModalVisible}
                setModalVisible={setModalVisible}
              />
            ) : null}
    </TouchableOpacity>
        
        )}
      />
        <TouchableOpacity  style={styles.footer} activeOpacity={1}>
           
          <View style={styles.row}>
        <Text style={styles.text}>SubTotal:</Text>
        <Text style={styles.price}>$19</Text>
        </View>
        <View style={styles.row}>
        <Text style={styles.text}>Shipping: </Text>
        <Text style={styles.price}>$10</Text>
        </View>
        <Button
                  elevation={10}
                  buttonText={'Checkout'}
                  buttonHeight={60 * heightRef}
                  titleFontStyle={'600'}
                  titleColor={globalStyles.Theme.backgroundColor}
                  titleFontSize={20 * fontRef}
                  buttonWidth={'90%'}
                //   isLoading={state.loginLoading}
                  buttonColor={globalStyles.Theme.primary}
                  borderColor={globalStyles.Theme.primary}
                  buttonCorners={10 * heightRef}
                  style={{opacity: 1,marginBottom:20*heightRef
                }}
                onPress={()=>navigation.navigate('Checkout')}
                />
   </TouchableOpacity>

    </View>
  )
}

export default Cards

