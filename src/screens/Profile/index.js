import { View, StyleSheet, Image, Dimensions, StatusBar } from 'react-native'
import React, {useState} from 'react'
import Helvetica from '../../components/Helvetica';
import Button from '../../components/Button';
import MyModal from '../../components/Modal';
import SafeAreaView from 'react-native-safe-area-view';

export default function Profile() {  
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView>
      <StatusBar backgroundColor='white' />
      <View style={styles.container}>
        <MyModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
        <Helvetica type='-Bold' size={14}>Akun</Helvetica>
        <View style={styles.parkContainer}>
          <Image source={require('../../assets/images/Park.png')} resizeMode='contain' style={styles.park} /> 
          <View style={styles.textContainer}>
            <Helvetica align='center' size={14}>Upss kamu belum memiliki akun. Mulai buat akun agar transaksi di BCR lebih mudah</Helvetica>  
          </View>   
          <Button color="green" width={100} height={40} onPress={() => setModalVisible(true)}>
          <Helvetica type='-Bold' size={14} color='white'>Register</Helvetica>  
          </Button>
          </View>
        </View>
    </SafeAreaView>
  )
}

const dimensions = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 16,
    paddingLeft: 16
  },
  parkContainer : {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: -1,
    width: dimensions.width,
    height: dimensions.height - 49,
    backgroundColor: 'white'
  },
  park: {
    width: 312,
    height: 192
  },
  textContainer: {
    marginBottom: 20,
    width: 312,
    flexDirection: 'row', 
    justifyContent: 'center'
  }
})