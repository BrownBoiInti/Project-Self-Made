import React, {Component} from 'react'
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image} from "react-native";
import {TextInput} from 'react-native-gesture-handler'
import {Header} from 'react-native-elements' 


export default class HomeScreen extends Component {
    render() {
        return(
            <View style = {styles.container}>
              <Header>
                  centerComponent = {{
                      text: 'On a scale from 1-10, how do you feel?';
                      style : {color : 'black', fontSize : 20 }
                  }}
              </Header>

              <TouchableOpacity style = {color : 'red' , marginLeft: RFValue(5), marginTop(20)}/>
                  <Text>1</Text>
              </TouchableOpacity>



            </View>
        )
    }
}