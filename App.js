import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>Hello World</Text>
      <Text style={styles.dummyText}>Welcom to your app!</Text>
      <Button title="Clicke me!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    margin: 10,
    padding: 10,
    borderColor: 'blue',
    borderWidth: 2,
  },
});
