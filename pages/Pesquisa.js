import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, View, StyleSheet, TextInput,TouchableOpacity,Alert} from 'react-native';
import {pesquisarNomeFruta} from '../pages/Frutas/ModelFrutas';



export default function Pesquisa(){
const [dadosFrutas, setdadosFrutas] = useState([]);

async function buscarFrutas(){
  const resultado = await pesquisarNomeFruta(nomeFruta);
  if (resultado) {
    setdadosFrutas(resultado);
  } else {
    Alert.alert('Fruta não encontrada!!');
    setdadosFrutas('');
  }
}

    return(
        <View style={estilo.container}>
        <Text style={estilo.titulo}>Qual Fruta você quer?</Text>
        <TextInput 
        placeholder='Digite uma Fruta.'
        style={estilo.TextInput}
        />
        <TouchableOpacity style={estilo.botao} onPress={()=> buscarFrutas()}>
          <Text style={estilo.textoBotao}>Pesquisar</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
    </View>
  );
}

const estilo = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#B1FFFD',
      alignItems: 'center',
      justifyContent: 'center',
    },
    TextInput:{
        borderColor:'#e76f51',
        fontSize:16,
        width:'80%',
        height:30,
        borderRadius:6,
        marginTop:15,
        paddingHorizontal:10,
        
    },
    botao:{
      backgroundColor:"#BAB9FF",
      marginTop:15,
      padding:10,
      borderRadius:15,
      width:'80%',
      alignItems:'center',
      justifyContent: 'center'
    },
    textoBotao:{
      fontSize:15,
      fontWeight:'700',
      color:'#4100D6'
    },
    titulo:{
      fontSize:30,
      color:"#4100D6"
    }
  });