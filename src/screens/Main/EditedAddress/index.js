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
import { FAB, RadioButton, TextInput } from 'react-native-paper'
import { check } from 'react-native-permissions'
// create a component
const EditedAddress = ({navigation, route}) => {
  const [name, setName] = useState('');
  const [address, setaddress] = useState('');
  const [country,setCountry]=useState('');
  const[zip,setZip]=useState('')
  const [checked, setChecked] = React.useState('Home');
  return (
    <View style={styles.container}>
              <Header  />
<Head  left={true} title={'Add Address'}  />
<View style={styles.inner}>

  <View style={styles.card}>
    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
  
  <TouchableOpacity style={checked=="Home"?styles.header2:styles.header} onPress={()=>setChecked('Home')}>
  
   
  <Icon
                      name="home-outline"
                      type='MaterialCommunityIcons'
                      size={30 * heightRef}
                      style={{
                        alignSelf: 'center',

                        // marginTop: getHeight(0.1),
                      }}
                      color={checked=="Home"?globalStyles.Theme.backgroundColor:globalStyles.Theme.darkGray}
                    />

    <Text style={{...styles.text,color:checked=="Home"?globalStyles.Theme.backgroundColor:globalStyles.Theme.darkGray}}>Home</Text>
 
  
</TouchableOpacity>
<TouchableOpacity style={checked=="office"?styles.header2:styles.header} onPress={()=>setChecked('office')}>

<Icon
                      name="office-building"
                      type='MaterialCommunityIcons'
                      size={25 * heightRef}
                      style={{
                        alignSelf: 'center',

                        // marginTop: getHeight(0.1),
                      }}
                      color={checked=="office"?globalStyles.Theme.backgroundColor:globalStyles.Theme.darkGray}
                    />
                    <Text style={{...styles.text,color:checked=="office"?globalStyles.Theme.backgroundColor:globalStyles.Theme.darkGray}}>Office</Text>
                   
</TouchableOpacity>
<TouchableOpacity style={checked=="other"?styles.header2:styles.header} onPress={()=>setChecked('other')}>

<Icon
                      name="home-search"
                      type='MaterialCommunityIcons'
                      size={25 * heightRef}
                      style={{
                        alignSelf: 'center',

                        // marginTop: getHeight(0.1),
                      }}
                      color={checked=="other"?globalStyles.Theme.backgroundColor:globalStyles.Theme.darkGray}
                    />
                    <Text style={{...styles.text,color:checked=="other"?globalStyles.Theme.backgroundColor:globalStyles.Theme.darkGray}}>Others</Text>
                  
</TouchableOpacity>
  </View>
  <TextInput
              theme={{roundness: 5 * fontRef}}
              underlineColorAndroid="transparent"
              label={<Text>{'Country'}</Text>}
              value={country}
              // error={nameError}
              underlineColor={globalStyles.Theme.red}
              onChangeText={e => {
                setCountry(e)
              }}
              activeOutlineColor={globalStyles.Theme.primary}
              autoCapitalize="none"
              mode="outlined"
              keyboardType="default"
              style={styles.feildStyle}
              right={
                <TextInput.Icon
                  name={() => (
                    <Icon
                      name="location-outline"
                      type='Ionicons'
                      size={25 * heightRef}
                      style={{
                        alignSelf: 'center',

                        // marginTop: getHeight(0.1),
                      }}
                      color={globalStyles.Theme.primary}
                    />
                  )}
                />
              }
              outlineColor={globalStyles.Theme.red}
              placeholder="Enter your Country"
            />
                <TextInput
              theme={{roundness: 5 * fontRef}}
              underlineColorAndroid="transparent"
              label={<Text>{'City'}</Text>}
              value={name}
              // error={nameError}
              underlineColor={globalStyles.Theme.red}
              onChangeText={e => {
                setName(e)
              }}
              activeOutlineColor={globalStyles.Theme.primary}
              autoCapitalize="none"
              mode="outlined"
              keyboardType="default"
              style={styles.feildStyle}
              right={
                <TextInput.Icon
                  name={() => (
                    <Icon
                      name="location-outline"
                      type='Ionicons'
                      size={25 * heightRef}
                      style={{
                        alignSelf: 'center',

                        // marginTop: getHeight(0.1),
                      }}
                      color={globalStyles.Theme.primary}
                    />
                  )}
                />
              }
              outlineColor={globalStyles.Theme.red}
              placeholder="Enter your City"
            />
<TextInput
              theme={{roundness: 5 * fontRef}}
              underlineColorAndroid="transparent"
              label={<Text>{'Address'}</Text>}
              value={address}
              // error={nameError}
              numberOfLines={5}
              underlineColor={globalStyles.Theme.red}
              onChangeText={e => {
                setaddress(e)
              }}
              activeOutlineColor={globalStyles.Theme.primary}
              autoCapitalize="none"
              mode="outlined"
              keyboardType="default"
              style={styles.feildStyle}
              right={
                <TextInput.Icon
                  name={() => (
                    <Icon
                      name="location-outline"
                      type='Ionicons'
                      size={25 * heightRef}
                      style={{
                        alignSelf: 'center',

                        // marginTop: getHeight(0.1),
                      }}
                      color={globalStyles.Theme.primary}
                    />
                  )}
                />
              }
              outlineColor={globalStyles.Theme.red}
              placeholder="Enter your Address"
            />
 
         
                 
            
            </View>
         
             <Button
             elevation={10}
             buttonText={'Edited Address'}
             buttonHeight={60 * heightRef}
             titleFontStyle={'600'}
             titleColor={globalStyles.Theme.backgroundColor}
             titleFontSize={20 * fontRef}
             buttonWidth={'90%'}
           //   isLoading={state.loginLoading}
             buttonColor={globalStyles.Theme.primary}
             borderColor={globalStyles.Theme.primary}
             buttonCorners={10 * heightRef}
             style={{opacity: 1,bottom:25*heightRef,position:'absolute'
           }}
             onPress={() => navigation.navigate('Sucess')}
           />
           </View>
           
    </View>
  );
};

// define your styles

//make this component available to the app
export default EditedAddress;
