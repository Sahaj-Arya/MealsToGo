import React from "react";
import { StatusBar, SafeAreaView, View, Text, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
const SearchContainer = styled(View)`
  padding: 16px;
`;
const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: 16px;
  background-color: gray;
`;

const SearchBarr = styled(Searchbar)`
  border: 2px solid gray;
  border-radius: 33px;
`;
export const RestaurantScreens = () => (
  <SafeArea>
    <SearchContainer>
      <SearchBarr />
    </SearchContainer>

    <RestaurantListContainer>
      <RestaurantInfoCard />
    </RestaurantListContainer>
  </SafeArea>
);
