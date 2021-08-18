import React from 'react';
import SvgUri from 'react-native-svg-uri';
import mesa from '../../assets/mesa.svg'

import { RenderSvg } from '../RenderSvg';

import { Container, InfosArea, TitleRestaurante,SubtitleRestaurante,  Button} from './styles';
import { RFValue } from 'react-native-responsive-fontsize';

interface Props  {
    title: string;
    lugares?: number;
    indice: number;
    image?:  any;
    onPress?: () => void;
}

export function CardButton({ title, image, lugares,indice, onPress }: Props) {
    return (
        <Container> 
             <Button onPress={onPress}>
                <RenderSvg name="tableicon"/>
            </Button>
       
            <InfosArea>
                
              {lugares ?
              <>
              <TitleRestaurante>
                    Mesa {indice}
                </TitleRestaurante>
                <SubtitleRestaurante>
                    {lugares} lugares
                </SubtitleRestaurante>
                </>
                : (
                    <TitleRestaurante>
                     {title}
                    </TitleRestaurante>
                
                )
            }

            </InfosArea>
            
        </Container>
    );
}