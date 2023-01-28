import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          marginTop: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{
            height: 180,
            width: 180,
            resizeMode: 'center',
            borderWidth: 2,
            borderColor: 'green',
            borderRadius: 100,
          }}
          source={require('../images/icon.png')}
        />
        <Text style={styles.virtualclinic}>Virtual Clinic</Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          marginTop: 20,
        }}>
        <TextInput
          style={styles.txtinput}
          mode="outlined"
          label="Email"
          value={email}
          onChangeText={value => setemail(value)}
        />

        <TextInput
          style={styles.txtinput}
          mode="outlined"
          label="Password"
          value={password}
          onChangeText={value => setpassword(value)}
        />
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
            Log In
          </Button>
          <Button
            icon="camera"
            mode="outlined"
            onPress={() => console.log('Pressed')}>
            Sign Up
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  virtualclinic: {
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 5,
    marginTop: 10,
    marginBottom: 20,
  },
  pass: {
    marginTop: 10,
  },
  txtinput: {
    width: '70%',
    marginBottom: 15,
  },
});
