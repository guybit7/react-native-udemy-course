import {Button, FlatList, StyleSheet, View} from 'react-native';
import {useState} from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [courseGoals, setCourseGoals] = useState([]);

    function startAddGoalHandler() {
        setModalIsVisible(true);
    }

    function addGoalHandler(enteredValue) {
        setCourseGoals(currentCourses => [...currentCourses, {text: enteredValue, id: Math.random().toString()}]);
    }

    function deleteGoalHandler(id) {
        setCourseGoals(state => courseGoals.filter(goal => goal.id !== id));
    }

    function onCloseModalHandler() {
        setModalIsVisible(false);
    }

    return (
        <View style={styles.appContainer}>
            <Button title='Add new goal' color="#5e0acc" onPress={startAddGoalHandler}/>
            {modalIsVisible && <GoalInput addGoalHandler={addGoalHandler} visible={modalIsVisible}
                                          onCloseModal={onCloseModalHandler}/>}
            <View style={styles.goalsContainer}>
                <FlatList
                    data={courseGoals}
                    renderItem={(itemData) => {
                        return (<GoalItem text={itemData.item.text} id={itemData.item.id}
                                          onDeleteItem={deleteGoalHandler}/>)
                    }}
                    keyExtractor={(item, index) => {
                        return item.id;
                    }}
                    alwaysBounceVertical={false}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
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
    goalsContainer: {
        flex: 5,
    }
});
