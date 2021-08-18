import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { InfoContainer, Title, InfoIcon, InfoText, IconBackground,DescriptionContainer, TitleValue, Separator } from './styles';
import theme from '../../global/styles/theme';
import { TouchableOpacity } from 'react-native';
interface MenuProps {
    data: {
        id: string;
        icon: string;
        value: number;
        method: string;
    };
}

export function LastOrders({ data }: MenuProps) {
    return (
        <>
        <InfoContainer>
            <InfoIcon>
                <IconBackground/>
            </InfoIcon>
            <InfoText>
                <Title>Nome do Cliente - Mesa XX</Title>
                <DescriptionContainer>
                    <TitleValue>R$ {data.value} | {data.method}</TitleValue>
                </DescriptionContainer>
            </InfoText>
            <InfoIcon>
                <TouchableOpacity>
                    <IconBackground>
                            <MaterialCommunityIcons name = {"chevron-right"} size={24} color={theme.colors.purple_light}/>
                    </IconBackground>
                </TouchableOpacity>
            </InfoIcon>
        </InfoContainer>
            <Separator />
            </>
    );
}