import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { ButtonContainer, ButtonText, TabButton } from './styles';

interface TopButtonProps extends RectButtonProps {
    title: string;
    active?: boolean;
}

export function TopButtons({ title, active = false, ...rest }: TopButtonProps) {


    return (
        <ButtonContainer isActive={active}>
            <TabButton {...rest}>
                <ButtonText isActive={active}>
                    {title}
                </ButtonText>
            </TabButton>
        </ButtonContainer>
    );
}
