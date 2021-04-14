import React from "react";
import { Card } from "react-native-paper";
import { StyleSheet, Text } from "react-native";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
  background-color: "white";
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: "white";
  padding: 20p;
`;

const Title = styled(Text)`
  text-align: center;
  color: ${(props) => props.theme.colors.ui.primary};
  padding: 16px;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://imgmediagumlet.lbb.in/media/2019/02/5c667fd541f54468e91d2747_1550221269847.jpg?fm=webp&w=480&h=480&dpr=1",
    ],
    address = "a123",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <Card elevation={5}>
      <Card.Cover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </Card>
  );
};
