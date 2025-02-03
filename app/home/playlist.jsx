import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Playlist = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Плейлисты</Text>
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