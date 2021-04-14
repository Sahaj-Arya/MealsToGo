import React from "react";
import { Card } from "react-native-paper";
import { StyleSheet, Text, View, Image } from "react-native";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled(View)`
  flex-direction: row;
  padding: ${(props) => props.theme.space[2]};
  align-items: center;
`;

const Open = styled(SvgXml)`
  flex-direction: row;
  align-items: center;
`;
const Close = styled(Text)`
  flex-direction: row;
  align-items: center;
  color: red;
  padding-right: 16px;
`;

const Images = styled(View)`
  padding-left: 16px;
`;

const Section = styled(View)`
  flex-direction: row;
`;

const SectionEnd = styled(View)`
  flex-direction: row;
  flex: 1;
  justify-content: flex-end;
`;
const IsClosed = styled(View)`
  flex-direction: row;

  justify-content: flex-end;
`;
const RestaurantCardCover = styled(Card.Cover)`
  background-color: white;
  padding: 16px;
`;
const Address = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.caption};
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Title = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.body};
  font-family: ${(props) => props.theme.fonts.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://imgmediagumlet.lbb.in/media/2019/02/5c667fd541f54468e91d2747_1550221269847.jpg?fm=webp&w=480&h=480&dpr=1",
    ],
    address = "Raddison Blu Dwarka",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml width={20} height={20} xml={star} />
            ))}
          </Rating>
          <SectionEnd>
            <IsClosed>
              {isClosedTemporarily && <Close> Closed </Close>}
            </IsClosed>

            {isOpenNow && <Open width={20} height={20} xml={open} />}
            <Images>
              <Image style={{ width: 20, height: 18 }} source={{ uri: icon }} />
            </Images>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
