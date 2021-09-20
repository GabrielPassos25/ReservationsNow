import React, { useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import SvgUri from 'react-native-svg-uri';
import { Dimensions, Platform } from 'react-native';

import { DynamicScrollView } from '../../components/DynamicScrollView';

import logoSVG from '../../assets/logo.svg';
import pixSVG from '../../assets/pix.svg';
import waiterSVG from '../../assets/garcomImage.svg';



import {RenderSvg} from '../../components/RenderSvg';
import {
    BackButton,
    BackText,
    ButtonsContainer,
    ButtonsText,
    ChoiceContainer,
    Container,
    IconContainer,
    PaymentText,
    PixButtonContainer,
    StatusBarAndroid,
    StatusBarIOS,
    WaiterButtonContainer
}
    from './styles';

const { height } = Dimensions.get('window');

interface Props {
    navigation: any;
}

export function PaymentChoice({navigation} : Props) {
    const [screenHeight, setScreenHeight] = useState(0);

    const onContentSizeChange = (contentWidth: number, contentHeight: number) => {
        setScreenHeight(contentHeight);
    }

    const scrollEnabled = screenHeight > height;

    return (
        <Container>
            <DynamicScrollView size={height}>
                <StatusBarAndroid />
                {
                    Platform.OS === 'ios' ? <StatusBarIOS /> : <></>
                }

                <BackButton onPress={() => navigation.push('ClientRoutes', {screen: 'Comanda'})}>
                    <Feather
                        name="arrow-left"
                        size={24}
                        color="white"
                    />
                    <BackText>Voltar</BackText>
                </BackButton>

                <IconContainer>
                    <RenderSvg name="logo"/>
                </IconContainer>

                <PaymentText>Realizar pagamento</PaymentText>

                <ButtonsContainer>
                    <ChoiceContainer>
                        <PixButtonContainer onPress={() => navigation.navigate('PaymentSecondary', {type:'pix'})} activeOpacity={0.7}>
                            <RenderSvg name="pix"/>
                        </PixButtonContainer>
                        <ButtonsText>PIX</ButtonsText>
                    </ChoiceContainer>

                    <ChoiceContainer>
                        <WaiterButtonContainer onPress={() => navigation.navigate('PaymentSecondary', {type:'waiter'})} activeOpacity={0.7}>
                            <RenderSvg name="garcom"/>
                        </WaiterButtonContainer>
                        <ButtonsText>Garçom</ButtonsText>
                    </ChoiceContainer>
                </ButtonsContainer>

            </DynamicScrollView>
        </Container>
    );
}