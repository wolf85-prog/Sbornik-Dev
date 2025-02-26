import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react'
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Ionicons } from '@expo/vector-icons';

import { SQLiteProvider, useSQLiteContext } from "expo-sqlite";
import {
  IconButton,
  Provider,
  Portal,
  Dialog,
  Button,
} from "react-native-paper";

const SongsScreen = () => {
  const router = useRouter();

  let state = {
    data:[
        {
            "name": "Miyah Myles",
            "email": "miyah.myles@gmail.com",
            "position": "1",
        },
        {
            "name": "June Cha",
            "email": "june.cha@gmail.com",
            "position": "2",
        },
        {
            "name": "Iida Niskanen",
            "email": "iida.niskanen@gmail.com",
            "position": "3",
        },
        {
            "name": "Renee Sims",
            "email": "renee.sims@gmail.com",
            "position": "4",
        },
        {
            "name": "Jonathan Nu\u00f1ez",
            "email": "jonathan.nu\u00f1ez@gmail.com",
            "position": "5",
        },
        {
            "name": "Sasha Ho",
            "email": "sasha.ho@gmail.com",
            "position": "6",
        },
        {
            "name": "Abdullah Hadley",
            "email": "abdullah.hadley@gmail.com",
            "position": "7",
        },
        {
            "name": "Thomas Stock",
            "email": "thomas.stock@gmail.com",
            "position": "8",
        },
        {
            "name": "Veeti Seppanen",
            "email": "veeti.seppanen@gmail.com",
            "position": "9",
        },
        {
            "name": "Bonnie Riley",
            "email": "bonnie.riley@gmail.com",
            "position": "10",
        }
    ]
  }

  function Item({ item }) {
    return (
      <TouchableOpacity style={styles.card} onPress={()=> {router.push('/songs/details')}} >
        <View style={styles.flex}>
          <View style={styles.number}>
            <Text>{item.position}</Text>
          </View>   
          
          <View style={styles.main_content}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.category}>{item.email}</Text>     
          </View>

          <View style={styles.right_section}>
            <Ionicons name="star-outline" size={24} color="#feed33" />
          </View>
        </View>
        
      </TouchableOpacity >
    );
  }

  return (
    // <Provider>
    //   <SQLiteProvider databaseName="sbornik.db" assetSource={{ assetId: require('./../../../../assets/db/sbornik.db') }}>
    //     <Content />
    //   </SQLiteProvider>
    // </Provider>
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: true, title: "Песни", headerLeft: (() => <DrawerToggleButton tintColor={'#000'} />) }} />
      <FlatList
        style={{flex:1}}
        data={state.data}
        renderItem={({ item }) => <Item item={item}/>}
        keyExtractor={item => item.email}
      />
    </View>
  )
}

export default SongsScreen

export function Content() {
  const db = useSQLiteContext();

  const [textInputValue, setTextInputValue] = useState("");
  const [dialog, setDialog] = useState({
    customer: {},
    isVisible: false,
  });
  const [customers, setCustomers] = useState([]);

  // 
  

  //   const fetch = (async()=> {

  //     await db.withTransactionAsync(async () => {
  //       const allRows = await db.getAllAsync('SELECT * FROM notes');
  //       const customers = allRows.map((row) => ({
  //         uid: row.id_song,
  //         name: row.note,
  //       }));

  //       console.log(customers)

  //       setCustomers(customers);
  //     });
  //   })

  //   fetch()
  // }, []);
  

  return (
    <SafeAreaView style={{ flex: 1 }}>
        
          <View style={styles.container}>
            <Text style={styles.titleText}>Little Lemon Customers</Text>
            <TextInput
              placeholder="Enter the customer name"
              value={textInputValue}
              onChangeText={(data) => setTextInputValue(data)}
              underlineColorAndroid="transparent"
              style={styles.textInputStyle}
            />
            <TouchableOpacity
              disabled={!textInputValue}
              onPress={() => {
                const newValue = {
                  uid: Date.now().toString(),
                  name: textInputValue,
                };
                setCustomers([...customers, newValue]);

                setTextInputValue("");
              }}
              style={styles.buttonStyle}>
              <Text style={styles.buttonTextStyle}> Save Customer </Text>
            </TouchableOpacity>
            <View>
              <Text style={styles.customerName}>Customers: </Text>
              {customers.map((customer, index) => (
                <View key={index} style={styles.customer}>
                  <Text style={styles.customerName}>{customer.name}</Text>
                </View>
              ))}
            </View>
          </View>
        
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3f3',
        width: '100%',
        paddingTop: 20,
        paddingHorizontal: 10
      },
      text: {
        color: '#fff',
      },
      listItem:{
        margin:10,
        padding:10,
        backgroundColor:"#FFF",
        width:"80%",
        flex:1,
        alignSelf:"center",
        flexDirection:"row",
        borderRadius:5
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
        flexDirection: 'row'
      },
      main_content: {
        width: '70%'
      },
      name: {
        color: '#fff',
        fontSize: 16, 
        fontFamily: 'SpaceMono'
      },
      category: {
        color: '#f3f3f3',
        fontFamily: 'SpaceMono'
      }

})