import { SafeAreaView, StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ActivityIndicator, TextInput } from 'react-native'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react'
import { useEffect, useState } from "react";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Ionicons, FontAwesome, AntDesign, Entypo, MaterialIcons } from '@expo/vector-icons';
import Card from '../../../../components/ui/Card';
import { useSQLiteContext } from "expo-sqlite";
import {Provider} from "react-native-paper";
import { Button, Dialog, Portal } from 'react-native-paper';

import filter from "lodash.filter"
import PopupMenu from "./../../../../components/ui/PopupMenu.js";


const PlaylistScreen = () => {

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
        title: "Плейлисты", 
        headerRight: headerRight,
        headerLeft: (() => <DrawerToggleButton tintColor={'#000'} />) 
      }} />
      <Provider>
          <Content />
      </Provider>
    </View>
  )
}

export default PlaylistScreen

export function Content() {
  const db = useSQLiteContext();

  const router = useRouter();
  
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('')
  const [data, setData] = useState([])
  const [playlists, setPlaylists] = useState([])
  const [error, setError] = useState(null)
  const [fullData, setFullData] = useState([])
  const [textInputValue, setTextInputValue] = useState("");
  const [playlistTitle, setPlaylistTitle] = useState("");

  const dataMenu = [
    {
      title: "Редактировать",
      action: ()=>alert('dffdf')
    },
    {
        title: "Удалить",
        action: ()=>alert('dffdf')
    },
  ]

  const handleSearch = (query) => {
    setSearchQuery(query)
    const formattedQuery = query.toLowerCase()
    const filteredData = filter(fullData, (user)=> {
      return contains(user, formattedQuery)
    })
    setData(filteredData)
  }
  
  const contains = ({name, email}, query) => {
    if (name.includes(query) || email.includes(query)) {
      return true
    }
  
    return false
  }

  useEffect(() => {
    setIsLoading(true);
    const fetch = (async()=> {

      await db.withTransactionAsync(async () => {
        const allRows = await db.getAllAsync('SELECT * FROM playlists');
        const playlist = allRows.map((row) => ({
          uid: row._id,
          name: row.nameList,
        }));

        const sortedSongs = [...playlist].sort((a, b) => {       
          var songA = a.name, songB = b.name
          return (songA < songB) ? -1 : (songA > songB) ? 1 : 0;  //сортировка по возрастанию 
        })
    
        setPlaylists(sortedSongs);

        setIsLoading(false);
      });
    })

    fetch()

    setIsLoading(false);
  }, []);

  const [visible, setVisible] = React.useState(false);

  const hideDialog = () => setVisible(false);
  
  function Item({ item }) {
    return (
      <Card key={item.uid}>
        <TouchableOpacity onPress={()=> {router.push(`/`)}} >
          <View style={styles.flex}>
            
            <View style={styles.main_content}>
              <Text style={styles.name}>{item.name}</Text>
              {/* <Text style={styles.category}>{item.email}</Text>      */}
            </View>

            <View style={styles.right_section}>
              <View style={styles.number}>
                <Text>0</Text>
              </View>  
              {/* <Entypo name="dots-three-vertical" size={24} color="gray" /> */}
              <PopupMenu color={"black"} options={dataMenu}/>
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

  const onButtonAdd = ()=> {
    console.log("press")
    setVisible(true)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <FlatList
        style={styles.listSongs}
        data={playlists}
        renderItem={({ item }) => <Item item={item}/>}
        keyExtractor={item => item.number}
        // ItemSeparatorComponent={() => <View style={{height: 15}} />}
        contentContainerStyle={{  flexGrow: 1,  gap: 15 }}
        // columnWrapperStyle={{ gap: GAP_BETWEEN_COLUMNS }}
        ListEmptyComponent={() =>
          <View>
            <MaterialIcons name="playlist-play" size={24} color="black" />
            <Text>Список плейлистов пуст</Text>
          </View>
          
        }
      />   

      <TouchableOpacity
        style={styles.floatingButton}
        onPress={onButtonAdd}
      >
        {/* <FontAwesome name="plus-circle" size={80} color="red" /> */}
        <AntDesign name="pluscircle" size={70} color="red" />
      </TouchableOpacity> 

      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Новый плейлист</Dialog.Title>
          <Dialog.Content>
            <TextInput
              label="Название"
              placeholder="Введите название"
              value={playlistTitle}
              onChangeText={text => setPlaylistTitle(text)}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setVisible(false)}>Отмена</Button>
            <Button onPress={() => setVisible(false)}>Добавить</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>   
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3f3',
        width: '100%',
      },

      emptyList: {
        fontSize: 16,
      },

      listSongs:{
        padding: 15,
        flex: 1,
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
        justifyContent: 'flex-end',
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