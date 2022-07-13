import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons} from '@expo/vector-icons';

import Home from "./Home.js";
import Pesquisa from "./Pesquisa.js";
import RotasBotao from "./RotasBotao";

const Tab = createBottomTabNavigator();

export default function RotasTab(){
    return(
        <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Tab.Screen
        name="Pesquisa"
        component={Pesquisa}
        options = {{
            tabBarIcon:({color,size})=><MaterialCommunityIcons name="magnify" color={color} size={size}/>}}
            />

        <Tab.Screen
        name="Home"
        component={Home}
        options = {{
            tabBarIcon:({color,size})=><MaterialCommunityIcons name="home" color={color} size={size}/>}}
            />

        <Tab.Screen
        name="Frutas"
        component={RotasBotao}
        options = {{
            tabBarIcon:({color,size})=><MaterialCommunityIcons name="basket-plus" color={color} size={size}/>}} 
            /> 
    </Tab.Navigator>
  );
}