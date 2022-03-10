import { StyleSheet, Text } from 'react-native';
import React from 'react';

const Helvetica = ({type='', children, size=12, marginBottom=0, color="black", align="left"}) => {
    const styles = StyleSheet.create({
        helvetica:{
            fontFamily: 'Helvetica' + type,
            fontSize: size,
            marginBottom: marginBottom,
            color: color,
            textAlign: align,
        }
    })
    return (
      <Text style={styles.helvetica}>{children}</Text>
    )
}



export default Helvetica;