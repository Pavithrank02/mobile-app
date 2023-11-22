import { StyleSheet, Text, View, Pressable } from "react-native"

function GoalItem(props) {
  return (
    <Pressable onPress={props.onDelete}>
      <View style={styles.goalItems}>
        <Text style={styles.goaltext}>{props.key} - {props.item}</Text>
      </View>
    </Pressable>
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