import React from 'react';

import { ImageURISource, TouchableOpacityProps } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StarRating from 'react-native-star-rating';

import { Container, InfosArea, TitleRestaurante, DetailsRestaurante, Image, RateRestaurante, RateText} from './styles';

import iconRestaurante from '../../assets/template_restaurant.png'
import theme from '../../global/styles/theme';
interface Props  {
    title: string;
    descricao: string;
    endereco: string;
    image?:  any;
    disabled: boolean;
}

export function CardRestaurante({ title, image, descricao, endereco, disabled }: Props) {
    const navigation = useNavigation(); 
    return (
        <Container onPress={() => navigation.navigate("DashboardClient")}> 
            <Image source={image ?? iconRestaurante} style={{height: "95%"}}/>
            <InfosArea>
                <TitleRestaurante>{title}</TitleRestaurante>

                <DetailsRestaurante>{descricao} - {endereco}</DetailsRestaurante> 

                <RateRestaurante>
                    <StarRating starSize={15} rating={1} maxStars={1} disabled={true} fullStarColor={theme.colors.yellow} />
                    <RateText>4.9</RateText>
                </RateRestaurante>
            </InfosArea>
        </Container>
    );
}