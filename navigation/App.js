import {StatusBar} from 'expo-status-bar';
import {StyleSheet} from 'react-native';
import CategoriesScreen from "./screens/CategoriesScreen";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

export default function App() {

    const Stack = createNativeStackNavigator();

    return (
        <>
            <StatusBar style='dark'/>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="MealsCategories" screenOptions={{
                    headerStyle: {backgroundColor: "#351401"},
                    headerTintColor: 'white',
                    contentStyle: {
                        backgroundColor: "black"
                    }
                }}>
                    <Stack.Screen name="MealsCategories" component={CategoriesScreen} options={{
                        title: 'All categories',
                    }}/>

                    <Stack.Screen name="MealsOverview" component={MealsOverviewScreen}/>

                    <Stack.Screen name="MealDetail" component={MealDetailScreen}/>

                </Stack.Navigator>
            </NavigationContainer>
        </>)
}

const styles = StyleSheet.create({
    container: {},
});
