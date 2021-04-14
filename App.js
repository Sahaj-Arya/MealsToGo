import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components";
import { RestaurantScreens } from "./src/features/restaurants/screens/restaurants.screens";
import { theme } from "./src/infrastructure/theme";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreens />
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
