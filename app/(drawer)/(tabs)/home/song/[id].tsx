import React, {useEffect, useRef, useState, useMemo} from 'react';
import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';
//import AppIntroSlider from 'react-native-app-intro-slider';
//import PagerView from 'react-native-pager-view';
// import { usePagerView } from 'react-native-pager-view';
import { Stack } from "expo-router";
import Card from '../../../../../components/ui/Card';

import songsData from './../../../../../data/songsData.js';

//import { SQLiteProvider, useSQLiteContext } from "expo-sqlite";
import {
  Provider,
} from "react-native-paper";
import { ScrollView } from 'react-native-gesture-handler';
// const { AnimatedPagerView, ref, ...rest } = usePagerView({ pagesAmount: 10 });


export default function DetailsScreen() {
  
  const { id } = useLocalSearchParams(); 



  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: true, title: `№ ${id}` }} />

      <Provider>
        {/* <SQLiteProvider databaseName="sbornik.db" assetSource={{ assetId: require('./../../../../../assets/sbornik.db') }}> */}
          <Content />
        {/* </SQLiteProvider> */}
      </Provider>
    </View>
  );
}

export function Content() {
  //const db = useSQLiteContext();
  
  const [songs, setSongs] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);

  let sliderRef: any

  // useEffect(()=> {
  //   console.log(id)
  //   let number: Number
  //   number = Number(id) - 1
  //   console.log("number: ", number)
  //   sliderRef?.goToSlide(number)
  // }, [id])

  useEffect(() => {
    setIsLoading(true);

    const fetch = (async()=> {

      // await db.withTransactionAsync(async () => {
      //   const allRows = await db.getAllAsync('SELECT * FROM songs');
      //   const songs = allRows.map((row: any) => ({
      //     uid: row._id,
      //     name: row.name,
      //     text: row.song,
      //     number: row.number,
      //   }));

      //   setSongs(songs);
      // });

      setSongs(songsData);

      setIsLoading(false);
    })

    fetch()
  }, []);
  
  // type Item = typeof songs[0];

  // const keyExtractor = (item: Item) => item.name;

  // const renderItem = ({item}: {item: Item}) => {
  //   return (
  //     <ScrollView style={styles.scrollStyle}>
  //       <Card>
  //         <View style={[styles.slide] }>
  //           <Text style={styles.title}>{item.name}</Text>
  //           <Text style={styles.text}>{item.song}</Text>
  //         </View>
  //       </Card>        
  //     </ScrollView>
  //   );
  // };

  if (isLoading) {
      return (
        <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
          <ActivityIndicator size={"large"} color="#5500dc"/>
        </View>
      );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        data={songs}
        ref={(ref) => (sliderRef = ref)}
        dotClickEnabled={false}
        showNextButton={false}
        showDoneButton={false}
        dotStyle={{backgroundColor: 'rgba(0, 0, 0, 0)'}}
      /> */}
      
      {/* <PagerView style={styles.pagerView} initialPage={0}>
        <ScrollView style={styles.scrollStyle}>
          <Card>
            <View style={[styles.slide] }>
              <Text style={styles.title}>{songsData[0].name}</Text>
              <Text style={styles.text}>{songsData[0].song}</Text>
            </View>
          </Card>        
        </ScrollView>
      </PagerView> */}

      {/* <AnimatedPagerView
        testID="pager-view"
        //ref={ref}
        style={styles.pagerView}
        initialPage={0}
        //{...rest}
        pageMargin={10}
      >
        {useMemo(
          () =>
            songsData.map((_, index) => (
              <View
                testID="pager-view-content"
                key={index}
                style={{
                  flex: 1,
                  backgroundColor: '#fdc08e',
                  alignItems: 'center',
                  padding: 20,
                }}
                collapsable={false}
              >
                <Text
                  testID={`pageNumber${index}`}
                >{`page number ${index}`}</Text>
              </View>
            )),
          [songsData]
        )}
      </AnimatedPagerView> */}
    </SafeAreaView>
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
  scrollStyle: {
    padding: 5,
  },
  slide: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  image: {
    width: 320,
    height: 320,
    marginVertical: 32,
  },
  text: {
    color: 'rgba(0, 0, 0, 0.8)',
    textAlign: 'left',
  },
  title: {
    fontSize: 22,
    color: 'rgba(0, 0, 0, 0.8)',
    textAlign: 'center',
  },
  pagerView: {
    flex: 1,
  },
});