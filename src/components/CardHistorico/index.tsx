import React, { useState }  from 'react';
import StarRating from 'react-native-star-rating';
import { useNavigation } from '@react-navigation/native';

import theme from '../../global/styles/theme';
import { Container, InfosArea, TitleRestaurante, ReservaDetails, Image, AtendimentoID, Separator, OrderDetails, Evaluation, EvaluationText, Menu, MenuButton, MenuText, Data, TextImageArea} from './styles';

import iconRestaurante from '../../assets/template_restaurant.png'

interface Props  {
    id: number;
    title: string;
    details: string[];
    data: string;
    image?:  any;
    disabled: boolean;
}

export function CardHistorico({ title, id, data, image, details, disabled }: Props) {
    const navigation = useNavigation(); 

    const [starRating, setStarRating] = useState(0);

    const onStarRatingPress = (rating: number) => {
        setStarRating(rating);
    }
    
    return (
        <Container disabled={disabled} onPress={() => navigation.navigate('Details')} > 
            
            <InfosArea>
                <TextImageArea>
                    <Image source={image ?? iconRestaurante}/>
                    <TitleRestaurante> {title} </TitleRestaurante>
                </TextImageArea>
                <Data>{data}</Data>
            </InfosArea>
            
            
            <Separator/>

            <OrderDetails>
                <AtendimentoID>Atendimento N° {id} finalizado!</AtendimentoID>
                {details.map((detail) => 
                    <ReservaDetails> {detail} </ReservaDetails> 
                )}
            </OrderDetails>

            <Separator />

            <Evaluation>
                <EvaluationText>Avaliação do atendimento</EvaluationText>
                
                <StarRating 
                    activeOpacity={0.6}
                    fullStarColor={theme.colors.yellow}
                    starSize={20}
                    rating={starRating}
                    selectedStar={(rating) => onStarRatingPress(rating)} 
                />
            </Evaluation>    

            <MenuButton activeOpacity={0.8}>
                <MenuText> Ajuda </MenuText>
            </MenuButton>     
        </Container>
    );
}