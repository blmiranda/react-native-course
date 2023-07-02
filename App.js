import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your course goal!"
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>

      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <View style={styles.goal}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
          }}
          contentContainerStyle={styles.scrollViewStyles}
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
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    width: '70%',
    marginRight: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: '#cccccc',
  },
  goalsContainer: {
    flex: 5,
  },
  scrollViewStyles: {
    padding: 20,
  },
  goal: {
    backgroundColor: '#ffffff',
    marginTop: 10,
    marginHorizontal: 'auto',
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 3,
    shadowOpacity: 0.2,
    shadowColor: '#000000',
    elevation: 5,
  },
  goalText: {
    color: '#808080',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
