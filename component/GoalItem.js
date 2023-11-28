import {View, Text, StyleSheet, Pressable} from 'react-native';

function GoalItems(props){
    return(
      <View style={styles.goalItems} >
      <Pressable onPress={props.onDeleteItem.bind(this, props.id)} android_ripple={{color:'purple'}}>  
        <Text style={styles.goalText}>{props.value}</Text>
      </Pressable>
    </View>
    );
}

export default GoalItems;

const styles= StyleSheet.create({
    goalItems:{
        backgroundColor:'#AB6EFE',  borderWidth:2,borderColor:'#AB6EFE', margin:5,borderRadius:6
      },
      goalText:{
        color:'white',padding:8
      }
})