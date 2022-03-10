import { View, Modal, Image, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import Helvetica from '../Helvetica';
import Button from '../Button';

export default function MyModal(props) {
    return (
      <Modal animationType="fade" transparent={true} visible={props.modalVisible} onRequestClose={() => {
          props.setModalVisible(!props.modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image source={require('../../assets/images/Maintenance.png')} style={styles.modalImage} resizeMode='contain' />
            <Helvetica size={16} marginBottom={10}>Coming Soon!</Helvetica>
            <Button width={100} height={30} color='#0D28A6' onPress={() => props.setModalVisible(!props.modalVisible)}>
              <Helvetica type='-Bold' color='white'>Oke deh!</Helvetica>
            </Button>
          </View>
        </View>
      </Modal>
  )
}

const dimensions = Dimensions.get('window');
const styles = StyleSheet.create({
    modalContainer: {
        width: dimensions.width,
        height: dimensions.height,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalContent: {
        width: 300,
        height: 200,
        backgroundColor: 'white',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#0D28A6'
    },
    modalImage: {
        width: 100, 
        height: 100
    }
});