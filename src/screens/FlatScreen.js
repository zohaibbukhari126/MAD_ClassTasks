import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function FlatScreen() {
    const data = [
        { key: 'Devin',age:6 },
        { key: 'Dan' ,age :36},
        { key: 'Dominic' ,age:30},
        { key: 'Jackson',age:50 },
        { key: 'James',age:50 },
        { key: 'Joel',age:50 },
        { key: 'John' ,age:50},
        { key: 'Jillian' ,age:50},
        { key: 'Jimmy' ,age:50},
        { key: 'Julie' ,age:50},
    ];

    return (
            <FlatList
                data={data}
                renderItem={({ item }) => <Text style={styles.item}>{item.key} and {item.age}</Text>}
            />
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});
