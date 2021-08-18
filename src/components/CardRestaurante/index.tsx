import React from 'react';

import { ImageURISource, TouchableOpacityProps } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, InfosArea, TitleRestaurante, SubtitleRestaurante, Image} from './styles';

import iconRestaurante from '../../assets/template_restaurant.png'
interface Props  {
    title: string;
    descricao: string;
    image?:  any;
    disabled: boolean;
}

export function CardRestaurante({ title, image, descricao, disabled }: Props) {
    const navigation = useNavigation(); 
    return (
        <Container disabled={disabled} onPress={() => navigation.navigate('Details')} > 
            <Image source={image ?? iconRestaurante} style={{height: "95%"}}/>
            <InfosArea>
                <TitleRestaurante>
                    {title}
                </TitleRestaurante>
                <SubtitleRestaurante>
                    {descricao}
                </SubtitleRestaurante>

            </InfosArea>
            
        </Container>
    );
}