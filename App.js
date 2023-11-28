import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';

import GoalItems from './component/GoalItem';
import GoalText from './component/GoalText';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  function startAddGoalHandler() {
    setIsVisible(true);
  }
  function endAddGoalHandler() {
    setIsVisible(false);
  }
  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentGoalText) => [...currentGoalText, { text: enteredGoalText, key: Math.random().toString() }]);
    endAddGoalHandler();
  }

  function onDeleteHandler(id) {
    setCourseGoals((currentGoalText) => { return currentGoalText.filter((goal) => goal.key !== id) });
  }



  return (

    <View style={styles.container}>
      <View style={styles.nestedContainer}>
      <Button title='Add new goal' onPress={startAddGoalHandler} color='#422193' />
      <GoalText visible={isVisible} onAddHandler={addGoalHandler} onCancel={endAddGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        
        <FlatList data={courseGoals} renderItem={(itemData) => {
          return <GoalItems value={itemData.item.text} id={itemData.item.key} onDeleteItem={onDeleteHandler} />;
        }
        } />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#311b6b'

    
  },
  nestedContainer:{
    marginTop:62,marginHorizontal: 8,alignContent: 'center'
  },

  goalsContainer: {
    flex: 1, 
  }

});
