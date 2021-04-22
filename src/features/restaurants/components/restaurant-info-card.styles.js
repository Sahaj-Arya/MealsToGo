import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import { View, Image, Text } from "react-native";
export const RestaurantCard = styled(Card)`
  background-color: white;
  margin-bottom: ${(props) => props.theme.space[3]};
`;

export const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const Rating = styled(View)`
  flex-direction: row;
  padding: ${(props) => props.theme.space[2]};
  align-items: center;
`;

export const Icon = styled(Image)`
  width: 20px;
  height: 18px;
`;
export const RestaurantCardCover = styled(Card.Cover)`
  background-color: white;
  padding: 16px;
`;
export const Section = styled(View)`
  flex-direction: row;
`;

export const SectionEnd = styled(View)`
  flex-direction: row;
  flex: 1;
  justify-content: flex-end;
`;
export const Address = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.caption};
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.ui.primary};
`;
export const Open = styled(SvgXml)`
  flex-direction: row;
  align-items: center;
`;
export const Close = styled(Text)`
  flex-direction: row;
  align-items: center;
  color: red;
  padding-left: 16px;
`;

export const Images = styled(View)`
  padding-left: 16px;
`;

export const IsClosed = styled(View)`
  flex-direction: row;

  justify-content: flex-end;
`;
