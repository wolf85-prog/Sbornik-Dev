import { Text, View, StyleSheet } from 'react-native';
import { Link } from "expo-router";
import { Stack } from 'expo-router';
import React from 'react'
import { DrawerToggleButton } from "@react-navigation/drawer";

export default function CategoriesScreen() {
  return (
    <View style={styles.container} >
      <Stack.Screen options={{ headerShown: true, title: "Категории песен", headerLeft: (() => <DrawerToggleButton tintColor={'#000'} />) }} />
      <Text style={styles.text}>Категории песен</Text>
      <Link href="/(drawer)/categories/next-page" style={{ marginTop: 16, fontSize: 18 }}>
        <Text style={{ fontWeight: "bold" }}>Go To Next Page</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});