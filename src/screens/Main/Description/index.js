import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CursoerSlider from 'src/components/cursorslider'
import { fontRef, heightRef, widthRef } from 'src/config/screenSize';
import globalStyles from 'src/config/globalStyles';
import styles from './styles';
import Button from 'src/components/Button';
import Icon from 'react-native-dynamic-vector-icons';
import Header from 'src/components/Header';
import Head from 'src/components/Head';
import Catagories from '../Catagories';
import { categories, product } from 'src/config/dummyData';

const  Description = ({navigation}) => {
  const [counter, setCounter] = useState(0);
 

const [selectedIndex, setSelectedIndex] = useState(false);
  const increase = () => {
    setCounter(count => count + 1);
  };
 
  //decrease counter
  const decrease = () => {
    if(counter>0)
   { setCounter(count => count - 1);}
  };
  const scroll = React.useRef();
  const DATA = [
    {
      id: 1,
      UrlImage:
        'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHQlMjBzaGlydCUyMGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 2,
      UrlImage:
        'https://images.unsplash.com/photo-1622445275649-b1922cc3e837?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dCUyMHNoaXJ0JTIwbW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
   
  ];
  return (
    <View style={styles.container}>
      <Header  />
    <Head left={true} title={"Details"}  />
      <ScrollView ref={scroll}  style= {styles.container}showsVerticalScrollIndicator={false}>
        <View>
      <CursoerSlider
        autoScrool={false}
        ImagePerview={false}
        SwipeScrool={true}
        ControllBtn={false}
        Data={DATA}
        height={50}
      />
         <Icon
            name="heart-outline"
            type="Ionicons"
            style={{position:'absolute',top:20*heightRef,right:30*widthRef}}
            size={35* fontRef}
            onPress={
              () => navigation.navigate(
                'Wish', { screen: 'WishList' }
              )}
            color={globalStyles.Theme.red}
          />
      </View>
      <View style={styles.card}>
        <View style={styles.row2}>
<Text style={styles.text}>Denim Shirt</Text>
<Text style={styles.price}>{"50$"}</Text>
</View>
<View style={styles.row}>
  <View style={styles.circle}>
    <Text style={styles.title}>XS</Text>

  </View>
  <View style={styles.circle}>
    <Text style={styles.title}>M</Text>

  </View>
  <View style={styles.circle}>
    <Text style={styles.title}>L</Text>

  </View>
  <View style={styles.circle}>
    <Text style={styles.title}>XL</Text>

  </View>
</View>
<Text style={styles.text}>Description</Text>
<Text style={styles.heading}>C-shaped neckline hooked closure{ "\n" }
 Tie knot string closure on the hem's side {"\n"}
Polka dot pattern all over{" \n"}
Full sleeves with button closure on the pleated cuffs{" \n"}
Color: Maroon{ "\n"}
Polka dot pattern all over{" \n"}
Full sleeves with button closure on the pleated cuffs{" \n"}
Color: Maroon{ "\n"}
Fabric: Silk {"\n"}
</Text>
{/* <View style={styles.row2}> */}

               
               {/* </View> */}
      </View>
      <Text style={styles.text}>Other Products</Text>
      <FlatList
        data={product}
        bounces={false}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={{justifyContent:'space-around',flex:1}}
        ItemSeparatorComponent={() => <View style={{padding: 10 *heightRef}}></View>}
        ListHeaderComponent={() => <View style={{padding: 10*heightRef}}></View>}
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
        ListFooterComponent={() => <View style={{padding: 20*heightRef}}></View>}
        renderItem={({item,index}) => (
          <TouchableOpacity  style={styles.card2}  onPress={() => scroll.current.scrollTo(0)} activeOpacity={0.6}>
            <View style={styles.row3}>
          
             <Icon
            name="heart-outline"
            type="Ionicons"
            onPress={
              () => navigation.navigate(
                'Wish', { screen: 'WishList' }
              )}
        
            size={25* fontRef}
            color={globalStyles.Theme.red}
          />
         
          </View>
           <Image
    resizeMode='contain'
      style={styles.image}
      source={item.icon}>
        </Image> 
       
      <Text style={styles.text2} >{'Luna Boutique'}</Text>
      <Text numberOfLines={2} style={styles.heading2}>{item.title} </Text>
    
      {/* <AirbnbRating  size={10} reviews={false} selectedColor={globalStyles.Theme.lightGray} count={3}ratingContainerStyle={{position:'absolute',bottom:5*heightRef,left:10,}}   /> */}
      <Text style={styles.price2}>{item.price}</Text>
      {/* <View style={{flexDirection:'row',width:'50%', position:'absolute',bottom:5*heightRef,justifyContent:'space-between',
    right:10*widthRef,}}>
   <TouchableOpacity style={styles.circle}>
   <Icon
            name="minus"
            type="Entypo"
           
            size={25* fontRef}
            color={globalStyles.Theme.backgroundColor}
            onPress={()=>count}
          />
   </TouchableOpacity>
   <Text style={styles.text}>{counter}</Text>
   <TouchableOpacity style={styles.circle}>
   <Icon
            name="plus"
            type="Entypo"
            onPress={()=>increase(index)}
            size={25* fontRef}
            color={globalStyles.Theme.backgroundColor}
          />
   </TouchableOpacity>
 </View> */}
    </TouchableOpacity>
        
        )}
      />
      </ScrollView>
      <View style={{flexDirection:'row',justifyContent:'space-around',position:'absolute',bottom:5*heightRef,width:'100%',alignSelf:'center',alignItems:'center',backgroundColor:globalStyles.Theme.backgroundColor,padding:10*heightRef}}>
      <View style={styles.space}>
   <TouchableOpacity style={styles.circle2}>
   <Icon
            name="plus"
            type="Entypo"
            onPress={()=>increase()}
            size={25* fontRef}
            color={globalStyles.Theme.backgroundColor}
          />
   
   </TouchableOpacity>
   <Text style={styles.text}>{counter}</Text>
   <TouchableOpacity style={styles.circle2}>
   <Icon
            name="minus"
            type="Entypo"
           
            size={23* fontRef}
            color={globalStyles.Theme.backgroundColor}
            onPress={()=>decrease()}
          />
   </TouchableOpacity>
 </View>
      <Button
                  elevation={10}
                  buttonText={'Add To Card'}
                  buttonHeight={60 * heightRef}
                  titleFontStyle={'600'}
                  titleColor={globalStyles.Theme.backgroundColor}
                  titleFontSize={18 * fontRef}
                  buttonWidth={'30%'}
                  // isLoading={state.loginLoading}
                  buttonColor={globalStyles.Theme.primary}
                  borderColor={globalStyles.Theme.primary}
                  buttonCorners={5 * heightRef}
                  style={{opacity: 1,alignSelf:'center',}}
                  onPress={
                    () => navigation.navigate(
                      'Cart', { screen: 'Cart' }
                    )}
                />
                  <Button
                  elevation={10}
                  buttonText={'Buy Now'}
                  buttonHeight={60 * heightRef}
                  titleFontStyle={'600'}
                  titleColor={globalStyles.Theme.backgroundColor}
                  titleFontSize={18 * fontRef}
                  buttonWidth={'35%'}
                  // isLoading={state.loginLoading}
                  buttonColor={globalStyles.Theme.red}
                  borderColor={globalStyles.Theme.red}
                  buttonCorners={5 * heightRef}
                  style={{opacity: 1,alignSelf:'center',}}
                  onPress={
                    () => navigation.navigate(
                      'Checkout'
                    )}
                />
                </View>
      <View style={{  height: 75 * heightRef,}}></View>

    </View>
  )
}

export default Description

