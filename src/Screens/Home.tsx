import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Card from '../components/card/Card';

type NavProps = {
    navigate: (value: string) => void;
}

export default function Home() {
    const navigation = useNavigation<NavProps>();

    const navigateToCartScreen = () => {
        navigation.navigate('Cart');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.boxText}>
                <Text style={styles.textHeader}>Lista de Produtos</Text>
                <TouchableOpacity style={styles.btnIcon} onPress={navigateToCartScreen}>
                    <Ionicons name="cart-outline" color={'white'} size={30} />
                    <View style={styles.dot}>
                        <Text style={styles.dotText}>0</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <Card />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#535878',
        alignItems: 'center',
        justifyContent: 'center',
        paddingEnd: 14,
        paddingStart: 14,
    },
    boxText: {
        top: 55,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        paddingHorizontal: 12,
        justifyContent: 'space-between',
        padding: 12,
    },
    textHeader: {
        fontSize: 25,
        color: 'white',
        fontWeight: '700',
    },
    btnIcon: {
        right: 8,
    },
    dot: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        width: 20,
        height: 20,
        borderRadius: 10,
        position: 'absolute',
        zIndex: 99,
        bottom: -2,
        left: -4,
    },
    dotText: {
        color: 'white',
        fontWeight: 'bold',
    },
});
