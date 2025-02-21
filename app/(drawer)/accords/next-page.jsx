import { Stack } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import {Canvas} from "@shopify/react-native-skia";
import Star from "@/components/Star";
import Setka from "@/components/Setka";

const PADDING = 16;

export default function NextPage() {


  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: true, title: "Next Page" }} />
      <Canvas style={styles.skia}>
        <Setka/>
      </Canvas>
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
    skia: {
      width: 300,
      height: 300
  },
});