import { SafeAreaView, Text, View, StyleSheet, FlatList, TextInput, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import Card from '../../../../components/ui/Card';
import { Stack, useRouter } from 'expo-router';
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Ionicons, FontAwesome } from '@expo/vector-icons';

//import * as SQLite from 'expo-sqlite';
import React from 'react'
import { useState, useEffect } from 'react';

//import { SQLiteProvider, useSQLiteContext } from "expo-sqlite";
import {
  Provider,
} from "react-native-paper";

import filter from "lodash.filter"

const PlaceholderImage = require('@/assets/images/background-image.png');
import songsData from './../../../../data/songsData.js';

const loadDatabase = async()=> {
  const dbName = 'sbornik.db'
  const dbAsset = './../../../../assets/sbornik.db'
}

export default function Index() {

  const headerRight = () => {
    return (
      <TouchableOpacity
        // onPress={()=>router.push("/modal")}
        style={{marginRight: 10}}
      >
        <FontAwesome name="plus-circle" size={28} color="blue" />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ 
        headerShown: true, 
        title: "Главная", 
        headerRight: headerRight,
        headerLeft: (() => <DrawerToggleButton 
        tintColor={'#000'} />) 
        }} 
      />
      
      <Provider>
        {/* <SQLiteProvider databaseName="sbornik.db" assetSource={{ assetId: require('./../../../../assets/sbornik.db') }}> */}
          <Content />
        {/* </SQLiteProvider> */}
      </Provider>
      
    </View>
  );
}



export function Content() {
  //const db = useSQLiteContext();

  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('')
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [fullData, setFullData] = useState([])
  const [textInputValue, setTextInputValue] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query)
    const formattedQuery = query.toLowerCase()
    const filteredData = filter(fullData, (user)=> {
      return contains(user, formattedQuery)
    })
    setData(filteredData)
  }

  const contains = ({name, email}, query) => {
    console.log("name: ", fullData)
    console.log("query: ", query)

    if (name.includes(query) || email.includes(query)) {
      return true
    }

    return false
  }

  useEffect(() => {
    setIsLoading(true);

    const fetch = (async()=> {
      try {
        // await db.withTransactionAsync(async () => {
        //   const allRows = await db.getAllAsync('SELECT * FROM songs');
        //   const songs = allRows.map((row) => ({
        //     uid: row._id,
        //     name: row.name,
        //     number: row.number,
        //   }));

        //   setData(songs)

        //   setFullData(songs)
        //   setIsLoading(false);
        // });

        setData(songsData)

        setFullData(songsData)
        setIsLoading(false);
        
      } catch (error) {
        setError(error)
        console.log(error)
      }    
    })

    fetch()
  }, []);
  
  function Item({ item }) {
    return (
      <Card>
        <TouchableOpacity onPress={()=> {router.push(`/home/song/${item.number}`)}} >
          <View style={styles.flex}>
            <View style={styles.number}>
              <Text>{item.number}</Text>
            </View>   
            
            <View style={styles.main_content}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.category}>Без категории</Text>     
            </View>

            <View style={styles.right_section}>
              <Ionicons name="star-outline" size={24} color="#feed33" />
            </View>
          </View>
          
        </TouchableOpacity >
      </Card>  
    );
  }

  if (isLoading) {
    return (
      <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size={"large"} color="#5500dc"/>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TextInput 
        placeholder="Поиск..." 
        clearButtonMode='always' 
        style={styles.searchBox}
        autoCapitalize="none"
        value={searchQuery}
        onChangeText={(query)=> handleSearch(query)}
      />
        <FlatList
          style={styles.listSongs}
          data={data}
          renderItem={({ item }) => <Item item={item}/>}
          keyExtractor={item => item.number}
          // ItemSeparatorComponent={() => <View style={{height: 15}} />}
          contentContainerStyle={{ gap: 15 }}
          // columnWrapperStyle={{ gap: GAP_BETWEEN_COLUMNS }}
        /> 
            
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    width: '100%',
  },

  listSongs:{
    padding: 15,
    flex: 1,
  },

  number: {
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18, 
  },

  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    height: 58,
  },

  main_content: {
    width: '70%',
    //position: 'relative',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },

  name: {
    color: '#000',
    fontSize: 16, 
    fontFamily: 'SpaceMono',
  },

  category: {
    color: '#e5e5e5',
    fontFamily: 'SpaceMono'
  },

  searchBox: {
    height: 46,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
  }
});