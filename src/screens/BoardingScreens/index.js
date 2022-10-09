//import liraries
import React, {Component, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import Button from 'src/components/Button';
import globalStyles from 'src/config/globalStyles';
import {fontRef, heightRef, widthRef} from 'src/config/screenSize';
import styles from './styles';
import Swiper from 'react-native-swiper';
// create a component
const BoardinScreen = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);
  const next = () => {
    if (!!swiperRef) {
      swiperRef.current.scrollBy(1);
    }
  };
  return (
    <Swiper
      ref={swiperRef}
      showsPagination={currentIndex == 2 ? false : true}
      onIndexChanged={index => {
        setCurrentIndex(index);
      }}
      paginationStyle={{marginRight:'70%',marginBottom:30*heightRef}}
      dotColor={globalStyles.Theme.darkGray}
      activeDotStyle={{width: '10%'}}
      activeDotColor={globalStyles.Theme.primary}
      loop={false}>
      <View style={styles.container}>
        <Image
            resizeMode='cover'
          style={styles.image}
          source={{uri:'https://media.gettyimages.com/photos/stylish-korean-girlyoung-woman-in-sunglasses-showing-smartphone-picture-id1372215599?k=20&m=1372215599&s=612x612&w=0&h=RL0UOQEWk1w9hfzcIoYlY0d2bW2yNtNbY61I0D5cDK8='}}></Image>
          <Text style={styles.title}>Find Your Favourite items</Text>
          <Text style={styles.heading}>{"Find your Favourite Products \n that you need to buy daily."}</Text>
          <View style={{flexDirection:'row',position:'absolute',
                bottom:40*heightRef,
                width:'90%',
               
               justifyContent:'flex-end'}}>
          
             <Button
              elevation={10}
              buttonText={'NEXT'}
              isIcon={false}
              buttonHeight={50 * heightRef}
              titleFontStyle={'600'}
              iconType="AntDesign"
              iconName="arrowright"
              iconColor={globalStyles.Theme.backgroundColor}
              titleColor={globalStyles.Theme.backgroundColor}
              titleFontSize={20 * fontRef}
              buttonWidth={120 * widthRef}
             buttonColor={globalStyles.Theme.primary}
              borderColor={globalStyles.Theme.primary}
              buttonCorners={30 * heightRef}
              style={{
                opacity: 1,
               
              }}
              onPress={() => next()}
            />
            </View>
      </View>
      <View style={styles.container}>
        <Image
            resizeMode='cover'
          style={styles.image}
          source={{uri:'https://media.gettyimages.com/photos/microcredit-and-fast-loans-concept-excited-stylish-korean-girl-picture-id1372215400?k=20&m=1372215400&s=612x612&w=0&h=spc_ADw2SeoWiISYkt5hDsFKmWgoF2w8B-dSOvSUDmE='}}>
        </Image>
        <Text style={styles.title}>Easy & Safe Payment </Text>
        <Text style={styles.heading}>{"Pay For the Products you buy  \n Safely & easily"}</Text>
        <View style={{flexDirection:'row',position:'absolute',
                bottom:40*heightRef,
                width:'90%',
               
               justifyContent:'flex-end'}}>
          
             <Button
              elevation={10}
              buttonText={'NEXT'}
              isIcon={false}
              buttonHeight={50 * heightRef}
              titleFontStyle={'600'}
              iconType="AntDesign"
              iconName="arrowright"
              iconColor={globalStyles.Theme.backgroundColor}
              titleColor={globalStyles.Theme.backgroundColor}
              titleFontSize={20 * fontRef}
              buttonWidth={120 * widthRef}
             buttonColor={globalStyles.Theme.primary}
              borderColor={globalStyles.Theme.primary}
              buttonCorners={30 * heightRef}
              style={{
                opacity: 1,
               
              }}
              onPress={() => next()}
            />
            </View>
      </View>
      <View style={styles.container}>
        <Image
          resizeMode='cover'
          style={styles.image}
          source={{uri:'https://media.gettyimages.com/photos/shopping-stylish-asian-girl-in-sunglassesshowing-bag-from-shop-and-picture-id1397109632?k=20&m=1397109632&s=612x612&w=0&h=z-UtPexWC6GU2IKYyIXPwYdndCUwkzM0KExcynHcgQU='}}>
               </Image>
               <Text style={styles.title}>Product Delivery</Text>
               <Text style={styles.heading}>{"Your products are delivered \n  home safely & securely"}</Text>
        

               
          
             <Button
              elevation={10}
              buttonText={'LETS START'}
              isIcon={false}
              buttonHeight={50 * heightRef}
              titleFontStyle={'600'}
              iconType="AntDesign"
              iconName="arrowright"
              iconColor={globalStyles.Theme.backgroundColor}
              titleColor={globalStyles.Theme.backgroundColor}
              titleFontSize={20 * fontRef}
              buttonWidth={220 * widthRef}
             buttonColor={globalStyles.Theme.primary}
              borderColor={globalStyles.Theme.primary}
              buttonCorners={30 * heightRef}
              style={{
                opacity: 1,
                position:'absolute',
                bottom:40*heightRef,
               
              }}
              onPress={() => navigation.navigate('Login')}
            />
          
         
         
     
      </View>
    </Swiper>
  );
};

//make this component available to the app
export default BoardinScreen;
