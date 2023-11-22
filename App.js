
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './GoalItem';
import GoalInput from './GoalInput'

export default function App() {

  const [goals, setGoals] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)

  function addGoalHandler(goalText) {
    setGoals((currentGoals) => [...currentGoals, goalText])

  }
  function deleteItem(index) {
    const newGoals = goals.filter((el, i) => i != index)
    setGoals(newGoals)
  }
   function startAddGoalHandler () {
    setIsModalVisible(true)
   }
  return (
    <View style={styles.appContainer}>
      <Button
        title='Add New Goal'
        color='#5e0acc'
        onPress={startAddGoalHandler}

      />
      <GoalInput 
      onAddGoal={addGoalHandler} 
      visible={isModalVisible}
      />
      <View style={styles.goalContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <GoalItem key={itemData.index} item={itemData.item} onDelete={() => deleteItem(itemData.index)} />
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
