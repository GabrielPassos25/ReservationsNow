import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    width:100%;
    background-color: ${({ theme }) => theme.colors.primary};
    elevation: 7;
`;

export const HomeContainer = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: ${RFValue(10)}px;
`;