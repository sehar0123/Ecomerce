import React, {Component, useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-dynamic-vector-icons';
import {Chip, SearchBar} from 'react-native-elements';
import globalStyles from 'src/config/globalStyles';
import {fontRef, fullWidth, heightRef, widthRef} from 'src/config/screenSize';
import styles from './styles';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Information from 'src/components/Information';
import {ScreenWidth} from 'react-native-elements/dist/helpers';
import Carousel, {Pagination, ParallaxImage} from 'react-native-snap-carousel';
import Button from 'src/components/Button';
import {useNavigation} from '@react-navigation/native';
import Head from 'src/components/Head';
import { LinearTextGradient}  from "react-native-text-gradient";
import Header from 'src/components/Header';

import {transparent} from 'react-native-paper/lib/typescript/styles/colors';
import { RadioButton } from 'react-native-paper';
import Catagories from '../Catagories';

import { arravil, collection, discount } from 'src/config/dummyData';


// create a component
const Home = ({navigation}) => {
  let arr = ["I", "study", "JavaScript"];
  arr.splice(2,0,"hello", "sehar")
  console.log(arr)
  const ENTRIES1 = [
    {
      title: 'Beautiful and dramatic Antelope Canyon',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://img.freepik.com/free-psd/fashion-sales-banner-template_23-2148903807.jpg?size=626&ext=jpg&ga=GA1.2.1703161127.1659002854',
    },
    {
      title: 'Earlier this morning, NYC',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://mir-s3-cdn-cf.behance.net/projects/404/14e7f7148266163.Y3JvcCwxNzk3LDE0MDYsMzUxLDA.jpg',
    },
    
    {
      title: 'Acrocorinth, Greece',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://img.freepik.com/free-psd/modern-social-media-special-promo_1393-222.jpg?size=338&ext=jpg&ga=GA1.2.1703161127.1659002854',
    },
    {
      title: 'The lone tree, majestic landscape of New Zealand',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://img.freepik.com/free-psd/banner-spring-sale-with-woman-leaves_23-2148437361.jpg?size=626&ext=jpg&ga=GA1.2.1703161127.1659002854',
    },
    {
      title: 'The lone tree, majestic landscape of New Zealand',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://img.freepik.com/free-vector/perfume-bottle-black-silk-fabric_107791-1390.jpg?size=626&ext=jpg&ga=GA1.2.1703161127.1659002854',
    },
    {
      title: 'White Pocket Sunset',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
      illustration: 'https://mir-s3-cdn-cf.behance.net/projects/404/6ae431147916075.Y3JvcCwxNjE2LDEyNjQsMCww.jpg',
    },
  ];
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);
  const [click, setClick] = useState();
  const [index, setIndex] = useState(0);
  const [modal, setModal] = useState();
  const goForward = () => {
    carouselRef.current.snapToNext();
  };
  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);
const renderItem = ({item, index}, parallaxProps) => {

    return (
      <View style={styles.item2}>
        <Image
          source={{uri: item.illustration}}
          containerStyle={styles.imageContainer2}
          style={styles.image2}
          // showSpinner={true}
          // parallaxFactor={0}
          // {...parallaxProps}
        />
        {/* <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text> */}
      </View>
      
    );
  };
  const renderItem2 = ({item, index}, parallaxProps) => {
    return (
      <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate('Description')} activeOpacity={1}>
        <ParallaxImage
          source={{uri: item.illustration}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          showSpinner={true}
          parallaxFactor={0.9}
          {...parallaxProps}
        />
         
          <Icon 
            type="MaterialCommunityIcons"
            name="cards-heart-outline"
            size={30 * fontRef}
            onPress={
              () => navigation.navigate(
                'Wish', { screen: 'WishList' }
              )}
            style={{position:'absolute',top:15*heightRef,right:10*widthRef}}
            color={globalStyles.Theme.red}
          />

         <View style={styles.border}>
        <Text style={styles.price} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.price} numberOfLines={2}>
          {item.price}
        </Text>
        </View>
      </TouchableOpacity>
    );
  };
  const renderItem3 = ({item, index}, parallaxProps) => {
    return (
      <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate('Description')} activeOpacity={1}>
        <ParallaxImage
          source={{uri: item.illustration}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          showSpinner={true}
          parallaxFactor={0.9}
          {...parallaxProps}
        />
          <Image  resizeMode='contain'  style={styles.disc} source={item.icon}></Image>
          <Icon 
            type="MaterialCommunityIcons"
            name="cards-heart-outline"
            size={30 * fontRef}
            onPress={
              () => navigation.navigate(
                'Wish', { screen: 'WishList' }
              )}
            style={{position:'absolute',top:15*heightRef,right:10*widthRef}}
            color={globalStyles.Theme.red}
          />

         <View style={styles.border}>
        <Text style={styles.price} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.price} numberOfLines={2}>
          {item.price}
        </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>

      <Header color={globalStyles.Theme.primary} />

      <Head title={'SHOP IT'} back={false}/>
      <View style={styles.header}>
      <Icon
            name="md-heart-circle-sharp"
            type="Ionicons"
            onPress={
              () => navigation.navigate(
                'Wish', { screen: 'WishList' }
              )}
            size={35* fontRef}
            color={globalStyles.Theme.backgroundColor}
          />
            <Icon
            name="shopping-cart"
            type="FontAwesome5"
            onPress={
              () => navigation.navigate(
                'Cart', { screen: 'Cart' }
              )}
            size={30 * fontRef}
            color={globalStyles.Theme.backgroundColor}
          />
          </View>
      <ScrollView>
      <View style={{  
        flexDirection:'row' ,
              padding: 3,
              alignItems:'center',
              right:10*widthRef,
              top:10*heightRef,
              alignSelf:'center',
              position:"absolute",}}>
   
          
          </View>
          <View style={styles.row}>
          {/* <Text style={styles.title}>Features</Text> */}
          </View>
          <View style={{ height: 260*heightRef,
            // marginVertical: 20,
     marginTop:0*heightRef,
          
            alignItems: 'center',
            justifyContent: 'center',}}>
          <Carousel
            ref={carouselRef}
            // lockScrollWhileSnapping
            // layoutCardOffset={9}
            showSpinner={true}
            sliderWidth={ScreenWidth-10}
          autoplay={true}
          loop={true}
            itemWidth={ScreenWidth-10}
            itemHeight={'80%'}
            data={entries}
            renderItem={renderItem}
            onSnapToItem={index => setIndex(index)}
          />
           <Pagination
        dotsLength={entries.length}
        activeDotIndex={index}
       
        carouselRef={carouselRef}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 2,
   
        
          backgroundColor: globalStyles.Theme.primary,
        }}
        tappableDots={true}
        inactiveDotStyle={{
          backgroundColor: 'black',
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
          </View>
          <View style={styles.row}>
            {/* <Text style={styles.title}>Collections</Text> */}
            </View>
            <View   style={{height:170*heightRef,}}>
            <FlatList
        data={collection}
        // data={[]}
style={{backgroundColor:globalStyles.Theme.backgroundColor,alignSelf:'center',marginTop:-25*heightRef}}
      
        bounces={false}
        keyExtractor={item => item.id}
     horizontal={true}
        ItemSeparatorComponent={() => <View style={{padding: 10}}></View>}
       
        ListFooterComponent={() => <View style={{padding: 5*heightRef}}></View>}
        ListHeaderComponent={() => <View style={{padding: 5*heightRef}}></View>}
        renderItem={({item, index}) => (
          <TouchableOpacity
         
            style={styles.spcae}
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              navigation.navigate('Catagories', {
               title:item.title
              });
            }}>
            
      <View >
        <Image  resizeMode='contain' style={styles.circle} source={{uri: item.image}}>

        </Image>
        <Text style={styles.text}>{item.title}</Text>
      </View>
          </TouchableOpacity>
        )}
      />
      </View>
      <View style={styles.row}>
             <Text style={styles.title}>New Arivals</Text>
             <TouchableOpacity   onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Catagories', {
           title:'New Arivals'
          });
        }}>
             <Text style={styles.see}>See All</Text>
             </TouchableOpacity>
             </View>
             <View style={{ height: 350*heightRef,
            marginVertical: 20,

            // paddingBottom:20*heightRef,
            alignItems: 'center',
            justifyContent: 'center',}}>
          <Carousel
            ref={carouselRef}
            lockScrollWhileSnapping
            layoutCardOffset={9}
            sliderWidth={ScreenWidth}
          // autoplay={true}
          loop={true}
            itemWidth={ScreenWidth - 200}
            itemHeight={'80'}
            data={arravil}
            renderItem={renderItem2}
            hasParallaxImages={true}
          />
          
          </View>
          <View  style={styles.row}>
          <Text style={styles.title}>Discount</Text>
          <TouchableOpacity   onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Catagories', {
           title:'Discount'
          });
        }}>
          <Text style={styles.see}>See All</Text>
          </TouchableOpacity>
          </View>
          <View style={{ height: 210*heightRef,
            marginVertical: 20,

            // paddingBottom:20*heightRef,
            alignItems: 'center',
            justifyContent: 'center',}}>
          <Carousel
            ref={carouselRef}
            lockScrollWhileSnapping
            layoutCardOffset={9}
            sliderWidth={ScreenWidth}
          // autoplay={true}
          loop={true}
            itemWidth={ScreenWidth - 200}
            itemHeight={'80'}
            data={discount}
            renderItem={renderItem3}
            hasParallaxImages={true}
          />
          
          </View>
          </ScrollView>
     </View>
  );
};

//make this component available to the app
export default Home;
