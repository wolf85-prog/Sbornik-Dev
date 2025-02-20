import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Link } from "expo-router";
import { Stack, useRouter } from 'expo-router';
import React from 'react'
import { DrawerToggleButton } from "@react-navigation/drawer";

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];


export default function AccordScreen() {

  const router = useRouter();

  const Item = ({title} : {title:any}) => (
    <TouchableOpacity style={styles.item} onPress={()=> {router.push('/accords/next-page')}} >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container} >
      <Stack.Screen options={{ headerShown: true, title: "Аккорды", headerLeft: (() => <DrawerToggleButton tintColor={'#000'} />) }} />
      {/* <Text style={styles.text}>Аккорды</Text>
      <Link href="/accords/next-page" style={{ marginTop: 16, fontSize: 18 }}>
        <Text style={{ fontWeight: "bold" }}>Go To Next Page</Text>
      </Link> */}
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});