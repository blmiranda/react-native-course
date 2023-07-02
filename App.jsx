import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import GoalInput from './src/components/GoalInput';
import GoalItem from './src/components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler() {
    console.log('delete');
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />

      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          contentContainerStyle={styles.flatListStyles}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#f2f2f2',
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
  flatListStyles: {
    padding: 20,
  },
});
