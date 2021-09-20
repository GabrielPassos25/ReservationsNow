import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    background: ${({ theme }) => theme.colors.gray_light};
`;

export const AreaCenter = styled.View`
    width: 100%;
`;
export const Title = styled.Text`
    width: 100%;
    font-size: ${RFValue(16)}px;
    margin-left: ${RFValue(5)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.purple_dark}; 

`;
export const AreaFlatList = styled.View`
    width: 100%;
`;

export const AreaSelector = styled.View`
    padding: 10px; 
`;