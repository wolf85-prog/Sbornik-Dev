import { Stack } from "expo-router";
import { Drawer } from 'expo-router/drawer';
import CustomDrawerContent from '../components/customDrawerContent';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, View } from 'react-native'

export default function RootLayout() {
  return (
    <Drawer
        screenOptions={{
            headerShown: false,
            drawerLabelStyle: {
                marginLeft: 5
            },
            swipeEdgeWidth : 0,

            drawerContentStyle: {
                backgroundColor: '#000',
              },
            drawerStyle: {
                backgroundColor: '#000',
              },

            drawerActiveBackgroundColor: 'gray',
            drawerActiveTintColor: 'white',
            drawerInactiveTintColor: 'white'
        }}
        drawerContent={CustomDrawerContent}
    >

        <Drawer.Screen
            name="home"
            options={{
                drawerLabel: 'Главная',
                title: 'Главная',
                drawerIcon: ({size, color})=>(
                    // <Ionicons name='md-home' size={size} color={color} />
                    <Image source={require('../assets/icons/eye.png')} color={color}  style={{ width: 25, height: 25, }} />
                )

            }}
        />
        <Drawer.Screen
            name="index"
            options={{
                drawerLabel: 'Список песен',
                title: 'Список песен',
                drawerIcon: ({size, color})=>(
                    // <Ionicons name='md-home' size={size} color={color} />
                    <Image source={require('../assets/icons/eye.png')} color={color}  style={{ width: 25, height: 25, }} />
                )

            }}
        />
        <Drawer.Screen
            name="about"
            options={{
                headerShown: true,
                headerTintColor: '#fff', //цвет заголовка
                headerStyle: {
                    backgroundColor: '#25292e'
                  }, //цвет фона заголовка
                drawerLabel: 'О приложении',
                title: 'О приложении',
                drawerIcon: ({size, color})=>(
                    <Image source={require('../assets/icons/eye.png')} color={color}  style={{ width: 25, height: 25, }} />
                )

            }}
        />
        
    </Drawer>
  );
}
