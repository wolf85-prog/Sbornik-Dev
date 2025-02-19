import React from 'react';
import { Stack } from "expo-router";
import { useState, useEffect } from 'react'
import { useMemo } from 'react';
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
//import PagerView from "react-native-pager-view";
import AppIntroSlider from 'react-native-app-intro-slider';

const data = [
  {
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    //image: require('../../assets/1.jpg'),
    bg: '#59b2ab',
  },
  {
    title: 'Title 2',
    text: 'Other cool stuff',
    //image: require('../../assets/2.jpg'),
    bg: '#febe29',
  },
  {
    title: 'Rocket guy',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    //image: require('../../assets/3.jpg'),
    bg: '#22bcb5',
  },
];

type Item = typeof data[0];

export default class Details extends React.Component {
  _renderItem = ({item}: {item: Item}) => {
    return (
      <View
        style={[
          styles.slide,
          {
            backgroundColor: item.bg,
          },
        ]}>
        <Text style={styles.title}>{item.title}</Text>
        {/* <Image source={item.image} style={styles.image} /> */}
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  _keyExtractor = (item: Item) => item.title;

  render() {
    return (
      <View style={styles.container}>
        {/* <StatusBar translucent backgroundColor="transparent" /> */}
        <Stack.Screen options={{ headerShown: true, title: "Details" }} />
        <AppIntroSlider
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          data={data}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    page: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    slide: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'blue',
    },
    image: {
      width: 320,
      height: 320,
      marginVertical: 32,
    },
    text: {
      color: 'rgba(255, 255, 255, 0.8)',
      textAlign: 'center',
    },
    title: {
      fontSize: 22,
      color: 'white',
      textAlign: 'center',
    },
});