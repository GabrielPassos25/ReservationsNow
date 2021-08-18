import React from 'react';
import SvgUri from 'react-native-svg-uri';
import { Container, SubTitle , Button} from './styles';
import { useNavigation } from '@react-navigation/native';

import Tables from '../../icon/tables';
import Cardapio from '../../icon/cardapio';
import Payment from '../../icon/payment';
import Command from '../../icon/command';
import Historico from '../../icon/historico';
import { RenderSvg } from '../RenderSvg';

interface Props  {
    title: string;
    name:  string;
    screen: string;
}

export function ButtonMain({ title,name, screen }: Props) {
    const navigation = useNavigation(); 
    return (
        <Container> 
            <Button onPress={() => navigation.navigate('ClientRoutes', {screen: screen})}>
                <RenderSvg name= {name} />	
            </Button>
            <SubTitle>
                {title}
            </SubTitle>
        </Container>
    );
}