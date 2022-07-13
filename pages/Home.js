import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {View, StyleSheet, ImageBackground} from 'react-native';


export default function Home(){
    return(
        <View style={estilo.container}>

        <ImageBackground  style={estilo.imagem} source={require('../assets/HortFruitSenac.gif')}>

        </ImageBackground>
        
        <StatusBar style="auto" />
    </View>
  );
}

const estilo = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imagem:{
        flex:1,
        width: 400,
        height: 400,
        marginTop:200
    }
  });