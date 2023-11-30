import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Product({ data }) {
    return (
        <View style={styles.container}>

            <View>
                <Text style={styles.title}>{data.name}</Text>
                <Text style={styles.price}> R$ {data.price}</Text>
            </View>
            <TouchableOpacity style={styles.buttonAdd} >
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 6,
        padding: 8,
        paddingBottom: 14,
        marginBottom: 10,
        paddingTop: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    price: {
        color: 'white'
    }

})