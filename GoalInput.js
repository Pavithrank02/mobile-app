import { useState } from "react"
import { Button, StyleSheet, TextInput, View, Modal } from "react-native"

function GoalInput(props) {

  const [goalText, setGoalText] = useState()
  function goalInputHandler(text) {
    setGoalText(text)

  }
  function addGoalHandler() {
    props.onAddGoal(goalText)
    props.onClose()
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          placeholder='type yout goal'
          style={styles.textInput}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              onPress={addGoalHandler}
              title='Add Goal'
              color='white'
            />

          </View>
          <View style={styles.button}>
            <Button
            onPress={props.onClose}
              title="Cancel"
              color='white' />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    justifyContent: 'center',
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
    width: '100%',
    padding: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16

  },
  button: {
    width: 100,
    marginHorizontal: 8,
    backgroundColor: "darkviolet",

  }
})

module.exports = GoalInput