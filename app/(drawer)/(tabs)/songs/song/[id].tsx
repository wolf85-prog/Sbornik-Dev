import React, {useEffect, useRef} from 'react';
import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Stack } from "expo-router";
import PagerView from 'react-native-pager-view';

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


export default function DetailsScreen() {
  const { id } = useLocalSearchParams();

  //let sliderRef = useRef();
  let sliderRef: any

  useEffect(()=> {
    console.log(id)
    let number: Number
    number = Number(id) - 1
    sliderRef?.goToSlide(number)
  }, [id])

  const keyExtractor = (item: Item) => item.title;

  const renderItem = ({item}: {item: Item}) => {
    return (
      <View
        style={[
          styles.slide,
          {
            backgroundColor: item.bg,
          },
        ]}>
        <Text style={styles.title}>{item.title  + ' ' + id}</Text>
        {/* <Image source={item.image} style={styles.image} /> */}
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>

      <Stack.Screen options={{ headerShown: true, title: "Details" }} />
      {/* <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        data={data}
        ref={(ref) => (sliderRef = ref)}
      /> */}

      <PagerView style={styles.container} initialPage={0}>
        <View style={styles.page} key="1">
          <Text>First page</Text>
          <Text>Swipe ➡️</Text>
        </View>
        <View style={styles.page} key="2">
          <Text>Second page</Text>
        </View>
        <View style={styles.page} key="3">
          <Text>Third page</Text>
        </View>
      </PagerView>
    </View>
  );
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