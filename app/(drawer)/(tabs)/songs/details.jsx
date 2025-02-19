import { Stack } from "expo-router";
import { useState, useEffect } from 'react'
import { useMemo } from 'react';
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import PagerView from "react-native-pager-view";


export default function Details() {
  const [PagerViewModule , setPagerViewModule] = useState(null);

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

  // Loading this way because PagerView is not available on the web
  useEffect(() => {
    const loadPagerView = async () => {
      if (2>3) {
        console.log("I am not on web");
        const PagerView = await import("react-native-pager-view");
        setPagerViewModule(() => PagerView.default);
      } else {
        console.log("I am on web");
      }
    };

    loadPagerView();
  }, []);
  
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: true, title: "Details Page" }} />
      {/* <View style={styles.page} key="1">
          <Text>First page</Text>
          <Text>Swipe ➡️</Text>
        </View> */}
      <PagerView style={styles.container} initialPage={0}>
        <View style={styles.page} key="1">
          <Text>First page</Text>
          <Text>Swipe ➡️</Text>
        </View>
        <View style={styles.page} key="2">
          <Text>Second page</Text>
        </View>
        <View style={styles.page} key="3">
          <Text>Third page</Text>
        </View>
      </PagerView>
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