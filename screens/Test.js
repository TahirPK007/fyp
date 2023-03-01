import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons"

const Test = () => {
  return (
    <View style={{justifyContent:"center",alignItems:"center"}}>
        <TouchableOpacity>
      <Icon name="person-add-outline" size={40} color="black"/>
      <Text style={{fontSize:10}}>i am icon</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Test