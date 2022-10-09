import React, {useState} from 'react';
import { Image, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';
import Button from '../Button';
import { fontRef, heightRef, widthRef } from 'src/config/screenSize';
import globalStyles from 'src/config/globalStyles';
import Icon from 'react-native-dynamic-vector-icons';
const OrderDetail= props=> {
  const {isModalVisible, setModalVisible} = props;
  
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

    return (
        <Modal
        backdropOpacity={0.3}
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection={['down']}
        style={styles.bottomView}
        onRequestClose={() => setModalVisible(false)}>
            <View style={styles.content2}>
            <View style={styles.row}>
    <View>
<Text style={styles.text2}>Order 19297848457857</Text>
          <Text style={styles.heading2}>Placed on 04 Aug 2022 20:27:33</Text>
          </View>
          <Text style={styles.text}>Delivered</Text>
          </View>
          <Text style={styles.text}>Billing Address</Text>
          <View style={{flexDirection:'row',paddingHorizontal:10*heightRef,paddingVertical:10*heightRef,}}>
       
          <Icon
         name="address-card-o"
         type="FontAwesome"
         size={30 * fontRef}
         color={globalStyles.Theme.red}
       />
       <View>
       
       </View>
       <View>
          <Text style={styles.text2}>Receiver:John </Text>
          <Text style={styles.heading2}>04884855858</Text>
          <Text style={styles.heading2}>Street No# 12 Mesa, Arizona USA</Text>
          </View>
          </View>
 
 <View style={styles.row}>
        <Text style={styles.text}>SubTotal:</Text>
        <Text style={styles.price}>$19</Text>
        </View>
        <View style={styles.row}>
        <Text style={styles.text}>Shipping: </Text>
        <Text style={styles.price}>$10</Text>
        </View>
       <View  style={styles.row}>
         <Text style={styles.text}>Total: </Text>
        <Text style={styles.price}>$29</Text></View>
    </View>
      </Modal>
    );
}

export default OrderDetail;