import React from "react";
import { Card, Text } from "react-native-paper";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";

const Title = styled.Text`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
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
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },

  cover: {
    backgroundColor: "white",
    padding: 20,
  },
  // title: {
  //   padding: 20,
  // },
});
