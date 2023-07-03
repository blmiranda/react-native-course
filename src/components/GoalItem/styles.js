import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  goal: {
    backgroundColor: '#ffffff',
    marginTop: 10,
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
  pressedGoal: {
    backgroundColor: '#651fff',
  },
  goalText: {
    color: '#808080',
    fontSize: 18,
    fontWeight: 'bold',
  },
  pressedGoalText: {
    color: '#ffffff',
  },
});
