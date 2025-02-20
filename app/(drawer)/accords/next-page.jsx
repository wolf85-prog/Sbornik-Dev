import { Stack } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import {Canvas} from "@shopify/react-native-skia";
import Star from "@/components/Star";

const PADDING = 16;

export default function NextPage() {
  const { width } = useWindowDimensions();


  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: true, title: "Next Page" }} />
      <Canvas style={styles.skia}>
        <Star/>
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