import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TouchableOpacity)`
    width: 65%;
    height: ${RFValue(40)}px;
    margin-top: ${RFValue(40)}px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 38px;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.purple_dark};
`;
