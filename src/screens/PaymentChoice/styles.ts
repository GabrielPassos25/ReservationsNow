import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.primary}
`;

export const StatusBarAndroid = styled.StatusBar.attrs({
    backgroundColor: '#1F3955',
})``;

export const StatusBarIOS = styled.View`
    height: ${getStatusBarHeight() + 10}px ;
`;

export const BackButton = styled(TouchableOpacity)`
    margin-top: ${RFValue(10)}px;
    flex-direction: row;
    padding: 0px 20px;
    align-items: center;
`;

export const BackText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.white};
`;

export const IconContainer = styled.View`
    align-items: center;
    margin-top: ${RFValue(40)}px;
`;

export const PaymentText = styled.Text`
    align-self: center;
    color: ${({ theme }) => theme.colors.white};
    margin-top: ${RFValue(25)}px;
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.regular}; 
`;

export const ButtonsContainer = styled.View`
    width: 100%;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    margin-top: ${RFValue(50)}px;
`;

export const ChoiceContainer = styled.View`
    align-items: center;
`;

export const PixButtonContainer = styled(TouchableOpacity)`
    background-color: ${({ theme }) => theme.colors.white} 
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    width: 120px;
    height: 120px;
`;

export const ButtonsText = styled.Text`
    color: ${({ theme }) => theme.colors.white} 
    margin-top: ${RFValue(10)}px;
    font-size: ${RFValue(13)}px;
    font-family: ${({ theme }) => theme.fonts.medium}; 
`;

export const WaiterButtonContainer = styled(TouchableOpacity)`
    background-color: ${({ theme }) => theme.colors.white} 
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 120px;
`;