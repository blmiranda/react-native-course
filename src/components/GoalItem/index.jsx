import { Text, Pressable } from 'react-native';
import styles from './styles.js';

const GoalItem = (props) => {
  return (
    <Pressable
      onPress={props.onDeleteItem.bind(this, props.id)}
      style={(pressData) => [
        styles.goal,
        pressData.pressed && styles.pressedGoal,
      ]}
    >
      {(pressData) => {
        return (
          <Text
            style={[
              styles.goalText,
              pressData.pressed && styles.pressedGoalText,
            ]}
          >
            {props.text}
          </Text>
        );
      }}
    </Pressable>
  );
};

export default GoalItem;
