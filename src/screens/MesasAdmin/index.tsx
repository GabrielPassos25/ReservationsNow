import React, { useState } from 'react';
import { FlatList, Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { CardButton } from '../../components/CardButton';
import { ModalOcupadas } from '../../components/ModalMesasAdmin/ModalOcupadas';
import { ModalReservadas } from '../../components/ModalMesasAdmin/ModalReservadas';
import { TopButtons } from '../../components/TopButtons';
import { TopTab } from '../../components/TopBar';

import { restaurantes } from '../../utils/mocado';

import { Container, AreaFlatList, ButtonsContainer, StatusBarAndroid, Title} from './styles';


export function MesasAdmin() {
    const qtdMesas: number = 3;
    const client = 
    {                   
        name: "Cinthia",
        qtd: 2
    }            
    
    const [menuSelected, setMenuSelected] = useState("DISPONÍVEIS");
    const [modalVisible, setModalVisible] = useState(false);

    function handleMenuSelected(menuOption: string) {
        setMenuSelected(menuOption);
    }

    function handleCancelModal() {
        setModalVisible(!modalVisible);
    }

    function handleExitModal() {
        setModalVisible(!modalVisible);
    }

    return (
        <Container>
            {
                Platform.OS === 'android' ? <StatusBarAndroid /> : <></>
            } 

            <TopTab name={"MESAS"}/>
            
            <ButtonsContainer>
                <TopButtons
                title="DISPONÍVEIS"
                active={"DISPONÍVEIS" === menuSelected}
                onPress={() => handleMenuSelected("DISPONÍVEIS")}
                />

                <TopButtons
                title="OCUPADAS"
                active={"OCUPADAS" === menuSelected}
                onPress={() => handleMenuSelected("OCUPADAS")}
                />

                <TopButtons
                title="RESERVADAS"
                active={"RESERVADAS" === menuSelected}
                onPress={() => handleMenuSelected("RESERVADAS")}
                />
            </ButtonsContainer>
    
            <Title>Mesas disponíveis - {qtdMesas}</Title>

            <AreaFlatList>
                <FlatList
                    columnWrapperStyle = {{justifyContent: 'space-around'}}
                    data={restaurantes.todos}  
                    numColumns={3}
                    contentContainerStyle={{ paddingBottom: RFValue(390) }}
                    showsVerticalScrollIndicator = {false}
                    renderItem={({ item, index, separators })=> 
                        <CardButton 
                            title={item.name} 
                            lugares={item.lugares} 
                            indice={index+1}
                            onPress={() => setModalVisible(!modalVisible)}
                        />
                    }
                />

                {modalVisible && (menuSelected === "OCUPADAS") && (
                    <ModalOcupadas
                        onCancel={handleCancelModal}
                        onExit={handleExitModal}
                    />
                )}                
                
                {modalVisible && (menuSelected === "RESERVADAS") && (
                    <ModalReservadas
                        titleMesa="1"
                        infosCliente={client}
                        onCancel={handleCancelModal}
                        onExit={handleExitModal}
                    />
                )}
            </AreaFlatList>
        </Container>
    );
}