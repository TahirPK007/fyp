import { View, Text, StyleSheet, } from 'react-native'
import Reac, { useState, useEffect } from 'react'
import { TextInput } from 'react-native-paper';


const Addpatient = () => {

  const [cnic, setcnic] = useState()
  const [relation, setrelation] = useState()

  return (
    <View style={{ felx: 1 }}>
      <View style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.txt}>Add New Patient</Text>
      </View>
      <Text style={{ color: "red", fontSize: 20 }}>Cnic</Text>
      <TextInput
        // label="Cnic"
        value={cnic}
        onChangeText={text => setcnic(text)}
      />
      <View>
        <Text style={{ color: "red", fontSize: 20 }}>Full Name</Text>
        <TextInput
          // label="Cnic"
          value={cnic}
          onChangeText={text => setcnic(text)}
        />
      </View>
      <View>

      </View>
    </View>
  )
}

export default Addpatient;

const styles = StyleSheet.create({
  txt: {
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 20,
  }
})