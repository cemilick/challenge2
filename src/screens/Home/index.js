import { View, Image, Dimensions, StyleSheet, FlatList, StatusBar, Pressable } from 'react-native'
import React, { useState } from 'react'
import Button from '../../components/Button';
import Card from '../../components/Card';
import Helvetica from '../../components/Helvetica';
import MyModal from '../../components/Modal';
import SafeAreaView from 'react-native-safe-area-view';

export default function Home(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [car, setCar] = useState([
    { merk: 'Daihatsu Xenia 1', users: 5, briefcase: 4, key:'1' },
    { merk: 'Daihatsu Xenia 2', users: 5, briefcase: 4, key: '2' },
    { merk: 'Daihatsu Xenia 3', users: 5, briefcase: 4, key: '3' },
    { merk: 'Daihatsu Xenia 4', users: 5, briefcase: 4, key: '4' },
    { merk: 'Daihatsu Xenia 5', users: 5, briefcase: 4, key: '5' },
    { merk: 'Daihatsu Xenia 6', users: 5, briefcase: 4, key: '6' },
  ]) 
  const [color, setColor] = useState('#d3d9fd')
  return (
    <SafeAreaView style={styles.flex}>
      <StatusBar backgroundColor={color} />
      <MyModal modalVisible={modalVisible} setModalVisible={setModalVisible}/>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View>
            <Helvetica style={styles.marginText}>Hi, Rico Aminanda</Helvetica>
            <Helvetica type='-Bold' size={14}>Magelang, Indonesia</Helvetica>
          </View>
          <Pressable onPress={() => props.navigation.navigate('Profile')}>
            <Image resizeMode={'contain'} source={require('../../assets/images/Profile.jpg')} style={styles.profile} />
          </Pressable>
        </View>
      </View>
      <Pressable style={styles.bannerContainer} onPress={() => props.navigation.navigate('List')}>
        <Image resizeMode={'contain'} source={require('../../assets/images/Banner.png')} style={styles.banner}/>
      </Pressable>
      <View style={styles.content}>
          <View style={styles.features}>
            <Button nama="Sewa Mobil" color='#DEF1DF' width={60} height={60} onPress={() => props.navigation.navigate('List')}>
            <Image source={require('../../assets/images/fi_truck.png')}  style={{width: 20, height: 20}}/>
            </Button>
            <Button nama="Oleh-Oleh" color='#DEF1DF' width={60} height={60} onPress={() => setModalVisible(true)}>
            <Image source={require('../../assets/images/fi_box.png')}  style={{width: 20, height: 20}}/>
            </Button>
            <Button nama="Penginapan" color='#DEF1DF' width={60} height={60} onPress={() => setModalVisible(true)}>
            <Image source={require('../../assets/images/fi_key.png')}  style={{width: 20, height: 20}}/>
            </Button>
            <Button nama="Wisata" color='#DEF1DF' width={60} height={60} onPress={() => setModalVisible(true)}>
            <Image source={require('../../assets/images/fi_camera.png')}  style={{width: 20, height: 20}}/>
            </Button>
          </View>
          <View style={styles.carList}>
            <Helvetica type='-Bold' size={14} marginBottom={10}>Daftar Mobil Pilihan</Helvetica>
            <FlatList data={car} renderItem={({item}) => {
              return (
                <Card merk={item.merk} users={item.users} briefcase={item.briefcase}/>
              )
            }} /> 
          </View>
      </View>
    </SafeAreaView>
  )
}

const dimensions = Dimensions.get('window').width - 40;
const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  header:{
    backgroundColor: '#d3d9fd',
    width: dimensions + 50,
    height: 160,
    paddingLeft: 16,
    paddingRight: 36,
    paddingTop: 15
  },
  headerContent:{
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  marginText:{
    marginTop: 10,
    marginBottom: 10
  },
  profile: {
    width: 30,
    height: 30,
    borderRadius: 100,
    marginTop: 10
  },
  bannerContainer: {
    flexDirection: 'row', 
    justifyContent: 'center',
    zIndex: 1
  },
  banner: {
    width: dimensions,
    height: 200,
    marginTop: -100, 
    position: 'absolute'
  },
  content: {
    backgroundColor: 'white',
    paddingTop: 100,
    flex: 1
  },
  features: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20, 
    marginBottom: 25
  },
  carList: {
    paddingLeft: 20, 
    paddingRight: 20,
    paddingTop: 10,
    flex: 1
  },
  carListTitle: {
    marginTop: 20
  }
})
