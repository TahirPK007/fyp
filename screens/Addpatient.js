import {View, Text, StyleSheet,Alert} from 'react-native';
import Reac, {useState, useEffect} from 'react';
import {TextInput, RadioButton, Button} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';

const Addpatient = ({navigation}) => {
  const addpat = async () => {
    fetch('http://10.0.2.2/fyp/api/Patient/Addpat', {
      method: 'POST',
      body: JSON.stringify({
        cnic: `${cnic}`,
        full_name: `${fullname}`,
        relation: `${relation}`,
        relative_name: `${relativename}`,
        dob: `${dob}`,
        gender: `${gender}`,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(json => console.log(json));
  };

  const next = () => {
    addpat();
    navigation.navigate('Addvitals');
  };

  const [cnic, setcnic] = useState();
  const [fullname, setfullname] = useState('');
  const [relation, setrelation] = useState('self');
  const [relativename, setrelativename] = useState('');
  const [dob, setdob] = useState('');
  const [gender, setgender] = useState('');

  return (
    <View style={{felx: 1}}>
      <View
        style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.txt}>Add New Patient</Text>
      </View>
      <Text style={{color: 'red', fontSize: 20}}>Cnic</Text>
      <TextInput
        // label="Cnic"
        value={cnic}
        onChangeText={text => setcnic(text)}
      />
      <View>
        <Text style={{color: 'red', fontSize: 20}}>Full Name</Text>
        <TextInput
          // label="Full Name"
          value={fullname}
          onChangeText={text => setfullname(text)}
        />
      </View>
      <View>
        <Text style={{color: 'red', fontSize: 20}}>Relation</Text>
        <Picker
          style={{backgroundColor: 'white'}}
          selectedValue={relation}
          onValueChange={value => {
            setrelation(value);
          }}>
          <Picker.Item label="self" value="self" />
          <Picker.Item label="wife" value="wife" />
          <Picker.Item label="child" value="child" />
        </Picker>
      </View>
      {relation !== 'self' ? (
        <View>
          <Text style={{color: 'red', fontSize: 20}}>Relative Name</Text>
          <TextInput
            // label="Enter relative name"
            value={relativename}
            onChangeText={text => setrelativename(text)}
          />
        </View>
      ) : null}
      <View>
        <Text style={{color: 'red', fontSize: 20}}>D.O.B</Text>
        <TextInput
          // label="Date Of Birth"
          value={dob}
          onChangeText={text => setdob(text)}
        />
      </View>
      <View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            flexDirection: 'column',
          }}>
          <Text style={{color: 'red', fontSize: 20}}>Gender</Text>
          <RadioButton.Group
            onValueChange={value => setgender(value)}
            value={gender}>
            <RadioButton.Item label="Male" value="male" />
            <RadioButton.Item label="Female" value="female" />
          </RadioButton.Group>
        </View>
      </View>
      <View
        style={{flexDirection: 'row', marginTop: 30, justifyContent: 'center'}}>
        <Button
          style={{marginRight: 20}}
          icon="camera"
          mode="outlined"
          onPress={next}>
          Continue
        </Button>
      </View>
    </View>
  );
};

export default Addpatient;

const styles = StyleSheet.create({
  txt: {
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 20,
  },
});
