import { Stack } from "expo-router";
import { Drawer } from 'expo-router/drawer';
import CustomDrawerContent from '../components/customDrawerContent';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'react-native'

export default function RootLayout() {
  return (
    <Drawer
        screenOptions={{
            headerShown: true,
            drawerLabelStyle: {
                marginLeft: 5
            },
            // drawerActiveBackgroundColor: 'gray',
            // drawerActiveTintColor: 'white',
            // drawerInactiveTintColor: 'white'
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
                drawerLabel: 'О приложении',
                title: 'About',
                drawerIcon: ({size, color})=>(
                    <Image source={require('../assets/icons/eye.png')} color={color}  style={{ width: 25, height: 25, }} />
                )

            }}
        />
        
    </Drawer>
  );
}
