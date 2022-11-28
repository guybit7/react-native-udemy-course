import {CATEGORIES} from '../data/dummy-data'
import {FlatList, StyleSheet} from 'react-native'
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({navigation}) {
    function renderCategoryItem(itemData) {
        function onPressHandler() {
            navigation.navigate('MealsOverview');
        }

        return <CategoryGridTile title={itemData.item.title}
                                 color={itemData.item.color}
                                 onPress={onPressHandler}/>
    }

    return <FlatList
        data={CATEGORIES}
        keyExtractor={(item => item.id)}
        numColumns={2}
        renderItem={(itemData) => renderCategoryItem(itemData)}/>
}

export default CategoriesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row"
    },
});