import { SafeAreaView, StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ActivityIndicator, TextInput } from 'react-native'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react'
import { useEffect, useState } from "react";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Ionicons, FontAwesome, Entypo, AntDesign, MaterialIcons } from '@expo/vector-icons';
import Card from '../../../../components/ui/Card';
import PopupMenu from "../../../../components/ui/PopupMenu.js";
import { Button, Menu, Divider, PaperProvider } from 'react-native-paper';
//import { SQLiteProvider, useSQLiteContext } from "expo-sqlite";
import {
  Provider,
} from "react-native-paper";

import filter from "lodash.filter"

const NotesScreen = () => {

  const router = useRouter();

  const data = [
      {
        title: "Настройки",
        action: ()=>router.push("/settings")
      },
  ]
  
  const headerRight = () => {
    return (
        <PopupMenu options={data} color={"white"}/>
    );
  };

  return (

    <View style={styles.container}>
      {/* Header */}
      <Stack.Screen options={{ 
        headerShown: true, 
        title: "Заметки", 
        headerRight: headerRight,
        headerLeft: (() => <DrawerToggleButton tintColor={'#fff'} />),
        headerStyle: {backgroundColor: '#26489a'},    
        headerTintColor: 'white',
      }} />
      <Provider>
          <Content />
      </Provider>
    </View>
  )
}

export default NotesScreen

export function Content() {
  //const db = useSQLiteContext();

  const router = useRouter();
  
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([])
  const [notes, setNotes] = useState([])
  const [error, setError] = useState(null)
  const [fullData, setFullData] = useState([])
  const [textInputValue, setTextInputValue] = useState("");

  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);


  useEffect(() => {
    setIsLoading(true);
    const fetch = (async()=> {

      // await db.withTransactionAsync(async () => {
      //   const allRows = await db.getAllAsync('SELECT * FROM notes');
      //   const notes = allRows.map((row) => ({
      //     uid: row._id,
      //     name: row.note,
      //   }));

      //   const sortedSongs = [...notes].sort((a, b) => {       
      //     var songA = a.name, songB = b.name
      //     return (songA < songB) ? -1 : (songA > songB) ? 1 : 0;  //сортировка по возрастанию 
      //   })
    
      //   setNotes(sortedSongs);

         setIsLoading(false);
      // });
    })

    fetch()
  }, []);
  
  function Item({ item }) {
    return (
      <Card>
        <TouchableOpacity onPress={()=> {router.push(`/songs/song/${item.number}`)}} >
          <View style={styles.flex}>
            
            <View style={styles.main_content}>
              <Text style={styles.name}>{item.name}</Text>
              {/* <Text style={styles.category}>{item.email}</Text>      */}
            </View>

            <View style={styles.right_section}>
              <View style={styles.number}>
                <Text>{item.number}</Text>
              </View>  
              <Ionicons name="star-outline" size={24} color="#feed33" />
            </View>
          </View>
          
        </TouchableOpacity >
      </Card>
      
    );
  }

  const EmptyListMessage = ({item}) => {
    return (
          // Flat List Item
          <View style={styles.containerList}>
            <MaterialIcons name="event-note" size={72} color="#7f8c8d" style={{textAlign: 'center'}}/>
            <Text style={styles.emptyListTitle}>
              Список заметок пуст
            </Text>
            <Text style={styles.emptyList}>
              Добавьте заметку при просмотре песни
            </Text>
          </View>  
    );
  };

  if (isLoading) {
    return (
      <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size={"large"} color="#5500dc"/>
      </View>
    );
  }

  const onButtonAdd = ()=> {
    console.log("press")
    setVisible(true)
  }

  return (
    <SafeAreaView style={{flex:1}}>

      <FlatList
        style={styles.listSongs}
        data={notes}
        renderItem={({ item }) => <Item item={item}/>}
        keyExtractor={item => item.number}
        // ItemSeparatorComponent={() => <View style={{height: 15}} />}
        contentContainerStyle={{  flexGrow: 1, justifyContent: "center", alignItems: "center", gap: 15 }}
        // columnWrapperStyle={{ gap: GAP_BETWEEN_COLUMNS }}
        ListEmptyComponent={EmptyListMessage}
      />  

      <TouchableOpacity
        style={styles.floatingButton}
        onPress={onButtonAdd}
      >
        <AntDesign name="pluscircle" size={70} color="#DE3163" />
      </TouchableOpacity>      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3f3',
        width: '100%',
      },

      containerList: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d6d5d5',
        width: '100%',
        margin: 0
      },

      emptyListTitle: {
        color: '#7f8c8d',
        textAlign: 'center',
        fontSize: 22,
      },
    
      emptyList: {
        color: '#b2babb',
        textAlign: 'center',
        fontSize: 16,
      },
    
      listSongs:{
        padding: 0,
      },

      card: {
        height: 65,
        backgroundColor: '#0005',
        padding: 8,
        paddingHorizontal: 15,
        marginTop: 10,
        borderRadius: 6,
        borderColor: '#000'
      },
      number: {
        width: 40,
        height: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },

      flex: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        height: 55,
      },

      main_content: {
        width: '70%'
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

      right_section: {
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row'
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
      },

      floatingButton: {
        position: 'absolute',
        width: 150,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 0,
        right: 0,
      },
})