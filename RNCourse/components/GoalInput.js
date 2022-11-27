import {Button, Modal, StyleSheet, TextInput, View} from "react-native";
import {useState} from "react";

function GoalInput(props) {
    const [enteredGoalText, setEnterGoalText] = useState('');

    function goalInputHandler(input) {
        setEnterGoalText(input);
    }

    function addGoalHandler() {
        props.addGoalHandler(enteredGoalText);
        setEnterGoalText('');

    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Your course goal!!!!"
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler}/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCloseModal}/>
                    </View>
                </View>

            </View>
        </Modal>)
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        // flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row'
    },
    button: {
        width: 100,
        marginHorizontal: 8
    }
});