import React from "react";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantScreens = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar placeholder="Search" />
    </View>

    <View style={styles.list}>
      <RestaurantInfoCard />{" "}
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },

  search: {
    // flex: 0.5,
    marginTop: 40,
    padding: 10,
  },

  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "red",
  },
});
