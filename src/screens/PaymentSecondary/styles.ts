import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const BackButton = styled(TouchableOpacity)`
    margin-top: ${RFValue(10)}px;
    flex-direction: row;
    padding: 0px 20px;
    align-items: center;
`;

export const Icon = styled(Feather)``;

export const BackText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.white};
`;

export const StatusBarAndroid = styled.StatusBar.attrs({
    backgroundColor: '#1F3955',
})`
`;

export const StatusBarIOS = styled.View`
    height: ${getStatusBarHeight() + 10}px ;
`;

export const IconContainer = styled.View`
    align-items: center;
    margin-top: ${RFValue(40)}px;
`;

export const ButtonContainer = styled.View`
    align-items: center;
    margin-bottom: ${RFValue(20)}px;
`