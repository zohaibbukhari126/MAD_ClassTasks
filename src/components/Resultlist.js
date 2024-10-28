import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { BlurView } from 'expo-blur'; 

export default function ResultList(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <FlatList
                horizontal
                data={props.results}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <BlurView intensity={50} style={styles.blurContainer}>
                            <Image 
                                source={{ uri: item.image_url }} 
                                style={styles.image} 
                            />
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.description}>{item.description || 'No description available'}</Text>
                            <View style={styles.ratingContainer}>
                                <FontAwesome name="star" size={16} color="gold" />
                                <Text style={styles.rating}>{item.rating}</Text>
                            </View>
                        </BlurView>
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
        marginHorizontal: 10,
        borderRadius: 12,
        overflow: 'hidden',
        elevation: 5,
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        width: 250, 
        height: 350,
    },
    blurContainer: {
        flex: 1,
        borderRadius: 12,
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.2)', 
    },
    image: {
        width: '100%',
        height: 150,  
        borderRadius: 8,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical: 5,
        textAlign: 'center',
        color: '#333', 
    },
    description: {
        fontSize: 14,
        color: '#666', 
        textAlign: 'center',
        marginVertical: 5,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
    },
    rating: {
        marginLeft: 5,
        color: '#333', 
    },
});
