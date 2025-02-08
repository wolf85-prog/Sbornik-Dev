import { Stack } from "expo-router";
import { Drawer } from 'expo-router/drawer';
import CustomDrawerContent from '../../components/customDrawerContent';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, View } from 'react-native'
import { DrawerToggleButton } from "@react-navigation/drawer";

export default function DrawerLayout() {
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
            name="(tabs)"
            options={{
                drawerLabel: 'Главная',
                title: 'Главная',
                drawerIcon: ({size, color})=>(
                    // <Ionicons name='md-home' size={size} color={color} />
                    <Image source={require('../../assets/icons/eye.png')}  style={{ width: 25, height: 25, }} />
                )

            }}
        />

        <Drawer.Screen
            name="accords"
            options={{
                headerShown: false,
                headerTintColor: '#fff', //цвет заголовка
                headerStyle: {
                    backgroundColor: '#25292e'
                  }, //цвет фона заголовка
                drawerLabel: 'Аккорды',
                title: 'Аккорды',
                drawerIcon: ({size, color})=>(
                    <Image source={require('../../assets/icons/eye.png')} style={{ width: 25, height: 25, }} />
                )

            }}
        />

        <Drawer.Screen
            name="settings"
            options={{
                headerShown: false,
                headerTintColor: '#fff', //цвет заголовка
                headerStyle: {
                    backgroundColor: '#25292e'
                  }, //цвет фона заголовка
                drawerLabel: 'Настройки',
                title: 'Настройки',
                drawerIcon: ({size, color})=>(
                    <Image source={require('../../assets/icons/eye.png')} style={{ width: 25, height: 25, }} />
                )

            }}
        />

        <Drawer.Screen
            name="about"
            options={{
                headerShown: false,
                headerTintColor: '#fff', //цвет заголовка
                headerStyle: {
                    backgroundColor: '#25292e'
                  }, //цвет фона заголовка
                drawerLabel: 'О приложении',
                title: 'О приложении',
                drawerIcon: ({size, color})=>(
                    <Image source={require('../../assets/icons/eye.png')} style={{ width: 25, height: 25, }} />
                )

            }}
        />
        
    </Drawer>
  );
}
