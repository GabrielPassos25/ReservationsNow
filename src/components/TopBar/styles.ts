import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex-direction: column;
    width:100%;
    background-color: ${({ theme }) => theme.colors.primary};
    align-items: center;
    justify-content: flex-end;
`;

export const PageName = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    margin-top: ${RFValue(15)}px;
    margin-bottom: 20px;
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
`;
