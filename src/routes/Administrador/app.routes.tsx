import React from 'react';
import { useTheme } from 'styled-components';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, MaterialIcons, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { DashboardAdmin } from '../../screens/DashboardAdmin';
import { CardapioAdmin } from '../../screens/CardapioAdmin';
import { MesasAdmin } from '../../screens/MesasAdmin';
import { ComandaGeralAdmin } from '../../screens/ComandaGeralAdmin';
import { ComandaDescAdmin } from '../../screens/ComandaDescAdmin';

const { Navigator, Screen } = createBottomTabNavigator();

const ComandaStack = createStackNavigator();

function ComandaStackScreen() {
  return (
    <ComandaStack.Navigator
      initialRouteName={"Initial"}
      screenOptions={{ headerShown: false, animationEnabled: false }}
    >
      <ComandaStack.Screen
        name="Initial"
        component={ComandaGeralAdmin}
      />
      <ComandaStack.Screen name="Details" component={ComandaDescAdmin} />
    </ComandaStack.Navigator>
  );
}


export function AdminRoutes() {
    const theme = useTheme();
    return (
        <Navigator tabBarOptions={{keyboardHidesTabBar: true, tabStyle: { paddingBottom: Platform.OS === 'ios' ? 0 : 5 }, activeTintColor: theme.colors.purple, inactiveTintColor: theme.colors.white, labelPosition: 'below-icon', style: { paddingVertical: Platform.OS === 'ios' ? 20 : 0, height: Platform.OS === 'ios' ? 88 : 60, backgroundColor: theme.colors.primary, justifyContent: 'center', borderTopColor: theme.colors.primary_light2 } }}>
            <Screen
                name="Início"
                component={DashboardAdmin}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ))
                    
                }}
            />
            <Screen
                name="Comanda"
                component={ComandaStackScreen}
                options={{
                    unmountOnBlur: true,
                    tabBarIcon: (({ size, color }) => (
                        <Feather name="file-text" size={size} color={color} />
                    ))
                }}
            />
            <Screen
                name="Mesas"
                component={MesasAdmin}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialCommunityIcons name="table-chair" size={size} color={color} />
                    ))
                }}
            />
        </Navigator>
    );
}