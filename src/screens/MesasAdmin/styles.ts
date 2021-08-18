import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
    background: ${({ theme }) => theme.colors.gray_light};
`;

export const StatusBarAndroid = styled.StatusBar.attrs({
    backgroundColor: '#1F3955',
})`
`;

export const StatusBarIOS = styled.View`
    height: ${getStatusBarHeight() + 10}px ;
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const ButtonsContainer = styled.View`
    width: ${Dimensions.get("screen").width}px;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.gray};
    flex-direction: row;
`;

export const Title = styled.Text`
    width: 100%;
    padding: 30px 0 15px 20px;
    font-size: ${RFValue(17)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.purple_dark}; 
`;

export const AreaFlatList = styled.View`
    width: 100%;
`;