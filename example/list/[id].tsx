import { Text, View, StyleSheet } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';

export default function DetailsPage() {
    const {id} = useLocalSearchParams()

  return (
    <View style={styles.container}>
        <Stack.Screen options={{headerTitle: `Details #${id}`}} />
      <Text style={styles.text}>О приложении</Text>
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
});