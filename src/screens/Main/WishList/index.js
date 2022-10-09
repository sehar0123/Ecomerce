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

const WishList = ({navigation}) => {
    const [counter, setCounter] = useState(0);
    const increase = () => {
        setCounter(count => count + 1);
      };
     
      //decrease counter
      const decrease = () => {
        setCounter(count => count - 1);
      };
  return (
  
      <View style={styles.container}>
         <Header  />
    <Head  left={false} title={" Favourite "}  />
        <FlatList
        data={cards}
        bounces={false}
        keyExtractor={item => item.id}
     
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
        <Text style={styles.text} >{'Modern Walk'}</Text>
      <Text style={styles.heading}>French Toast Big Girls'</Text>
      
       <Text style={styles.price}>{" 1x "+item.price}</Text>
       
      </View>
      
      <Icon
            name="heart"
            type="Ionicons"
            style={{position:'absolute',top:10*heightRef,right:5*heightRef}}
           
            size={25* fontRef}
            color={globalStyles.Theme.red}
          />
          
          <Button
                  elevation={10}
                  buttonText={'Add to Card'}
                  buttonHeight={30 * heightRef}
                  titleFontStyle={'600'}
                  titleColor={globalStyles.Theme.backgroundColor}
                  titleFontSize={14 * fontRef}
                  buttonWidth={'30%'}
                //   isLoading={state.loginLoading}
                  buttonColor={globalStyles.Theme.red}
                  borderColor={globalStyles.Theme.red}
                  buttonCorners={5* heightRef}
                  style={{opacity: 1,position:'absolute',bottom:10*heightRef,right:5*heightRef}}
                  onPress={
                    () => navigation.navigate(
                      'Cart', { screen: 'Cart' }
                    )}
                />
    </TouchableOpacity>
        
        )}
      />
    </View>
  )
}

export default WishList

