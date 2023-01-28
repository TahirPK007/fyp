import {View, Text, StyleSheet} from 'react-native';
import Reac, {useState, useEffect} from 'react';
import {TextInput, RadioButton,Button} from 'react-native-paper';

const Addpatient = () => {
  const [cnic, setcnic] = useState();
  const [relation, setrelation] = useState();
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
          // label="Cnic"
          value={cnic}
          onChangeText={text => setcnic(text)}
        />
      </View>
      <View>
        <Text style={{color: 'red', fontSize: 20}}>Relation</Text>
        <TextInput
          // label="Cnic"
          value={cnic}
          onChangeText={text => setcnic(text)}
        />
      </View>
      <View>
        <Text style={{color: 'red', fontSize: 20}}>Patient Name</Text>
        <TextInput
          // label="Cnic"
          value={cnic}
          onChangeText={text => setcnic(text)}
        />
      </View>
      <View>
        <Text style={{color: 'red', fontSize: 20}}>D.O.B</Text>
        <TextInput
          // label="Cnic"
          value={cnic}
          onChangeText={text => setcnic(text)}
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
          <Text style={{color: 'black', fontSize: 20}}>Gender</Text>
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
          onPress={() => console.log('Pressed')}>
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
