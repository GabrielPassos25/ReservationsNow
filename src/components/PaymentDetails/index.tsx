import React from 'react';
import { ImageURISource, Image } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import { Container, Icon, Description, ImagePayment } from './styles';
import LottieView from 'lottie-react-native';
import LoadAnimation from '../../assets/card.json';
import { RFValue } from 'react-native-responsive-fontsize';
import QrCode from '../../assets/qrCode.png';
import {RenderSvg} from '../RenderSvg';


interface Props {
    image: ImageURISource;
    description: string;
}

export function PaymentDetails({ image, description }: Props) {
    return (
        <Container>
            <Icon>
                {
                    description === 'waiter' ? <RenderSvg name="garcom"/> : <RenderSvg name="pix"/>
                }
            </Icon>
            <Description>
                {
                    description === 'waiter' ? 'Aguarde o garçom para realizar o pagamento' : 'Escaneie o código para realizar o pagamento'
                }
            </Description>
            <ImagePayment>
                {
                    description === 'waiter' 
                    ? 
                    <LottieView
                        source = {LoadAnimation} autoPlay loop style={{width: RFValue(200), height: RFValue(200)}}
                    />
                    :
                    <Image
                        source = {QrCode}
                        style={{width: RFValue(200), height: RFValue(200)}}
                    />
                }
            </ImagePayment>
        </Container>
    );
}