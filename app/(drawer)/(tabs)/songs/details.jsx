import { Stack } from "expo-router";
import { useMemo } from 'react';
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
//import PagerView from "react-native-pager-view";


export default function Details() {

  const texts = [
    {
      id: "1",
      text: "Page 1"
    },
    {
      id: "2",
      text: "Page 2"
    },
    {
      id: "3",
      text: "Page 3"
    },
  ]
  
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: true, title: "Details Page" }} />
        <View key='1'>
          <Text>Page 1</Text>
        </View>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    page: {
      justifyContent: 'center',
      alignItems: 'center'
    }
});