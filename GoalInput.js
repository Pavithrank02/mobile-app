import { useState } from "react"
import { Button, StyleSheet, TextInput, View } from "react-native"

function GoalInput(props) {

  const [goalText, setGoalText] = useState()
  function goalInputHandler(text) {
    setGoalText(text)

  }
  function addGoalHandler() {
    props.onAddGoal(goalText)
  }
  return (
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
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 2,
    paddingBottom: 24,
    borderBottomColor: 'gray',
    flex: 1,
    backgroundColor: 'white'
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
})

module.exports = GoalInput