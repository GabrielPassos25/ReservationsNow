import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    background: ${({ theme }) => theme.colors.gray_light};
`;

export const AreaCenter = styled.View`
    width: 100%;
    padding: 30px 15px; 
`;
export const Title = styled.Text`
    width: 100%;
    font-size: ${RFValue(17)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.purple_dark}; 

`;
export const AreaFlatList = styled.View`
    width: 100%;
    margin-top: 35px;
`;
