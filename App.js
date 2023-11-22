import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.dummy}>Mobile App</Text>
      <View >
        <Text style={styles.dummy}>Text</Text>
      </View>
      <Button title='tap' />
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
  dummy: {
    margin: 16, 
    borderWidth: 2, 
    borderColor: 'red',
    padding: 13, 
  }
});
