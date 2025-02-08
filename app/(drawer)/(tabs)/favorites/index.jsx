import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'
import { Stack } from 'expo-router';
import { DrawerToggleButton } from "@react-navigation/drawer";

const Favorites = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: true, title: "Избранное", headerLeft: (() => <DrawerToggleButton tintColor={'#000'} />), }} />
      <Link href="/list/1" style={styles.text}>Избранное</Link>
      <Link href={"/playlist/next-page"} style={{ marginTop: 16, fontSize: 18 }}>
        <Text style={{ fontWeight: "bold" }}>Go To Next Page</Text>
      </Link>
    </View>
  )
}

export default Favorites

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
})