import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { Container, AreaFlatList, StatusBarAndroid} from './styles';

import { FlatList, Platform } from 'react-native';


import { TopTab } from '../../components/TopBar';
import { CardButton } from '../../components/CardButton';

import { pratos } from '../../utils/mocado';
import { CardComanda } from '../../components/CardComanda';


export function ComandaCliente() {
    return (
        <Container>
            {
                Platform.OS === 'android' ? <StatusBarAndroid /> : <></>
            } 
            <TopTab name={""}/>
            <CardComanda table={"X"} waiter={"Cinthia"} amount={"100.00"}/>
            <AreaFlatList>
                <FlatList
                    columnWrapperStyle = {{justifyContent: 'space-around'}}
                    data={pratos.todos}  
                    numColumns={3}
                    contentContainerStyle={{ paddingBottom: RFValue(280) }}
                    showsVerticalScrollIndicator = {false}
                    renderItem={({ item, index, separators })=> 
                <CardButton title={item.name} indice={index+1}/>
                }/>
            </AreaFlatList>
        </Container>
       
    );
}