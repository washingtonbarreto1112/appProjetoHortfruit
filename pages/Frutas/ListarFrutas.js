import React,{useEffect,useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, View, StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import {buscarTodasFrutas} from './ModelFrutas';


export default function ListarFrutas({navigation}){

const [dadosFrutas,setdadosFrutas] = useState([]);
  
useEffect(async() =>{
  const resp = await buscarTodasFrutas();
  setdadosFrutas(resp);
},[]);

    return(
        <View style={estilo.container}>
        <Text style={estilo.titulo}>Lista de Frutas</Text>
        <TouchableOpacity style={estilo.botaoCadfruta} onPress={()=> navigation.navigate('Cadastrar')}>
            <Text style={estilo.botaoTextoCadfruta}>Cadastrar Fruta</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
        
        <FlatList
        data={dadosFrutas}
        keyExtractor={dadosFrutas => dadosFrutas.id}
        renderItem={({item})=>
        <TouchableOpacity onPress={()=> navigation.navigate('Alterar')}>
          <View style={estilo.grupoFrutas}>
              <Text style={estilo.textoBotaoFruta}>{item.fruta}</Text>
              <Text style={estilo.textoBotaoValor}>{item.valor}</Text>  
          </View>
          </TouchableOpacity>
        }
        />
    </View>
  );
}

const estilo = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#315CFF',
      
     
    },
    titulo:{
      fontSize:30,
      color:"white",
      justifyContent: 'center',
      marginVertical:20,
      marginTop:60
    },
    grupoFrutas:{
      backgroundColor: '#E2FF6C',
      justifyContent: 'center',
      margin:15,
      padding:5,
      borderRadius:10,
      alignItems:'center',
      textAlign:'center',
    },
    textoBotaoFruta:{
      fontSize:20
    },
    textoBotaoValor:{
      fontSize:20
    },
    botaoCadfruta:{
        backgroundColor: '#FFA84C',
        margin:15,
        padding:5,
        borderRadius:10,
        paddingLeft:'30%'
    },
    botaoTextoCadfruta:{
        fontSize: 18
    }
  });