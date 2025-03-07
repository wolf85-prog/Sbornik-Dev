import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';
import { images } from "../constants";

export default function CustomDrawerContent(props:any) {

    const {bottom} = useSafeAreaInsets();
    const navigation = useNavigation();

    const closeDrawer = ()=>{
        navigation.dispatch(DrawerActions.closeDrawer())
    }
  return (
    <View style={{flex: 1, padding: 0}}>
      <DrawerContentScrollView {...props} scrollEnabled={false}>
        <View>
            <Image
              style={{width: 350, height: 205}}
              source={images.header}
              resizeMode="cover"
            />
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <Pressable onPress={closeDrawer} style={{padding: 20, paddingBottom: bottom+10}}>
        <Text>Выход</Text>
      </Pressable>
    </View>
  )
}