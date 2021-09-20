import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { Container, AreaFlatList, StatusBarAndroid} from './styles';

import { FlatList, Platform } from 'react-native';


import { TopTab } from '../../components/TopTab';
import { CommandPlate } from '../../components/CommandPlate';

import { pratos } from '../../utils/mocado';
import { CardComanda } from '../../components/CardComanda';
import {api} from '../../utils/api';
import { RestauranteContext } from "../../components/Contexts/RestauranteContext";

interface IQueryResponse {
    message: string,
    status: number,
    data?: any
  }

export function ComandaCliente() {
    const {idCliente} = React.useContext(RestauranteContext);
    const [comanda, setComanda] = React.useState({pratos: [], mesa: {numero: 0}});
    const data = {
        id_cliente: idCliente,
        status_comanda: 'ABERTA' 
    }
    async function getComanda(){
        let response:IQueryResponse = (await api.post('/comandas', data)).data.response;
        const id = response.data.comandas[0].id;
        response = (await api.post(`/comanda/${id}`)).data.response;
        setComanda({...response.data, id});
    }
    React.useEffect(() => {
        getComanda();
    }, [true]);
    React.useEffect(() => {
        setTimeout(getComanda, 5000);
    });
    return (
        
        <Container>
            {
                Platform.OS === 'android' ? <StatusBarAndroid /> : <></>
            } 
            <TopTab name={""} />
            <CardComanda table={comanda.mesa.numero} waiter={comanda.garcom} amount={comanda.total}/>
            <AreaFlatList>
                <FlatList
                    columnWrapperStyle = {{justifyContent: 'space-around'}}
                    data={comanda.pratos}  
                    numColumns={3}
                    contentContainerStyle={{ paddingBottom: RFValue(280) }}
                    showsVerticalScrollIndicator = {false}
                    renderItem={({ item, index, separators })=> 
                <CommandPlate title={item.quantidade + "x " + item.nome} indice={index+1} />
                }/>
            </AreaFlatList>
        </Container>
       
    );
}