import React from 'react';
// import {  Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import IconRelogio from '../../assets/relogio.png'
import IconMoney from '../../assets/money.png'
import { Container, Title, AreaLeft , Header, SubTitle, Line, SubMenu, TitleH3, Image, AreaRight} from './styles';

interface Props {

    table: string;
    waiter: string;
    amount: string;
}

export function CardComanda({ table, waiter, amount }: Props) {
    return (
        <Container >
            <AreaLeft>
                <Header>
                    <Title>
                        COMANDA
                    </Title>
                   
                    <Line />
                    <SubTitle>
                        MESA - {table}
                    </SubTitle>
                </Header>
                <SubMenu>
                    <TitleH3>
                        Garçom: {waiter}
                    </TitleH3>
                    <TitleH3>
                        Valor total: R$ {amount}
                    </TitleH3>

                </SubMenu>
            </AreaLeft>
            <AreaRight>
                <Image source={IconRelogio} height={RFValue(10) }/>
                <Image source={IconMoney} height={RFValue(10)}/>
            </AreaRight>
        
        </Container>
    );
}
