import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import SvgUri from 'react-native-svg-uri';
import LogoImage from '../../assets/logo.svg'
import { Container, PageName } from './styles';
import {RenderSvg} from '../RenderSvg'


interface Props {
    name: string;
}

export function TopTab({ name }: Props) {
    return (
        <Container>
            <RenderSvg name="logo"/>
            <PageName>{name}</PageName>
        </Container>
    );
}
