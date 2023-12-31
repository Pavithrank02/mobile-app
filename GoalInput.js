import { useState } from "react"
import { Button, StyleSheet, TextInput, View, Modal, Image } from "react-native"

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
        <Image
          style={styles.image}
          source={require('./assets/goal.png')} />
        <TextInput
          onChangeText={goalInputHandler}
          placeholder='type yout goal'
          style={styles.textInput}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              onPress={props.onClose}
              title="Cancel"
              color='#f31282'
            />
          </View>
          <View style={styles.button}>
            <Button
              onPress={addGoalHandler}
              title='Add Goal'
            />

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
    borderBottomColor: 'white',
    flex: 1,
    backgroundColor: '#1A0037'
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'white',
    width: '100%',
    padding: 8,
    backgroundColor: '#e4d0ff'
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16

  },
  button: {
    width: 100,
    marginHorizontal: 8,


  },
  image: {
    width: 200,
    height: 200,
    margin: 20,
  }
})

module.exports = GoalInput