import { Stack } from "expo-router";
import { Drawer } from 'expo-router/drawer';
import CustomDrawerContent from '../../components/customDrawerContent';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, View } from 'react-native'
import { DrawerToggleButton } from "@react-navigation/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
        <Drawer
            screenOptions={{
                headerShown: false,
                drawerLabelStyle: {
                    marginLeft: 5
                },
                swipeEdgeWidth : 0,

                drawerContentStyle: {
                    backgroundColor: '#f3f3f3',
                },
                drawerStyle: {
                    backgroundColor: '#f3f3f3',
                },

                drawerActiveBackgroundColor: 'gray',
                drawerActiveTintColor: 'black',
                drawerInactiveTintColor: 'black'
            }}
            drawerContent={CustomDrawerContent}
        >

            <Drawer.Screen
                name="(tabs)"
                options={{
                    drawerLabel: 'Список песен',
                    title: 'Список песен',
                    drawerIcon: ({size, color})=>(
                        <Ionicons name='home-outline' size={size} color={color} />
                        //<Image source={require('../../assets/icons/eye.png')}  style={{ width: 25, height: 25, }} />
                    )

                }}
            />

            {/* <Drawer.Screen
                name="(tabs)/songs"
                options={{
                    drawerLabel: 'Алфавитный список',
                    title: 'Алфавитный список',
                    drawerIcon: ({size, color})=>(
                        // <Ionicons name='md-home' size={size} color={color} />
                        <Image source={require('../../assets/icons/eye.png')}  style={{ width: 25, height: 25, }} />
                    )

                }}
            /> */}

            <Drawer.Screen
                name="categories"
                options={{
                    headerShown: false,
                    headerTintColor: '#fff', //цвет заголовка
                    headerStyle: {
                        backgroundColor: '#25292e'
                    }, //цвет фона заголовка
                    drawerLabel: 'Категории песен',
                    title: 'Категории песен',
                    drawerIcon: ({size, color})=>(
                        <Ionicons name='list' size={size} color={color} />
                        //<Image source={require('../../assets/icons/eye.png')} style={{ width: 25, height: 25, }} />
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
                        //<Image source={require('../../assets/icons/eye.png')} style={{ width: 25, height: 25, }} />
                        <Ionicons name='musical-note-outline' size={size} color={color}/>
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
                        //<Image source={require('../../assets/icons/eye.png')} style={{ width: 25, height: 25, }} />
                        <Ionicons name='settings-outline' size={size} color={color}/>
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
                        //<Image source={require('../../assets/icons/eye.png')} style={{ width: 25, height: 25, }} />
                        <Ionicons name='information-circle-outline' size={size} color={color}/>
                    )

                }}
            />
            
        </Drawer> 
    </GestureHandlerRootView>
    
  );
}
