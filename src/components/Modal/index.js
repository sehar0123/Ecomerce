import React, {useState} from 'react';
import { Image, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';
import Button from '../Button';
import { fontRef, heightRef, widthRef } from 'src/config/screenSize';
import globalStyles from 'src/config/globalStyles';
const DeletedModal= props=> {
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
            <Image
        source={require('../../assets/Images/delete.gif')}
        style={styles.image}
        resizeMode="cover"
      />
    <Text style={styles.title}>Are you sure you want to{'\n'} delete the item </Text>
    <View style={{flexDirection:'row',width:'90%',justifyContent:'space-between',alignSelf:'center',marginTop:10*heightRef}}>
    <Button
                  elevation={10}
                  buttonText={'NO'}
                  buttonHeight={40 * heightRef}
                  titleFontStyle={'600'}
                  titleColor={globalStyles.Theme.backgroundColor}
                  titleFontSize={20 * fontRef}
                  buttonWidth={'50%'}
                //   isLoading={state.loginLoading}
                  buttonColor={globalStyles.Theme.red}
                  borderColor={globalStyles.Theme.red}
                  buttonCorners={5 * heightRef}
                  style={{opacity: 1}}
                  onPress={() => setModalVisible(false)}
                />
                   <Button
                  elevation={10}
                  buttonText={'YES'}
                  buttonHeight={40 * heightRef}
                  titleFontStyle={'600'}
                  titleColor={globalStyles.Theme.backgroundColor}
                  titleFontSize={20 * fontRef}
                  buttonWidth={'45%'}
                //   isLoading={state.loginLoading}
                  buttonColor={globalStyles.Theme.primary}
                  borderColor={globalStyles.Theme.primary}
                  buttonCorners={5 * heightRef}
                  style={{opacity: 1}}
                  onPress={() => setModalVisible(false)}
                />
                </View>
    </View>
      </Modal>
    );
}

export default DeletedModal;