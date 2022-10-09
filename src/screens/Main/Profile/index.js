//import liraries
import {useNavigation} from '@react-navigation/native';
import React, {Component} from 'react';
import {Image, ScrollView, TouchableOpacity} from 'react-native';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import Icon from 'react-native-dynamic-vector-icons';
import Button from 'src/components/Button';
import Head from 'src/components/Head';
import Header from 'src/components/Header';
import globalStyles from 'src/config/globalStyles';
import {fontRef, fullWidth, heightRef, widthRef} from 'src/config/screenSize';
import styles from './styles';

// create a component
const Profile = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header color={globalStyles.Theme.primary} />

<Head title={'Profile'} back={false}/>
<Icon
              type="MaterialIcons"
              name="logout"
              onPress={()=>navigation.navigate('Login')}
              size={40 * heightRef}
              style={{position:'absolute',top:15*heightRef,right:10*widthRef}}
              color={globalStyles.Theme.backgroundColor}
            />
{/* <View style={styles.header}>
<Icon
      name="md-heart-circle-sharp"
      type="Ionicons"
      
      size={35* fontRef}
      color={globalStyles.Theme.backgroundColor}
    />
      <Icon
      name="shopping-cart"
      type="FontAwesome5"
     
      size={30 * fontRef}
      color={globalStyles.Theme.backgroundColor}
    />
    </View> */}
      <ScrollView>
        {/* <ImageBackground
          resizeMode="stretch"
          source={{uri:'https://img.freepik.com/premium-photo/hand-holding-shopping-bags-plain-background_23-2148286215.jpg?w=2000'}}
          style={styles.image}>
          
          
          
            <Button
              elevation={10}
              buttonText={''}
              isIcon={true}
              buttonHeight={30 * heightRef}
              titleFontStyle={'600'}
              iconType="AntDesign"
              iconSize={15 * fontRef}
              iconName="camerao"
              titleColor={globalStyles.Theme.backgroundColor}
              titleFontSize={20 * fontRef}
              borderWidth={1}
              buttonWidth={30 * heightRef}
              buttonColor={globalStyles.Theme.primary}
              borderColor={globalStyles.Theme.backgroundColor}
              buttonCorners={30 * heightRef}
              left={4 * heightRef}
              style={{bottom: 30 * heightRef, left: 30 * widthRef}}
              // onPress={() => next()}
            />
          </View>
        </ImageBackground> */}

        <View style={styles.card}>
        <View style={styles.circularImage}>
            <Image
              resizeMode="contain"
              source={{uri:'https://media.gettyimages.com/photos/portrait-of-teenage-girl-picture-id961102568?k=20&m=961102568&s=612x612&w=0&h=x6Jjna6Z5RiZjYKRSmZP4wdAMDZ8I8LPJIABl6W2qNU='}}
              style={styles.image2}
            />
            </View>
          <Text style={styles.name}>Loren Gray</Text>
          <View
            style={{
              flexDirection: 'row',
              width: '65%',
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginVertical: 5,
            }}>
            <Icon
              name="location-outline"
              size={22 * fontRef}
              type="Ionicons"
              color={globalStyles.Theme.darkGray}
            />
            <Text style={styles.location}>Paris, France</Text>
            <Button
              elevation={10}
              buttonText={'verified'}
              titleFontStyle={'600'}
              titleColor={globalStyles.Theme.backgroundColor}
              titleFontSize={16 * fontRef}
              buttonHeight={30 * heightRef}
              buttonWidth={90 * heightRef}
              buttonColor={'#2DA78B'}
              borderColor={'#2DA78B'}
              buttonCorners={30 * heightRef}
              // style={{
              //   position: 'absolute',
              //   bottom: 50 * heightRef,
              //   right: 10 * fontRef,
              // }}
              // onPress={() => next()}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <View>
              <Text style={styles.location}>Gender</Text>
              <Text style={styles.heading}>Male</Text>
            </View>
            <View>
              <Text style={styles.location}>ID#</Text>
              <Text style={styles.heading}>AB-132</Text>
            </View>

            <View>
              <Text style={styles.location}>DOB</Text>
              <Text style={styles.heading}>19/05/2020</Text>
            </View>
          </View>
          <Button
            elevation={10}
            buttonText={'Edit Account'}
            titleFontStyle={'800'}
            titleColor={globalStyles.Theme.backgroundColor}
            titleFontSize={16 * fontRef}
            buttonHeight={50 * heightRef}
            buttonWidth={fullWidth - 70}
            buttonColor={globalStyles.Theme.primary}
            borderColor={globalStyles.Theme.primary}
            buttonCorners={5 * heightRef}
            iconType="MaterialCommunityIcons"
            isIcon={true}
            iconSize={20 * fontRef}
            iconName="pencil-outline"
            iconColor={globalStyles.Theme.backgroundColor}
            style={{
              marginTop: 15 * heightRef,
            }}
            // onPress={() => next()}
          />
        </View>

        <View
          style={[styles.rowview, {marginTop: 20 * heightRef}]}
         >
          <TouchableOpacity style={styles.card2}  onPress={()=>navigation.navigate('Orders')}>
            <Icon
              type="AntDesign"
              name="shoppingcart"
              size={45 * heightRef}
              onPress={()=>navigation.navigate('Orders')}
              color={globalStyles.Theme.primary}
            />

            <Text style={styles.des}>Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card2}>
            <Icon
              type="FontAwesome5"
              name="wallet"
              size={45 * heightRef}
              color={globalStyles.Theme.primary}
            />

            <Text style={styles.des}>Wallet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card2}   onPress={()=>navigation.navigate('Address')}>
            <Icon
              type="FontAwesome5"
              name="address-card"
              onPress={()=>navigation.navigate('Address')}
              size={45 * heightRef}
              color={globalStyles.Theme.primary}
            />

            <Text style={styles.des}>Address </Text>
          </TouchableOpacity>
        </View>
        <View
          style={styles.rowview}
          >
          <TouchableOpacity style={styles.card2}>
            <Icon
              type="MaterialIcons"
              name="notifications-on"
              size={45 * heightRef}
              color={globalStyles.Theme.primary}
            />

            <Text style={styles.des}>Notification</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card2}>
            <Icon
              type="MaterialIcons"
              name="headset-mic"
              size={45* heightRef}
              color={globalStyles.Theme.primary}
            />

            <Text style={styles.des}>Help Center</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card2}>
            <Icon
              type="MaterialIcons"
              name="settings"
              size={45 * heightRef}
              color={globalStyles.Theme.primary}
            />

            <Text style={styles.des}>Setting</Text>
          </TouchableOpacity>
        </View>
        <View style={{height: 100}} />
      </ScrollView>
    </View>
  );
};

//make this component available to the app
export default Profile;
