import { View, Text } from 'react-native';
import styles from './styles.js';

const GoalItem = (props) => {
  return (
    <View style={styles.goal}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
};

export default GoalItem;
