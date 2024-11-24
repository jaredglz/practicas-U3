  import React from "react";
  import AntDesign from '@expo/vector-icons/AntDesign';
  import { NativeBaseProvider } from 'native-base';
  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
  import { NavigationContainer } from "@react-navigation/native";
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import CategoriasScreen from "./src/screens/CategoriasScreen";
  import CardScreen from "./src/screens/CardScreen";
  import PerfilScreens from "./src/screens/PerfilScreens";
  import LoginScreen from "./src/screens/LoginScreen";
  import Registro from "./src/Registro";
  import ConfigScreen from "./src/screens/ConfigScreen";
  import Competencias from "./src/screens/Competencias";

  const Tab = createBottomTabNavigator();

  const MainTab = () => (
    <Tab.Navigator
      initialRouteName="Login"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Categorias') {
            iconName = 'menu';
          } else if (route.name === 'Carrito') {
            iconName = 'cart-outline';
          } else if (route.name === 'Perfil') {
            iconName = 'person-circle';
          } else if  (route.name === 'Competencias') {
            return <AntDesign name="book" size={size} color={color} />;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'gray',
        tabBarInactiveTintColor: 'red',
      })}
    >
      <Tab.Screen name="Carrito" component={CardScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Categorias" component={CategoriasScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Perfil" component={PerfilScreens} options={{ headerShown: false }} />
      <Tab.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Register" component={Registro} options={{ headerShown: false }} />
      <Tab.Screen name="Config" component={ConfigScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Competencias" component={Competencias} options={{ headerShown: false }} />
    </Tab.Navigator>
  );

  export default function App() {
    return (
      <NativeBaseProvider>
        <NavigationContainer>
          <MainTab />
        </NavigationContainer>
      </NativeBaseProvider>
    );
  }
