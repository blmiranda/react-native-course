import { View, Text, Pressable } from 'react-native';
import styles from './styles.js';

const GoalItem = (props) => {
  return (
    <Pressable onPress={props.onDeleteItem}>
      <View style={styles.goal}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;
