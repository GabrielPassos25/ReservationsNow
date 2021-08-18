import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { Container} from './styles';
import { useNavigation } from '@react-navigation/native';
import iconRestaurante from '../../assets/restauranteAlt.png'

import { FlatList } from 'react-native';
import { CardRestaurante } from '../../components/CardRestaurante';
import { restaurantes } from './mocado';

import { TopTab } from '../../components/TopBar';


export function ListaDeRestaurantesClient() {
    const navigation = useNavigation(); 
    return (
        <Container> 
            <TopTab name={"Lista de restaurantes"}/>
            <FlatList data={restaurantes.todos} showsVerticalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center', justifyContent: 'center', width: '90%', paddingBottom: RFValue(30) }} renderItem={({item})=> 
                <CardRestaurante key={`${item.id}`} title={item.name} descricao={item.Descricao} disabled={false}/>
                }/>
        </Container>
       
    );
}