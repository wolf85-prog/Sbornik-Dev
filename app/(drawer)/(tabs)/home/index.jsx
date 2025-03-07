import { Text, View, StyleSheet, FlatList, TextInput, TouchableOpacity, Image, ActivityIndicator } from "react-native";
//import { Link, Href } from 'expo-router';
// import ImageViewer from "../../components/ImageViewer";
import Button from '../../../../components/Button';
import { Stack, useRouter } from 'expo-router';
import { DrawerToggleButton } from "@react-navigation/drawer";

//import * as SQLite from 'expo-sqlite';
import { useState, useEffect } from 'react';

//import { ActivityIndicator } from "react-native-web";
import filter from "lodash.filter"

const PlaceholderImage = require('@/assets/images/background-image.png');

let state = {
  data:[
      {
          "name": "Miyah Myles",
          "email": "miyah.myles@gmail.com",
          "position": "Data Entry Clerk",
          "photo": "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6"
      },
      {
          "name": "June Cha",
          "email": "june.cha@gmail.com",
          "position": "Sales Manager",
          "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/44.jpg"
      },
      {
          "name": "Iida Niskanen",
          "email": "iida.niskanen@gmail.com",
          "position": "Sales Manager",
          "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/68.jpg"
      },
      {
          "name": "Renee Sims",
          "email": "renee.sims@gmail.com",
          "position": "Medical Assistant",
          "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/65.jpg"
      },
      {
          "name": "Jonathan Nu\u00f1ez",
          "email": "jonathan.nu\u00f1ez@gmail.com",
          "position": "Clerical",
          "photo": "https:\/\/randomuser.me\/api\/portraits\/men\/43.jpg"
      },
      {
          "name": "Sasha Ho",
          "email": "sasha.ho@gmail.com",
          "position": "Administrative Assistant",
          "photo": "https:\/\/images.pexels.com\/photos\/415829\/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb"
      },
      {
          "name": "Abdullah Hadley",
          "email": "abdullah.hadley@gmail.com",
          "position": "Marketing",
          "photo": "https:\/\/images.unsplash.com\/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=a72ca28288878f8404a795f39642a46f"
      },
      {
          "name": "Thomas Stock",
          "email": "thomas.stock@gmail.com",
          "position": "Product Designer",
          "photo": "https:\/\/tinyfac.es\/data\/avatars\/B0298C36-9751-48EF-BE15-80FB9CD11143-500w.jpeg"
      },
      {
          "name": "Veeti Seppanen",
          "email": "veeti.seppanen@gmail.com",
          "position": "Product Designer",
          "photo": "https:\/\/randomuser.me\/api\/portraits\/men\/97.jpg"
      },
      {
          "name": "Bonnie Riley",
          "email": "bonnie.riley@gmail.com",
          "position": "Marketing",
          "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/26.jpg"
      }
  ]
}

export default function Index() {

  const router = useRouter();
  
  const [isLoading, setIsLoading] = useState(false);
  const [names, setNames] = useState([]);
  const [currentName, setCurrentName] = useState('');
  const [searchQuery, setSearchQuery] = useState('')
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [fullData, setFullData] = useState([])

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

  //const [db, setDb] = useState(SQLite.openDatabaseAsync('example'));


  useEffect(() => {

    setIsLoading(true);

    const fetchData = async () => {
      

      try {
        // await (await db).withTransactionAsync(async () => {
      
        //   await (await db).getFirstAsync('CREATE TABLE IF NOT EXISTS names (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)')
        //   //const result = await (await db).getFirstAsync('SELECT COUNT(*) FROM names');
        //   // console.log('Count:', result.rows[0]['COUNT(*)']);
        // });

        // await (await db).withTransactionAsync(async () => {
        //   const result = await (await db).runAsync('INSERT INTO names (name) VALUES (?)', 'aaa');
        //   setCurrentName("result: ", result.lastInsertRowId)
        // });

        // await (await db).withTransactionAsync(async () => {
        //   const firstRow = await db.getFirstAsync('SELECT * FROM names');
        // });


        //setCurrentName("db: ")

        setData(state.data)

        setFullData(state.data)
        setIsLoading(false);
      } catch (error) {
        setError(error)
        console.log(error)
      }  
    };
  
    fetchData();
    
  }, []);


  if (isLoading) {
    return (
      <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size={"large"} color="#5500dc"/>
      </View>
    );
  }

  function Item({ item }) {
      return (
        <TouchableOpacity style={styles.listItem} onPress={()=> {router.push('/songs/details')}} >
          <Image source={{uri:item.photo}}  style={{width:60, height:60,borderRadius:30}} />
          <View style={{alignItems:"center",flex:1}}>
            <Text style={{fontWeight:"bold"}}>{item.name}</Text>
            <Text>{item.position}</Text>
            <TouchableOpacity style={{height:50,width:50, justifyContent:"center",alignItems:"center"}}>
              <Text style={{color:"green"}}>Call</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity >
      );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: true, title: "Главная", headerLeft: (() => <DrawerToggleButton tintColor={'#000'} />) }} />
      {/* <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View> 
      <Text style={styles.text}>{currentName}</Text>*/}

      <TextInput 
        placeholder="Поиск..." 
        clearButtonMode='always' 
        style={styles.searchBox}
        autoCapitalize="none"
        value={searchQuery}
        onChangeText={(query)=> handleSearch(query)}
      />

      <FlatList
        style={{flex:1}}
        data={data}
        renderItem={({ item }) => <Item item={item}/>}
        keyExtractor={item => item.email}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    marginHorizontal: 20,
  },
  text: {
    color: '#fff',
  },
  listItem:{
    marginVertical:10,
    padding:10,
    backgroundColor:"#FFF",
    width:"100%",
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius:5,
    borderColor: '#ccc'
  },

  searchBox: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
  }
});