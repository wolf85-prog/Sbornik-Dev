import { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import { Stack } from 'expo-router';
import React from 'react'
//import { SQLiteProvider, useSQLiteContext } from "expo-sqlite";
import {
  IconButton,
  Provider,
  Portal,
  Dialog,
  Button,
} from "react-native-paper";
//import asyncAlert from "./asyncAlert";
import { DrawerToggleButton } from "@react-navigation/drawer";

export default function AboutScreen() {
  return (

    <View style={styles.container} >
      <Stack.Screen options={{ headerShown: true, title: "О приложении", headerLeft: (() => <DrawerToggleButton tintColor={'#000'} />) }} />
        <Provider>
          {/* <SQLiteProvider databaseName="sbornik.db" assetSource={{ assetId: require('./../../../assets/sbornik.db') }}> */}
            <Content />
          {/* </SQLiteProvider> */}
        </Provider>
    </View>
      
  );
}

export function Content() {
  //const db = useSQLiteContext();


  useEffect(() => {

    const fetch = (async()=> {

      // await db.withTransactionAsync(async () => {
      //   const allRows = await db.getAllAsync('SELECT * FROM notes');
      //   const customers = allRows.map((row) => ({
      //     uid: row.id_song,
      //     name: row.note,
      //   }));

      //   setCustomers(customers);
      // });
    })

    fetch()
  }, []);
  

  return (
    <SafeAreaView style={{ flex: 1 }}>
        
          <View style={styles.container}>
            <Text style={styles.titleText}>Майкопский молодежный сборник</Text>

            <View>
              <Text style={styles.customerName}>Версия приложения: 2.0</Text>
              
            </View>
          </View>
        
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
  titleText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 20,
  },
  customer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  customerName: {
    fontSize: 18,
  },
  buttonStyle: {
    fontSize: 16,
    color: "white",
    backgroundColor: "green",
    padding: 5,
    marginTop: 32,
    minWidth: 250,
    marginBottom: 16,
  },
  buttonTextStyle: {
    padding: 5,
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
  textInputStyle: {
    textAlign: "center",
    height: 40,
    fontSize: 18,
    width: "100%",
    borderWidth: 1,
    borderColor: "green",
  },
  icons: {
    flexDirection: "row",
  },
});