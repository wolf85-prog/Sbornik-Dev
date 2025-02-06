import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const Playlist = () => {
  return (
    <View style={styles.container}>
      <Link href="/list/1" style={styles.text}>Плейлисты</Link>
    </View>
  )
}

export default Playlist

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