import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

type NavProps = {
    navigate: (value: string) => void;
}

export default function Home() {
    const navigation = useNavigation<NavProps>();

    const navigateToCartScreen = () => {
        navigation.navigate('Cart');
    };

    return (
        <View style={styles.container}>

            <View style={styles.boxText}>
                <Text style={styles.textHeader}>Lista de produtos</Text>
                <TouchableOpacity style={styles.btnIcon} onPress={navigateToCartScreen}>
                    <Ionicons name="cart-outline" color={"white"} size={30} />
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#343541",
        alignItems: "center",
        justifyContent: "center",
    },
    boxText: {
        top: 50,
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
    btnIcon: {
        right: 8
    }


});