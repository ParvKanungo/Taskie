import { TextInput, Button , Modal, View, StyleSheet, Image} from "react-native";
import { useState } from "react";

function GoalText(props){
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function enterInputText(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler(){
        props.onAddHandler(enteredGoalText);
        setEnteredGoalText('');
    }
    return(
      <Modal visible={props.visible} animationType='slide'>
        <View style={styles.insideContainer}>
        <Image style={styles.image} source={require('../assets/goal.jpg')} resizeMode='contain' />
        <TextInput style={styles.textInput} placeholder="your course goals" onChangeText={enterInputText} value={enteredGoalText}/>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color='#422193' />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color='#f31282' />
          </View>
        </View>
        </View>
      </Modal>
    );
}

export default GoalText;

const styles=StyleSheet.create({
    insideContainer: {
        flex: 1, justifyContent:'center' ,alignItems: 'center',padding:16,  backgroundColor:'#311b6b'
      },
      textInput: {
        borderWidth: 1, borderColor: "#DEB5FE", margin: 2, width: '100%', padding: 10, backgroundColor:'#DEB5FE',borderRadius:8
      },
      buttonContainer:{
        flexDirection:'row',marginTop:16
      },
      button:{
        marginHorizontal:10, width:100
      },
      image:{
        height:100, width:200,margin:20
      }
});