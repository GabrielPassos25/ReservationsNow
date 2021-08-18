import 'react-native-gesture-handler'
import React from 'react';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import theme from './src/global/styles/theme';

{/* Rotas Mútuas */}
import { Login } from './src/screens/Login';
import { Register } from './src/screens/Register';
import { RequestChangePassword } from './src/screens/RequestChangePassword';
import { ChangePassword } from './src/screens/ChangePassword';

{/* Rotas Cliente */}
import { DashboardClient } from './src/screens/DashboardClient';
import { PaymentSecondary } from './src/screens/PaymentSecondary';
import { ReservaMesa } from './src/screens/ReservaMesa';
import { ClientRoutes } from './src/routes/Cliente/app.routes';
import { AdminRoutes } from './src/routes/Administrador/app.routes';


{/* Rotas Admin */}
import { DashboardAdmin } from './src/screens/DashboardAdmin';


const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });
  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer >
        {/* Navegador de Rotas Gerais*/}
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false, animationEnabled: false}} >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ChangePassword" component={ChangePassword} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="RequestChangePassword" component={RequestChangePassword} />
          <Stack.Screen name="ClientRoutes" component={ClientRoutes} />
          <Stack.Screen name="AdminRoutes" component={AdminRoutes} />
          <Stack.Screen name="DashboardClient" component={DashboardClient} />
          <Stack.Screen name="DashboardAdmin" component={DashboardAdmin} />
          <Stack.Screen name="PaymentSecondary" component={PaymentSecondary} />
          <Stack.Screen name="ReservaMesa" component={ReservaMesa} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  )
}