import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { Container} from './styles';

// import iconRestaurante from '../../assets/restauranteAlt.png'

import { FlatList } from 'react-native';
import { CardRestaurante } from '../../components/CardRestaurante';
import { restaurantes } from '../ListaDeRestaurantesClient/mocado';

import { TopTab } from '../../components/TopBar';


export function HistoricoReservasCliente() {
    return (
        <Container> 
            <TopTab name={"Histórico de reservas"}/>
            <FlatList data={restaurantes.todos} showsVerticalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center', justifyContent: 'center', width: '90%', paddingBottom: RFValue(30) }} renderItem={({item})=> 
                <CardRestaurante key={item.id} title={`Reserva - ${item.data}`} descricao={item.name} disabled={true}/>
                }/>
        </Container>
       
    );
}