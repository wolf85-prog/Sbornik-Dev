import { Text, View, StyleSheet } from "react-native";
//import { Link, Href } from 'expo-router';
// import ImageViewer from "../../components/ImageViewer";
import Button from '../../components/Button';

//import * as SQLite from 'expo-sqlite';
import { useState, useEffect } from 'react';

//const ABOUT = "/about" as Href

const PlaceholderImage = require('@/assets/images/background-image.png');


export default function Index() {
  
  const [isLoading, setIsLoading] = useState(true);
  const [names, setNames] = useState([]);
  const [currentName, setCurrentName] = useState('');

  //const [db, setDb] = useState(SQLite.openDatabaseAsync('example'));


  useEffect(() => {

    const getData = async () => {
      
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
    };
  
    getData();

    setIsLoading(false);
  }, []);


  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Loading names...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View> */}
      <Text style={styles.text}>{currentName}</Text>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});