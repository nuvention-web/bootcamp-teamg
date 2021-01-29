import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { BottomNavigation, DefaultTheme, PaperProvider } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 4,
  colors: {
    ...DefaultTheme.colors,
    text: '#23022E',
    primary: '#573280',
    accent: '#23022E',
  },
};

const RestaurantsRoute = () => <Text>Restaurants</Text>;

const CartRoute = () => <Text>Cart</Text>;

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'restaurants', title: 'Restaurants', icon: 'silverware-fork-knife' },
    { key: 'cart', title: 'Cart', icon: 'cart' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    restaurants: RestaurantsRoute,
    cart: CartRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <View>
       <MyComponent/>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
