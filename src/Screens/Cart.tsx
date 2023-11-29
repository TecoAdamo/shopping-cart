import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Cart() {


    return (
        <View style={styles.container}>



        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    boxText: {
        top: 60,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        paddingHorizontal: 12,
        justifyContent: 'space-between',
    },
    textHeader: {
        fontSize: 25,
        color: 'white',
        fontWeight: '700',
    },

});