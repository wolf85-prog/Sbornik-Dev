import { Text, View, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { Link } from "expo-router";
import { Stack } from 'expo-router';
import React, { useContext } from 'react'
import { DrawerToggleButton } from "@react-navigation/drawer";
// import { Switch } from 'react-native-paper';
import { Colors } from '../../../constants/Colors';
import SettingsButton from './../../../components/ui/SettingsButton'
import { ThemeContext } from '@/context/ThemeContext';

export default function SettingsScreen() {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const {currentTheme, toggleTheme} = useContext(ThemeContext)

  return (
    <>
      <Stack.Screen options={{ headerShown: true, title: "Настройки", headerLeft: (() => <DrawerToggleButton tintColor={'#000'} />) }} />
      <View style={[styles.container,{backgroundColor: currentTheme === 'dark' ? Colors.dark : Colors.light}]} >     
        {/* <Text style={styles.text}>Настройки</Text>
        <Link href="/settings/next-page" style={{ marginTop: 16, fontSize: 18 }}>
          <Text style={{ fontWeight: "bold" }}>Go To Next Page</Text>
        </Link> */}

        <Text style={styles.title}>Смена темы</Text>
        <TouchableOpacity style={styles.button} onPress={()=>{}}>
          <Text style={styles.text}>Темная тема</Text>
          <Switch 
            value={currentTheme === 'dark'} 
            onValueChange={()=> toggleTheme(currentTheme === 'light' ? 'dark' : 'light')} 
          />
        </TouchableOpacity>

        <Text style={styles.title}>Настройка темы</Text>
        <SettingsButton 
          label='Светлая' 
          icon='lightbulb-on' 
          onPress={()=> {}} 
          isActive={false} 
        />
        <SettingsButton 
          label='Темная' 
          icon='weather-night' 
          onPress={()=> {}} 
          isActive={false} 
        />
        <SettingsButton 
          label='Системная' 
          icon='theme-light-dark' 
          onPress={()=> {}} 
          isActive={false} 
        />

      </View>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray,
    //backgroundColor: '#25292e',
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 20
  },
  text: {
    color: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
    marginVertical: 10,
    color: '#000',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    color: '#000',
  }
});