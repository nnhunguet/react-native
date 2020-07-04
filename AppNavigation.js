import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Category from './screens/Category';
import Categories from './screens/Categories';
import Cart from './screens/Cart';
import Orders from './screens/Orders';
import Settings from './screens/Settings';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const CategoryStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="Category" 
      component={Category} 
    />
  </Stack.Navigator>
)

const CategoriesStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="Categories" 
      component={Categories}
    />
  </Stack.Navigator>
)

const OrdersStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="Orders" 
      component={Orders}
    />
  </Stack.Navigator>
)

const SettingsStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="Settings" 
      component={Settings}
    />
  </Stack.Navigator>
)

const CartStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="Cart" 
      component={Cart}
    />
  </Stack.Navigator>
)

function AppContainer() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator
        screenOptions={{ 
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',     
        }}
      >
        <Stack.Screen 
          name="Categories" 
          component={Categories} 
          options={{ 
            title: 'Home',     
          }}
        />
        <Stack.Screen 
          name="Category" 
          component={Category} 
          options={
            ( {route} ) => ({ title: route.params.categoryName })
          }
        />
        <Stack.Screen 
          name="Cart" 
          component={Cart} 
          // options={
          //   ( {route} ) => ({ title: route.params.categoryName })
          // }
        />
        <Stack.Screen 
          name="Orders" 
          component={Orders} 
          // options={
          //   ( {route} ) => ({ title: route.params.categoryName })
          // }
        />
        <Stack.Screen 
          name="Settings" 
          component={Settings} 
          // options={
          //   ( {route} ) => ({ title: route.params.categoryName })
          // }
        />
      </Stack.Navigator> */}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch(route.name) {
              case 'Categories':
                iconName = focused ? 'ios-planet' : 'ios-boat';
                break;
              case 'Category':
                iconName = focused ? 'ios-list-box' : 'ios-list';
                break;
              case 'Orders':
                iconName = focused ? 'ios-add-circle-outline' : 'ios-cart';
                break;
              case 'Cart':
                iconName = focused ? 'ios-analytics' : 'ios-archive';
                break;
              case 'Settings':
                iconName = focused ? 'ios-hammer' : 'ios-aperture';
                break;
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={32} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen 
          name="Categories" 
          component={CategoriesStackScreen} 
          // options= {{
          //   tabBarIcon: 
          // }}
        />
        <Tab.Screen name="Category" component={CategoryStackScreen} />
        <Tab.Screen name="Orders" component={OrdersStackScreen} />
        <Tab.Screen name="Cart" component={CartStackScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppContainer;

