import React,{useState} from "react";
import {Text,View,StyleSheet,Alert,TouchableOpacity,TextInput } from 'react-native';
import {salvarNovaFruta} from './ModelFrutas';

export default function CadastrarFruta({navigation}){
    const [idp, setIdp] = useState('');
    const [frutap, setFrutap] = useState('');
    const [valorp, setValorp] = useState('');
    const [fotop, setFotop] = useState('');
    
    async function cadastro(){
        const resultado = await salvarNovaFruta(idp,frutap,valorp,fotop);
        if(resultado === 'Sucesso'){
            Alert.alert('Fruta cadastrada com sucesso!!');
            navigation.goBack();
        }else{
            Alert.alert('Erro ao cadastrar a fruta');
        }
    }

    return(
        <View style={estilo.container}>
        <TextInput
        value={idp} 
        placeholder="Digite o código da Fruta"
        style={estilo.TextInputTodos}
        onChangeText ={setIdp}
        />
        <TextInput
        value={frutap} 
        placeholder="Digite o nome da Fruta"
        style={estilo.TextInputTodos}
        onChangeText ={setFrutap}
        />
        <TextInput
        value={valorp} 
        placeholder="Digite o valor da Fruta"
        style={estilo.TextInputTodos}
        onChangeText ={setValorp}
        />
        <TextInput
        value={fotop} 
        placeholder="Digite o link da foto da Fruta"
        style={estilo.TextInputTodos}
        onChangeText ={setFotop}
        />

        <TouchableOpacity style={estilo.botaoCadastrar} onPress={cadastro}>
            <Text style={estilo.textoBotaoCadastrar}>Cadastrar</Text>
        </TouchableOpacity>

        </View>
    );
}

const estilo = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FF666F',
        paddingTop:50,
        marginTop:50
    },
    TextInputTodos:{
        fontSize: 18,
        marginTop:12,
        backgroundColor: '#FFBADC'
        
    },
    botaoCadastrar:{
        backgroundColor: '#9A4EFC',
        margin:15,
        padding:5,
        borderRadius:10
    },
    textoBotaoCadastrar:{
        fontSize:20,
        textAlign:'center',
        color:'white'
    }
})