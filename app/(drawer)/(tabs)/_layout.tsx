import { Tabs } from 'expo-router';
import {Ionicons, MaterialIcons, Feather} from '@expo/vector-icons';
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
              // <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
              <MaterialIcons name="sort-by-alpha" size={24} color={color} />
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
              <MaterialIcons name="playlist-play" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="favorites"
          options={{
            title: 'Избранное',
            // headerShown: true,
            // headerLeft: (() => <DrawerToggleButton tintColor={'#fff'} />),
            tabBarIcon: ({ color, focused }) => (
              <Feather name="heart" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="notes"
          options={{
            title: 'Заметки',
            // headerShown: true,
            // headerLeft: (() => <DrawerToggleButton tintColor={'#fff'} />),
            tabBarIcon: ({ color, focused }) => (
              <MaterialIcons name="event-note" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    );
}