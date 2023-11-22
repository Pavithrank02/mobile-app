import { StyleSheet, Text, View, Pressable } from "react-native"

function GoalItem(props) {
  return (
    <View style={styles.goalItems}>
      <Pressable
        onPress={props.onDelete}
        style={(pressed) => !pressed && styles.pressed}
      >
        <Text style={styles.goaltext}>{props.key} - {props.item}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  goalItems: {
   marginTop: 14,
    borderRadius: 6,
    backgroundColor: 'darkviolet',
    fontStyle: 'italic',

  },
  goaltext: {
    color: 'white',
    margin: 8,
    padding: 8,
  }, 
  pressed: {
    opacity: 0.5
  }
})
module.exports = GoalItem