import {Image, Platform, Pressable, StyleSheet, Text, View} from 'react-native'
import {useNavigation} from "@react-navigation/native";

function MealItemScreen(theMealItem) {
    const dataItem = theMealItem.dataItem.item;

    const navigation = useNavigation();
    function onPressItem() {
        navigation.navigate('MealDetail', {
            id: dataItem.id
        });
    }

    return <View style={styles.mealItem}>
        <Pressable android_ripple={{color: '#ccc'}}
                   onPress={onPressItem}
                   style={({pressed}) => pressed ? styles.buttonPressed : null}>
            <View style={styles.innerContainer}>
                <View>
                    <Image source={{uri: dataItem.imageUrl}} style={styles.image}/>
                    <Text style={styles.title}>{dataItem.title}!</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.detailsItem}>{dataItem.duration}m</Text>
                    <Text style={styles.detailsItem}>{dataItem.complexity.toUpperCase()}</Text>
                    <Text style={styles.detailsItem}>{dataItem.affordability.toUpperCase()}</Text>
                </View>
            </View>
        </Pressable>
    </View>
}

export default MealItemScreen;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? "hidden" : 'visible',
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowRadius: 8,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: "hidden"
    },
    image: {
        width: '100%',
        height: 200
    },
    buttonPressed: {
        opacity: 0.25
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
        padding: 8
    },
    details: {
        flexDirection: "row",
        alignItems: "center",
        padding: 8,
        justifyContent: "center"
    },
    detailsItem: {
        marginHorizontal: 8,
        fontSize: 12
    }
})