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
    props.closeModal();
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
            <Button title="Add Goal" color="#651fff" onPress={addGoalHandler} />
          </View>
          <View style={styles.buttons}>
            <Button title="Cancel" color="#651fff" onPress={props.closeModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;
