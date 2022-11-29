import {StyleSheet, Text, View, FlatList} from 'react-native';
import {CATEGORIES, MEALS} from "../data/dummy-data";
import MealItemScreen from "./MealItemScreen";
// import {useRoute} from "@react-navigation/native";
import {useEffect, useLayoutEffect} from "react";


function MealsOverviewScreen({route, navigation}) {
    // ~alternative to use in useRoute hook - good for nested component
    // const theRoute = useRoute();
    const catId = route.params.id;

    // filter the meals according to selected category
    const displayedMeals = MEALS.filter(mealItem => {
        return mealItem.categoryIds.indexOf(catId) >= 0
    });

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(c => c.id === catId).title;

        navigation.setOptions({
            title: categoryTitle
        });
    }, [catId, navigation])


    // generate the meals
    function renderMealItem(dataItem) {
        return <MealItemScreen dataItem={dataItem}/>
    }

    return <View style={styles.container}>
        <FlatList data={displayedMeals} renderItem={renderMealItem} keyExtractor={(item) => item.id}></FlatList>
    </View>
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})