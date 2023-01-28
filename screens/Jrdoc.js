import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Jrdoc = () => {
  return (
    <View>
      <View
        style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.txt}>Junior Dr. Main Form</Text>
      </View>
      <View
        style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color:"red",fontSize:40}}>Appointments</Text>
      </View>
      <View
        style={{width: '100%', justifyContent: 'center',}}>
        <Text style={styles.txt}>Appointment - 1 Patient name - Ali</Text>
      </View>
      <View
        style={{width: '100%', justifyContent: 'center',}}>
        <Text style={styles.txt}>Appointment - 2 Patient name - Hamza</Text>
      </View>
      <View
        style={{width: '100%', justifyContent: 'center',}}>
        <Text style={styles.txt}>Appointment - 3 Patient name - Zia</Text>
      </View>
      <View
        style={{width: '100%', justifyContent: 'center',}}>
        <Text style={styles.txt}>Appointment - 4 Patient name - Khan</Text>
      </View>
      <View
        style={{width: '100%', justifyContent: 'center',}}>
        <Text style={styles.txt}>Appointment - 5 Patient name - Usama</Text>
      </View>
    </View>
  );
};

export default Jrdoc;

const styles = StyleSheet.create({
  txt: {
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 20,
  },
});
