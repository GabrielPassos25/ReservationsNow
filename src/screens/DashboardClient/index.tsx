import React, {useState} from 'react';
import {View, LayoutRectangle, Platform} from 'react-native';
import { Container, HeaderArea, HeaderTitle ,ViewRow, SearchArea, HeaderSubTitle, StatusBarAndroid} from './styles';

import SvgUri from 'react-native-svg-uri';
import Logo from '../../assets/logo.svg';
import iconCardapio from '../../assets/cardapio.svg';
import iconMesa from '../../assets/tables.svg'
import iconHistorico from '../../assets/historico.svg';
import iconComanda from '../../assets/command.svg' ;
import iconPagamento from '../../assets/payment.svg' ;
import { DynamicScrollView } from '../../components/DynamicScrollView';

import { ScrollView } from 'react-native';
import { ButtonMain } from '../../components/ButtonMain';
import {RenderSvg} from '../../components/RenderSvg';
interface Props {
    navigation: any;
}

export function DashboardClient({navigation} : Props) {

    function find_dimensions(layout : LayoutRectangle){
        const {height} = layout;
        setHeight(height);
        return height;
    }

    const [height, setHeight] = useState(0);

    return (
        <>
            <Container>
                {
                    Platform.OS === 'android' ? <StatusBarAndroid /> : <></>
                }
                <View onLayout={(event) => {find_dimensions(event.nativeEvent.layout)}}> 
                    <HeaderArea>   
                        <RenderSvg name="logo"/>
                        <HeaderTitle>
                            Olá usuário!
                        </HeaderTitle>
                        <HeaderSubTitle>
                        Realize sua reserva já.
                        </HeaderSubTitle>
                    </HeaderArea>
                </View>
                <DynamicScrollView size={height}>
                    <SearchArea>
                    <ViewRow>
                    <ButtonMain title="Reservar mesa" name={'mesa'} screen='Reservas'/>
                    <ButtonMain title="Histórico de reservas" name={'historico'} screen='Histórico'/>
                    </ViewRow>
                    <ViewRow>
                        <ButtonMain title="Consultar cardápio" name={'cardapio'} screen='Cardápio'/>
                        <ButtonMain title="Realizar pagamento" name={'pagamento'} screen='Pagamento'/>
                    </ViewRow>
                        <ButtonMain title="Consultar comanda" name={'comanda'} screen='Comanda'/>
                    </SearchArea>
                </DynamicScrollView>
            </Container>
        </>
    );
}