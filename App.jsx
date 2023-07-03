import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalInput from './src/components/GoalInput';
import GoalItem from './src/components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function stopAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add new goal"
        color="#651fff"
        onPress={startAddGoalHandler}
      />
      <GoalInput
        visible={modalIsVisible}
        closeModal={stopAddGoalHandler}
        onAddGoal={addGoalHandler}
      />

      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item) => item.id}
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
