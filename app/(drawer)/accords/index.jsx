import { SafeAreaView, Text, View, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Link } from "expo-router";
import { Stack, useRouter } from 'expo-router';
import React from 'react'
import { useEffect, useState } from "react";
import { DrawerToggleButton } from "@react-navigation/drawer";
import {Provider} from "react-native-paper";
import { useSQLiteContext } from "expo-sqlite";
//import filter from "lodash.filter"

export default function AccordScreen() {


  return (
    <View style={styles.container} >
      <Stack.Screen options={{ 
        headerShown: true, 
        title: "Аккорды", 
        headerLeft: (() => <DrawerToggleButton tintColor={'#000'} />) 
      }} />
      <Provider>
        <Content />
      </Provider>
    </View>
  );
}

export function Content() {
  const db = useSQLiteContext();

  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([])
  const [accords, setAccords] = useState([])
  const [error, setError] = useState(null)
  const [fullData, setFullData] = useState([])

  useEffect(() => {
    setIsLoading(true);
    const fetch = (async()=> {

      await db.withTransactionAsync(async () => {
        const allRows = await db.getAllAsync('SELECT * FROM categories_accords');
        const accords = allRows.map((row) => ({
          uid: row?._id,
          name: row?.accord,
        }));
    
        setAccords(accords);

        setIsLoading(false);
      });
    })

    fetch()

    setIsLoading(false);
  }, []);
  

  const Item = ({item}) => (
    <TouchableOpacity style={styles.item} onPress={()=> {router.push('/accords/next-page')}} >
      <Text style={styles.title}>{item.name}</Text>
    </TouchableOpacity>
  );

  if (isLoading) {
    return (
      <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size={"large"} color="#5500dc"/>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <FlatList
        style={styles.listSongs}
        data={accords}
        renderItem={({ item }) => <Item item={item}/>}
        keyExtractor={item => item.uid}
        // ItemSeparatorComponent={() => <View style={{height: 15}} />}
        contentContainerStyle={{  flexGrow: 1,  gap: 15 }}
        // columnWrapperStyle={{ gap: GAP_BETWEEN_COLUMNS }}
        ListEmptyComponent={() =>
          <Text>
            Список аккордов пуст
          </Text>
        }
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
  text: {
    color: '#fff',
  },
  item: {
    backgroundColor: '#a3a3a3',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    color: '#fff',
    borderRadius: 5
  },
  title: {
    fontSize: 32,
    color: '#000'
  },
});