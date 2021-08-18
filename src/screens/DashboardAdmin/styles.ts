import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Dimensions } from "react-native";

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const TitleChart = styled.Text`
    text-align: center;
    margin-top: ${RFValue(10)}px;
    margin-left: ${RFValue(10)}px;
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.gray_dark};
`;

export const ContainerChart = styled.SafeAreaView`
    align-items: center;
    flex-direction: row;
`;

export const StatusBarAndroid = styled.StatusBar.attrs({
    backgroundColor: "#1F3955",
})``;

export const ButtonsContainer = styled.View`
    margin-top: ${RFValue(10)}px;   
    width: ${Dimensions.get("screen").width}px;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.pink};
    flex-direction: row;
`;