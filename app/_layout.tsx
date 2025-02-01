import { Stack } from "expo-router";
import { Drawer } from 'expo-router/drawer';
import CustomDrawerContent from '../components/customDrawerContent';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function RootLayout() {
  return (
    <Drawer
        screenOptions={{
            drawerLabelStyle: {
                marginLeft: -20
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
                drawerLabel: 'Home',
                title: 'Home',
                drawerIcon: ({size, color})=>(
                    <Ionicons name="home-filled" size={size} color={color} />
                )

            }}
        />
        {/* <Drawer.Screen
            name="index"
            options={{
                drawerLabel: 'About',
                title: 'About',
                drawerIcon: ({size, color})=>(
                    <Ionicons name="information" size={32} color="green" />
                )

            }}
        /> */}
        
    </Drawer>
  );
}
