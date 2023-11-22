import { StyleSheet, Text, View } from "react-native"

function GoalItem(props) {
  return (
    <View style={styles.goalItems}>
      <Text style={styles.goaltext}>{props.key} - {props.item}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  goalItems: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: 'darkviolet',
    fontStyle: 'italic',

  },
  goaltext: {
    color: 'white'
  }
})
module.exports = GoalItem