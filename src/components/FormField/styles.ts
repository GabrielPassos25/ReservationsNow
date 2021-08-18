import styled from 'styled-components/native'
import { TextInput } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';

interface FormsProps {
    isFilled: boolean;
}

interface IconProps {
    type: 'email' | 'password' | 'name';
    isFilled: boolean;
}

export const Error = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.pink};
    margin-top: 7px;
`;

export const Container = styled.View`
    width: 80%;
`;

export const Titulo = styled.Text<FormsProps>`
    margin-top: ${RFValue(38)}px;
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    margin-bottom: 7px;
    color: ${({ theme, isFilled }) =>
        isFilled ? theme.colors.purple_dark : theme.colors.purple
    };
`;

export const Input = styled(TextInput)`
    color: ${({ theme }) => theme.colors.white};
    width: 100%;
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    padding-left: 17px;
`;

export const Forms = styled.View<FormsProps>`
    flex-direction: row;
    border-bottom-width: 2px;
    border-color: ${({ theme, isFilled }) =>
        isFilled ? theme.colors.purple_dark : theme.colors.purple
    };
    align-items: center;
`;


export const Icon = styled(MaterialCommunityIcons) <IconProps>`
    font-size: ${RFValue(20)}px;
    margin-right: 12px;
    color: ${({ theme, isFilled }) =>
        isFilled ? theme.colors.purple_dark : theme.colors.purple
    };
`;