import { useState } from 'react';
import { View, TextInput, Button, Modal } from 'react-native';
import styles from './styles.js';

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoalText === '') return;

    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your course goal!"
          value={enteredGoalText}
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttons}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.buttons}>
            <Button title="Cancel" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;
