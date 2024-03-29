import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.headercontainer}>
      <Text style={styles.headertext}>My Todo App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    headercontainer:{
        marginTop: 50,
        marginBottom: 50,
    },
    headertext:{
        fontSize: 25,
        fontWeight: 'bold',
        color: 'tomato',
    },
});