import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../global/styles/theme';

interface EnviromentButtonProps extends RectButtonProps {
    title: string,
    active?: boolean;
}

export function QuantityButton({ title, active = false, ...rest }: EnviromentButtonProps) {
    return (
        <RectButton 
        style={[{
            backgroundColor: theme.colors.gray,
            width: RFValue(100),
            height: RFValue(30),
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: RFValue(10),
            marginHorizontal: RFValue(5), elevation: 4, shadowColor: 'black', shadowOffset:{width:0, height:2}, shadowOpacity: 0.23, shadowRadius: 2.62}, active && {backgroundColor: theme.colors.purple}]} {...rest}>
            <Text 
            style={[{
                color: theme.colors.gray_dark,
                textAlign: 'center',
                fontSize: RFValue(10),
                fontFamily: theme.fonts.regular,
                }, active && {color: theme.colors.white}]}>
                {title}
            </Text>
        </RectButton>
    );
}