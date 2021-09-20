import React from 'react';
import SvgUri from 'react-native-svg-uri';
import mesa from '../../assets/mesa.svg'

import { RenderSvg } from '../RenderSvg';

import { Container, Button, Title} from './styles';

interface Props  {
    title: string;
    image?:  any;
    onPress?: () => void;
}

export function CommandPlate({ title, image, onPress }: Props) {
    return (
        <Container> 
            <Button onPress={onPress}>
                <RenderSvg name="plate"/>
                <Title>{title}</Title>
            </Button>
        </Container>
    );
}