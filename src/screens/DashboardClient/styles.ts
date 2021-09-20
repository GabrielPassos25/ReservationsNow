import { RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
const width = ` ${Dimensions.get("window").width}px`; //full width
export const Container = styled.View`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;
export const HeaderArea = styled.View`
  flex-direction: column;
  width: ${width};
  padding-left: ${RFValue(25)}px;
  padding-bottom: 5px;
  border-bottom-width: 1px;
  border-bottom-color: #d9d9d9;
`;
export const HeaderTitle = styled.Text`
  font-size: ${RFValue(19)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  line-height: 30px;
  margin-top: 15px;
  text-align: left;

  color: ${({ theme }) => theme.colors.primary};
`;
export const HeaderSubTitle = styled.Text`
  width: 225px;
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  line-height: 30px;

  color: #757575;
`;

export const TitlePreview = styled.Text`
  width: 225px;
  font-size: ${RFValue(15)}px;
  margin-bottom: 15px;
  font-family: ${({ theme }) => theme.fonts.medium};
  line-height: 30px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const PreviewAreaPratos = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;

  width: 100%;
  margin-bottom: ${RFValue(25)}px;
  padding-left: ${RFValue(25)}px;
`;
export const SearchArea = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 20px;
  padding: 0 15px;
`;
export const ViewRow = styled.View`
  flex-direction: row;

  margin-bottom: 35px;
`;

export const OptionButton = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;
export const Button = styled.TouchableOpacity`
  width: 121px;
  height: 115px;

  background: #ffffff;
  border-radius: 15px;
`;

export const SubtitleButton = styled.Text`
  font-size: ${RFValue(11)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  line-height: 30px;

  margin-top: 3px;

  color: #ffffff;
`;

export const StatusBarAndroid = styled.StatusBar.attrs({
  backgroundColor: "#1F3955",
})``;
