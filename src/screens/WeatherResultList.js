import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function WeatherResultList({ data, title }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.name}>City: {item.name}</Text>
                        <Text style={styles.temp}>Temp: {item.main.temp}°C</Text>
                        <Text style={styles.feelsLike}>Feels Like: {item.main.feels_like}°C</Text>
                        <Text style={styles.humidity}>Humidity: {item.main.humidity}%</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 10,
    },
    itemContainer: {
        padding: 10,
        marginHorizontal: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        elevation: 2,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    temp: {
        fontSize: 14,
    },
    feelsLike: {
        fontSize: 14,
    },
    humidity: {
        fontSize: 14,
    },
});
