
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './GoalItem';
import GoalInput from './GoalInput'

export default function App() {

  const [goals, setGoals] = useState([])

  function addGoalHandler(goalText) {
    setGoals((currentGoals) => [...currentGoals, goalText])

  }
  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <View style={styles.goalContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
            <GoalItem key={itemData.index} item={itemData.item}/>
            )
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  appContainer: {
    paddingTop: 60,
    paddingHorizontal: 15,
    flex: 1, 
    backgroundColor: 'white'
  },
  
  goalContainer: {
    flex: 4
  },

});
