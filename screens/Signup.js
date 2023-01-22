import { View, Text, StyleSheet, } from 'react-native';
import React, { useState, useEffect } from 'react';
import { TextInput, RadioButton } from 'react-native-paper';
//adding some chnages to signup
const Signup = () => {
    const [email, setemail] = useState('')
    const [checked, setchecked] = useState()

    return (
        <View style={{ flex: 1 }}>
            <View style={{ width: "100%" }}>
                <Text style={styles.txt}>Sign Up</Text>
            </View>
            <View>
                <TextInput
                    mode='outlined'
                    label="Email"
                    value={email}
                    onChangeText={text => setemail(text)}
                />
                <TextInput
                    mode='outlined'
                    label="Email"
                    value={email}
                    onChangeText={text => setemail(text)}
                />
                <TextInput
                    mode='outlined'
                    label="Email"
                    value={email}
                    onChangeText={text => setemail(text)}
                />
                <TextInput
                    mode='outlined'
                    label="Email"
                    value={email}
                    onChangeText={text => setemail(text)}
                />
                <TextInput
                    mode='outlined'
                    label="Email"
                    value={email}
                    onChangeText={text => setemail(text)}
                />
                <TextInput
                    mode='outlined'
                    label="Email"
                    value={email}
                    onChangeText={text => setemail(text)}
                />
                <View>
                <RadioButton
                  value="first"
                  status={ checked === 'first' ? 'checked' : 'unchecked' }
                  onPress={() => setchecked('first')}
                />
                <RadioButton
                  value="second"
                  status={ checked === 'second' ? 'checked' : 'unchecked' }
                  onPress={() => setchecked('second')}
                />
              </View>
            </View>
        </View>
    )
}

export default Signup;


const styles = StyleSheet.create({
    txt: {
        color: "black",
        fontWeight: "bold",
        fontSize: 30,
        marginLeft: 20,
    }
})