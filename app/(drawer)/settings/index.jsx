import { Text, View, StyleSheet, TouchableOpacity, Switch, ScrollView } from 'react-native';
import { Link } from "expo-router";
import { Stack } from 'expo-router';
import React, { useContext } from 'react'
import { DrawerToggleButton } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { Switch } from 'react-native-paper';
import { COLORS } from '../../../constants/colors';
import SettingsButton from '../../../components/ui/SettingsButton'
import { ThemeContext } from '@/context/ThemeContext';
import { SafeAreaView } from 'react-native';

const SECTIONS = [
  {header: 'Внешний вид', items: [
    {label: 'Темная тема', id: '1', type: 'toggle', icon: 'gesture-double-tap', color: 'dark'},
    {label: 'Язык', id: '2', type: 'link', icon: 'gesture-double-tap', color: 'red'},
    {label: 'Цвет темы', id: '3', type: 'link', icon: 'gentoo', color: 'blue'},
    {label: 'Размер шрифта', id: '4', type: 'link', icon: 'gitlab', color: 'green'},
    {label: 'Стиль шрифта', id: '5', type: 'link', icon: 'go-kart', color: 'yellow'},
  ]}, 
  {header: 'О приложении', items: [
    {label: 'Майкопский молодежный сборник', id: '1', type: 'link', icon: 'google-circles', color: 'red'},
    {label: 'Страница приложения', id: '2', type: 'link', icon: 'hand-extended', color: 'red'}
  ]}, 
  {header: 'Разработчики', items: [
    {label: 'Охман Виталий', id: '1', type: 'link', icon: 'headset', color: 'red'},
    {label: 'Охман Алла', id: '2', type: 'link', icon: 'heart-off', color: 'red'},
  ]}, 
  {header: 'Написать нам', items: [
    {label: 'Электронная почта', id: '1', type: 'link', icon: 'hexagon-multiple', color: 'red'}
  ]}, 
];

export default function SettingsScreen() {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const {currentTheme, toggleTheme} = useContext(ThemeContext)

  return (
    <>
      <Stack.Screen options={{ 
        headerShown: true, 
        title: "Настройки",  
        headerLeft: (() => <DrawerToggleButton tintColor={'#fff'} />), 
        headerStyle: {backgroundColor: currentTheme === 'dark' ? 'dark' : '#26489a'},  
        headerTintColor: 'white',
        }} 
      />
      
      <SafeAreaView style={[styles.container,{backgroundColor: currentTheme === 'dark' ? COLORS.dark : COLORS.light}]} >     
        <ScrollView>

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

          {SECTIONS.map((item)=> (
            <View style={styles.section} key={item.header}>
              <Text style={styles.sectionHeader}>{item.header}</Text>

              {item.items.map(({id, label, icon, type, color})=> (
                <TouchableOpacity
                  key={id}
                  onPress={()=>{
                    //press
                  }}
                >
                  <View style={styles.row}>
                    <View style={[styles.rowIcon, {backgroundColor: color}]}>
                      <MaterialCommunityIcons
                        name={icon}
                        size={18}
                        color='#fff' 
                      />   
                    </View> 
                    <Text style={styles.rowLabel}>{label}</Text>

                    <View style={{flex: 1}} />

                    {type === 'toggle' && (
                      <Switch 
                        value={currentTheme === 'dark'} 
                        onValueChange={()=> toggleTheme(currentTheme === 'light' ? 'dark' : 'light')} 
                      />
                    )}

                    {type === 'link' && (
                      <MaterialCommunityIcons
                        name='chevron-right'
                        size={22}
                        color='#0c0c0c' 
                      /> 
                    )}
                  </View> 
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gray,
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

  section: {
    //paddingHorizontal: 14,
  },
  sectionHeader: {
    paddingVertical: 12,
    fontSize: 14,
    fontWeight: '600',
    color: '#9e9e9e',
    textTransform: 'uppercase',
    letterSpacing: 1.1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 50,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 15,
    marginBottom: 12,
    paddingHorizontal: 12,
  },
  rowLabel: {
    fontSize: 17,
    color: '#070707'
  },
  rowIcon: {
    width: 32,
    height: 32,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  }
});