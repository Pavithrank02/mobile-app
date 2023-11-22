import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [goalText, setGoalText] = useState()

  function goalInputHandler(text) {
    setGoalText(text)

  }
  function addGoalHandler() {
    console.log(goalText)

  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          placeholder='type yout goal'
          style={styles.textInput}
        />
        <Button
          onPress={addGoalHandler}
          title='Add Goal'
        />
      </View>
      <View style={styles.goalContainer}>
        <Text>List of Goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  appContainer: {
    paddingTop: 60,
    paddingHorizontal: 15,
    flex: 1
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 2,
    paddingBottom: 24,
    borderBottomColor: 'gray',
    flex: 1
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalContainer: {
    flex: 4
  }
});
