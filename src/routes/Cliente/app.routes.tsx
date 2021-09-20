import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  Foundation,
  Feather,
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";

import { useTheme } from "styled-components";

import { DashboardClient } from "../../screens/DashboardClient";
import { ListaDeRestaurantesClient } from "../../screens/ListaDeRestaurantesClient";
import { ReservaMesa } from "../../screens/ReservaMesa";
import { MenuCardapio } from "../../screens/MenuCardapio";
import { HistoricoReservasCliente } from "../../screens/HistoricoReservasCliente";
import { ComandaCliente } from "../../screens/ComandaCliente";
import { PaymentChoice } from "../../screens/PaymentChoice";
import { RestauranteContextProvider } from "../../components/Contexts/RestauranteContext";

const { Navigator, Screen } = createBottomTabNavigator();

const ReservaStack = createStackNavigator();

function ReservaStackScreen() {
  return (
    <ReservaStack.Navigator
      initialRouteName={"Initial"}
      screenOptions={{ headerShown: false, animationEnabled: false }}
    >
      <ReservaStack.Screen name="Initial" component={DashboardClient} />
      <ReservaStack.Screen name="Details" component={ReservaMesa} />
    </ReservaStack.Navigator>
  );
}

export function ClientRoutes() {
  const theme = useTheme();
  return (
    <Navigator
      tabBarOptions={{
        tabStyle: { paddingBottom: Platform.OS === "ios" ? 0 : 5 },
        activeTintColor: theme.colors.purple,
        inactiveTintColor: theme.colors.white,
        labelPosition: "below-icon",
        style: {
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
          height: Platform.OS === "ios" ? 88 : 60,
          backgroundColor: theme.colors.primary,
          justifyContent: "center",
          borderTopColor: theme.colors.primary_light2,
        },
      }}
    >
      <Screen
        name="Início"
        component={ListaDeRestaurantesClient}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          tabBarVisible: false,
        }}
      />
      <Screen
        name="Cardápio"
        component={MenuCardapio}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="menu-book" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Comanda"
        component={ComandaCliente}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="file-text" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Histórico"
        component={HistoricoReservasCliente}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Foundation name="clipboard-notes" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Reservas"
        component={ReservaMesa}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="table-chair"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Navigator>
  );
}
