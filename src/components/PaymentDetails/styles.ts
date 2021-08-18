import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
`;
export const Icon = styled.View`
    width: 121px;
    height: 115px;
    background: #FFFFFF;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    padding: 0;
`;

export const Description = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(16)}px;
    margin-top: ${RFValue(40)}px;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
`;

export const ImagePayment = styled.View`
    align-items: center;
    justify-content: center;
    margin-top: ${RFValue(40)}px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 20px;
    padding:30px;
`;