import React,{useState} from "react";
import {Text,View,StyleSheet,Alert,TouchableOpacity,TextInput } from 'react-native';
import {alterarFrutas, deletarFrutas} from './ModelFrutas';

export default function AlterarFruta({navigation}){
    const [idp, setIdp] = useState('');
    const [frutap, setFrutap] = useState('');
    const [valorp, setValorp] = useState('');
    const [fotop, setFotop] = useState('');
    
    async function alterar(){
        const resultado = await alterarFrutas(idp,frutap,valorp,fotop);
        if(resultado == 'Sucesso'){
            Alert.alert('Fruta alterada com sucesso!!');
            navigation.goBack();
        }else{
            Alert.alert('Erro ao alterar a fruta');
        }
    }

    async function deletar(){
        const resultado = await deletarFrutas(idp);
        if(resultado == 'Sucesso'){
            Alert.alert('Fruta deletada com sucesso!!');
            navigation.goBack();
        }else{
            Alert.alert('Erro ao deletar a fruta');
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

        <TouchableOpacity style={estilo.botaoCadastrar} onPress={alterar}>
            <Text style={estilo.textoBotaoCadastrar}>Alterar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilo.botaoCadastrar} onPress={deletar}>
            <Text style={estilo.textoBotaoCadastrar}>Excluir</Text>
        </TouchableOpacity>

        </View>
    );
}

const estilo = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#E2A4FF',
        paddingTop:100

    },
    TextInputTodos:{
        fontSize: 18,
        backgroundColor:'white',
        marginTop:5,
    },
    botaoCadastrar:{
        backgroundColor: '#8B009B',
        margin:20,
        padding:5,
        borderRadius:10,
    },
    textoBotaoCadastrar:{
        fontSize:18,
        textAlign:'center',
        color:'white'
    }
})