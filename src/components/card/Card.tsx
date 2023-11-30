import { View, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from "react-native";

import { useState } from "react";
import Product from "../Product/Index";


export default function Card() {
    const [products, setProducts] = useState([
        {
            "id": 1,
            "name": "Camiseta",
            "price": 19.99
        },
        {
            "id": 2,
            "name": "Calça Jeans",
            "price": 29.99
        },
        {
            "id": 3,
            "name": "Sapato",
            "price": 39.99
        },
        {
            "id": 4,
            "name": "Bolsa",
            "price": 49.99
        },
        {
            "id": 5,
            "name": "Boné",
            "price": 9.99
        },
        {
            "id": 6,
            "name": "Jaqueta",
            "price": 59.99
        },
        {
            "id": 7,
            "name": "Shorts",
            "price": 24.99
        },
        {
            "id": 8,
            "name": "Sapato Social",
            "price": 69.99
        }


    ])

    return (
        <SafeAreaView style={styles.container}>

            <View />
            <FlatList

                style={[styles.list, { marginTop: 120 }]}
                data={products}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <Product data={item} />}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        width: 365,
    },

})