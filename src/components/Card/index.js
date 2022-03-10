import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/Feather';
import Helvetica from '../Helvetica';


export default function Card({merk, users, briefcase, harga="Rp 245.000"}) {
  return (
      <View style={styles.card}>
          <View>
            <Image source={require('../../assets/images/car.png')} style={styles.image} />
          </View>
          <View>
            <Text>{merk}</Text>
            <View style={styles.content}>
                <View style={styles.icon}>
                    <Icons name="users" size={16}/>
                    <Text style={styles.number}>{users}</Text>
                </View>
                <View style={styles.icon}>
                    <Icons name="briefcase" size={16}/>
                    <Text style={styles.number}>{briefcase}</Text>
                </View>
            </View>
            <Helvetica size={14} color="limegreen">{harga}</Helvetica>
          </View>
      </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 15,
    marginBottom: 5,
    borderRadius: 1,
    elevation: 0.5,
  },
  image: {
    marginRight: 10,
    width: 40, 
    height: 24
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10
  },
  icon: {
    flexDirection: 'row', 
    justifyContent: 'flex-start'
  },
  number: {
    marginLeft: 5
  }
})