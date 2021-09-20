import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    height: 150px;
    width: 150px;
    border-radius: 10px;
    margin-horizontal: 10px;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.colors.gray_light};
    flex: 1;
    elevation: 10;
    box-shadow: 2px 5px 2px rgba(177, 177, 177, 0.7);
`;

export const RestauranteImage = styled.Image`
    height: 100px;
    width: 100px;
`;

export const RestauranteNameContainer = styled.View`
    background-color: ${({theme}) => theme.colors.primary};
    width: 100%;
    flex: 1;
    align-items: center;
    justify-content: center;
    border-bottom-start-radius: 10px;
    border-bottom-end-radius: 10px;
`;
    
    
export const RestauranteName = styled.Text`
    flex-shrink: 1;
    text-align: center;
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.white}
`;