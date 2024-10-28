import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';



export default function RestaurantDetailScreen({route}) {
    const { restaurant } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image source={{ uri: restaurant.image_url }} style={styles.image} />
                <Text style={styles.name}>{restaurant.name}</Text>
                <Text style={styles.distance}>Distance: {restaurant.distance.toFixed(2)} meters</Text>
                <Text style={styles.rating}>Rating: {restaurant.rating}</Text>
                <Text style={styles.price}>Price: {restaurant.price}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f0f0f0',
    },
    card: {
        backgroundColor: '#FFFFFF', 
        borderRadius: 12,
        elevation: 5, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        padding: 16, 
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 12,
        marginBottom: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333', 
    },
    distance: {
        fontSize: 18,
        marginBottom: 5,
        color: '#555', 
    },
    rating: {
        fontSize: 18,
        marginBottom: 5,
        color: '#555',
    },
    price: {
        fontSize: 18,
        color: '#555',
    },
});

