import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

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
                        <Text style={styles.name}>{item.name}</Text>
                        <Image 
                            source={{ uri: item.image_url }} 
                            style={styles.image} 
                        />
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
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        overflow: 'hidden',
        alignItems: 'center',
        elevation: 2, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    image: {
        width: 200,
        height: 120,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        padding: 5,
        textAlign: 'center',
        backgroundColor: '#f8f8f8', 
        width: '100%',
    },
});
