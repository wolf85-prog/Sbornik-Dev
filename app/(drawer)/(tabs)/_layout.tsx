import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { DrawerToggleButton } from "@react-navigation/drawer";

export default function TabLayout() {
    return (
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: '#ffd33d',
            headerStyle: {
              backgroundColor: '#25292e',
            },
            headerShadowVisible: true,
            headerTintColor: '#fff',
            tabBarStyle: {
              backgroundColor: '#25292e',
            },
            headerShown: false
          }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: 'Главная',
            // headerShown: true,
            // headerLeft: (() => <DrawerToggleButton tintColor={'#fff'} />),
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
            ),
          }}
        />
        <Tabs.Screen
          name="songs"
          options={{
            title: 'Песни',
            // headerShown: false,
            // headerLeft: (() => <DrawerToggleButton tintColor={'#fff'} />),
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
            ),
          }}
        />
        <Tabs.Screen
          name="playlist"
          options={{
            title: 'Плейлисты',
            // headerShown: true,
            // headerLeft: (() => <DrawerToggleButton tintColor={'#fff'} />),
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
            ),
          }}
        />
      </Tabs>
    );
}