import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';
// import { useNavigation } from "@react-navigation/native";

function CategoryGridTile({title, color, onPress}) {
    // const navigation = useNavigation();
    return <View style={[styles.gridItem, {backgroundColor: color}]}>
        <Pressable
            android_ripple={{color: '#ccc'}}
            onPress={onPress}
            style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
    </View>
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 10,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? "hidden" : 'visible'
    },
    button: {
      flex: 1
    },
    buttonPressed: {
        opacity: 0.25
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontWeight: "bold",
        fontSize: 18
    }

});