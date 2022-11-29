import {Text, StyleSheet, View} from "react-native";

function Subtitle({children}) {
    return <View style={styles.subTitleContainer}>
        <Text style={styles.subtitle}>{children}</Text>
    </View>
}

export default Subtitle;

const styles = StyleSheet.create({
    subTitleContainer: {
        padding: 6,
        marginHorizontal: 12,
        marginVertical: 4,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2
    },
    subtitle: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: 'center',
        color: '#e2b476'
    }
})