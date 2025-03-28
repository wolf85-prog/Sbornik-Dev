import React, {useEffect, useRef, useState, useMemo} from 'react';
import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';
//import AppIntroSlider from 'react-native-app-intro-slider';
import { Stack } from "expo-router";
import Card from '../../../../../components/ui/Card';

import songsData from './../../../../../data/songsData.js';

import { useSQLiteContext } from "expo-sqlite";
import {
  Provider,
} from "react-native-paper";
import { ScrollView } from 'react-native-gesture-handler';

import PagerView from 'react-native-pager-view';
//import { usePagerView } from 'react-native-pager-view';
//const { AnimatedPagerView, ref, ...rest } = usePagerView({ pagesAmount: 10 });


export default function DetailsScreen() {
  
  const { id } = useLocalSearchParams(); 

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: true, title: `№ ${id}` }} />

      <Provider>
        <Content item={id}/>
      </Provider>
    </View>
  );
}

interface Todo {
  name: string;
  song: string;
  _id: number;
  number: number;
}

export function Content({item}: {item: any}) {
  const db = useSQLiteContext();
  
  const [songs, setSongs] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [song, setSong] = useState<any>({});

  let sliderRef: any

  useEffect(() => {
    setIsLoading(true);

    const fetch = (async()=> {
      let arr = []
      await db.withTransactionAsync(async () => {
        const row = await db.getFirstAsync<Todo>(`SELECT * FROM songs WHERE _id=${item}`);
        //console.log("row: ", row, item)
        const song = {
          uid: row?._id,
          name: row?.name,
          text: row?.song,
          number: row?.number,
        };

        setSong(song);
      });

      
      arr.push(song)

      setSongs(arr);

      setIsLoading(false);
    })

    fetch()
  }, []);
  


  if (isLoading) {
      return (
        <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
          <ActivityIndicator size={"large"} color="#5500dc"/>
        </View>
      );
  }

  const onPageScroll = (e: any) => {
    console.log(e.nativeEvent.position)
    // setSong({
    //   name: songsData[3].name,
    //   text: songsData[3].song,
    // });

    const fetch = (async()=> {
      let arr = []
      await db.withTransactionAsync(async () => {
        const row = await db.getFirstAsync<Todo>(`SELECT * FROM songs WHERE _id=${item+1}`);
        //console.log("row: ", row, item)
        const song = {
          uid: row?._id,
          name: row?.name,
          text: row?.song,
          number: row?.number,
        };

        setSong(song);
      });

      
      songs.push(song)

      setSongs(songs);
    })

    fetch()

  };

  //const processedData = useMemo(({items})=>songsData(items), [items])

  return (
    <SafeAreaView style={{ flex: 1 }}>     
      {/* <PagerView 
        style={styles.pagerView} 
        initialPage={0}
        onPageScroll={onPageScroll}
      >
        <View key={song.number}>
              <ScrollView style={styles.scrollStyle}>
                <Card>
                  <View style={[styles.slide] }>
                    <Text style={styles.title}>{song.name}</Text>
                    <Text style={styles.text}>{song.text}</Text>
                  </View>
                </Card>        
              </ScrollView>
        </View>
      </PagerView> */}

      <PagerView
        testID="pager-view"
        style={styles.pagerView}
        initialPage={0}
        pageMargin={10}
        onPageScroll={onPageScroll}
      >
        {songs.map((page: any) => (
        <View key={page._id} collapsable={false}>
          <ScrollView style={styles.scrollStyle}>
                <Card>
                  <View style={[styles.slide] }>
                    <Text style={styles.title}>{page.name}</Text>
                    <Text style={styles.text}>{page.text}</Text>
                  </View>
                </Card>        
          </ScrollView>
        </View>
        )
      )}
      </PagerView>
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
    backgroundColor: '#e9e9e9',
  },
});