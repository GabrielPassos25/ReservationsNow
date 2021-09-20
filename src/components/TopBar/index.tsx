import React from 'react';
import { Container, HomeContainer} from './styles';
import {RenderSvg} from '../RenderSvg'

export function TopTab() {
    return (
        <Container>
            <HomeContainer>
                <RenderSvg name="logo_toptab"/>
            </HomeContainer>
        </Container>
    );
}
