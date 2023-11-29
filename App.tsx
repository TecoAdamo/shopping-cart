import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Screens/Home';
import Cart from './src/Screens/Cart'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}

      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="Cart"
          component={Cart}

          options={{
            cardStyle: { backgroundColor: "#343541" },
            headerStyle: { backgroundColor: "#343541" },
            headerTransparent: true,
            headerShadowVisible: false,

          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
