import React from "react";
import { SafeArea } from "../../components/utility/safe-area.component";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetailScreen } from "./restaurant-detail-screen";
import { SafeAreaView } from "react-native";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />

      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};