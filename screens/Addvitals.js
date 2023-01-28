import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {TextInput, RadioButton, Button} from 'react-native-paper';

const Addvitals = () => {
  const [cnic, setcnic] = useState();

  return (
    <View style={{flex: 1}}>
      <View
        style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.txt}>Add Vitals</Text>
      </View>
      <View>
        <Text style={{color: 'red', fontSize: 20}}>Blood Pressure</Text>
        <TextInput
          // label="Cnic"
          value={cnic}
          onChangeText={text => setcnic(text)}
        />
      </View>
      <View>
        <Text style={{color: 'red', fontSize: 20}}>Sugar</Text>
        <TextInput
          // label="Cnic"
          value={cnic}
          onChangeText={text => setcnic(text)}
        />
      </View>
      <View>
        <Text style={{color: 'red', fontSize: 20}}>Temperature</Text>
        <TextInput
          // label="Cnic"
          value={cnic}
          onChangeText={text => setcnic(text)}
        />
      </View>
      <View
        style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.txt}>Add Symptoms</Text>
      </View>
      <View>
        <Text style={{color: 'red', fontSize: 20}}>Enter Symptoms</Text>
        <TextInput
          // label="Cnic"
          value={cnic}
          onChangeText={text => setcnic(text)}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 30,
          justifyContent: 'center',
        }}>
        <Button
          style={{marginRight: 20}}
          icon="camera"
          mode="outlined"
          onPress={() => console.log('Pressed')}>
          Submit
        </Button>
        <Button
          icon="camera"
          mode="outlined"
          onPress={() => console.log('Pressed')}>
          Image
        </Button>
      </View>
    </View>
  );
};

export default Addvitals;

const styles = StyleSheet.create({
  txt: {
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 20,
  },
});
