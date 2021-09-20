import React, { useState } from 'react';
import { Dimensions, Platform, ScrollView } from 'react-native';
import { Container, BackButton, Icon, BackText, StatusBarAndroid, StatusBarIOS, IconContainer, ButtonContainer } from './styles';

import { PaymentDetails } from '../../components/PaymentDetails';
import { ButtonPayment } from '../../components/ButtonPayment';
import { DynamicScrollView } from '../../components/DynamicScrollView';
import { ModalPayment } from '../../components/ModalPayment';
import Waiter from '../../assets/waiter.svg';
import Pix from '../../assets/pix.svg';

const { height } = Dimensions.get('window');

interface Props {
    route: any;
    navigation: any;
}

export function PaymentSecondary({route, navigation} : Props) {
    const [screenHeight, setScreenHeight] = useState(0);
    const onContentSizeChange = (contentWidth: number, contentHeight: number) => {
        setScreenHeight(contentHeight);
    }
    const {type} = route.params;
    const [modalVisible, setModalVisible] = useState(false);

    function handleCancelModal(){
        setModalVisible(!modalVisible)
    }

    function handleExitModal(){
        setModalVisible(!modalVisible)
    }

    const scrollEnabled = screenHeight > height;
    return (
        <Container>
            <DynamicScrollView size={height}>
            <StatusBarAndroid />
            {
                Platform.OS === 'ios' ? < StatusBarIOS /> : <></>
            }
                <BackButton onPress={() => navigation.navigate("AdminRoutes", { screen: "Início"})}>
                    <Icon name="arrow-left" size={24} color="white" />
                    <BackText>Voltar</BackText>
                </BackButton>
                <IconContainer>
                    <PaymentDetails image={type === 'pix' ? Pix : Waiter} description={type}/>
                </IconContainer>
                <ButtonContainer>
                    <ButtonPayment title="Continuar" onPress ={() =>  setModalVisible(!modalVisible)}/>
                    {
                        modalVisible && <ModalPayment cancel = {handleCancelModal} exit = {handleExitModal}/>
                    }
                </ButtonContainer>
            </DynamicScrollView>
        </Container>
    );
}
