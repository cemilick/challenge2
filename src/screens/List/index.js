import { StyleSheet,FlatList } from 'react-native';
import React, {useState} from 'react';
import Helvetica from '../../components/Helvetica';
import Card from '../../components/Card';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
export default function List({title="Daftar Mobil"}) {
  const [car, setCat] = useState([
    { merk: 'Daihatsu Xenia 1', users: 5, briefcase: 4, key:'1' },
    { merk: 'Daihatsu Xenia 2', users: 5, briefcase: 4, key: '2' },
    { merk: 'Daihatsu Xenia 3', users: 5, briefcase: 4, key: '3' },
    { merk: 'Daihatsu Xenia 4', users: 5, briefcase: 4, key: '4' },
    { merk: 'Daihatsu Xenia 5', users: 5, briefcase: 4, key: '5' },
    { merk: 'Daihatsu Xenia 6', users: 5, briefcase: 4, key: '6' },
    { merk: 'Daihatsu Xenia 7', users: 5, briefcase: 4, key: '7' },
    { merk: 'Daihatsu Xenia 8', users: 5, briefcase: 4, key: '8' },
    { merk: 'Daihatsu Xenia 9', users: 5, briefcase: 4, key: '9' },
    { merk: 'Daihatsu Xenia 10', users: 5, briefcase: 4, key: '10' },
    { merk: 'Daihatsu Xenia 11', users: 5, briefcase: 4, key: '11' },
    { merk: 'Daihatsu Xenia 12', users: 5, briefcase: 4, key: '12' },
  ]);
  return (
    <SafeAreaView style={styles.carList}>
      <Helvetica type='-Bold' size={14} marginBottom={30}>{title}</Helvetica>
      <FlatList data={car} renderItem={({item}) => {
        return (
          <Card merk={item.merk} users={item.users} briefcase={item.briefcase}/>
        )
      }} /> 
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  carList: {
    backgroundColor: 'white',
    paddingLeft: 16, 
    paddingRight: 20,
    paddingTop: 16,
    flex: 1
  },
});