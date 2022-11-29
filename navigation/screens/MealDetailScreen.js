import {Image, StyleSheet, Text, View, ScrollView, Button} from "react-native";
import {MEALS} from "../data/dummy-data";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import {useLayoutEffect} from "react";

function MealDetailScreen({route, navigation}) {
    const mealId = route.params.id;

    const meal = MEALS.find(m => m.id === mealId);
    // useLayoutEffect(() => {
    //         navigation.setOptions({
    //             headerRight: () => {
    //                 return <Button title='Tap me!!' onPress={}/>
    //             },
    //         })
    // }, [])

    return <ScrollView>
        <Image source={{uri: meal.imageUrl}} style={styles.image}/>
        <Text style={styles.title}>{meal.title}</Text>
        <View style={styles.details}>
            <Text style={styles.detailsItem}>{meal.duration}m</Text>
            <Text style={styles.detailsItem}>{meal.complexity}</Text>
            <Text style={styles.detailsItem}>{meal.affordability}</Text>
        </View>
        <View style={styles.listOuterContainer}>
            <View style={styles.listContainer}>

                <Subtitle>Ingredients</Subtitle>
                <List data={meal.ingredients}/>

                <Subtitle>Steps</Subtitle>
                <List data={meal.steps}/>
            </View>
        </View>


    </ScrollView>
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 400
    },
    title: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: "center",
    },
    details: {
        color: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    detailsItem: {
        color: 'white',
        marginHorizontal: 8,
        fontSize: 16
    },
    iterativeItem: {
        color: 'white',
    },
    listContainer: {
        width: '80%'
    },
    listOuterContainer: {
        alignItems: 'center'
    }

})