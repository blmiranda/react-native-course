import { useState } from 'react';
import { View, TextInput, Button, Modal, Image } from 'react-native';
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
        <Image
          style={styles.image}
          source={require('../../../assets/images/goal.png')}
        />

        <TextInput
          placeholder="Your course goal!"
          value={enteredGoalText}
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttons}>
            <Button title="Cancel" color="#f31282" onPress={props.closeModal} />
          </View>
          <View style={styles.buttons}>
            <Button title="Add Goal" color="#ffbf00" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;
