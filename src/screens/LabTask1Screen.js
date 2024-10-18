import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Button } from 'react-native';

export default function LabTask1Screen() {
    const [text, setText] = useState('');
    const [name, setName] = useState([]);

    const addName = () => {
        if (text.trim()) {
            setName([...name, text]);
            setText('');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Enter some text:</Text>
            <TextInput
                style={styles.input}
                value={text}
                onChangeText={setText}
            />
            
            <Button title="Add" onPress={addName}  />
            <FlatList
                data={name}
         
                renderItem={({ item }) => <Text style={styles.text}>{item}</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    label: {
        fontSize: 18,
        marginBottom: 8,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
    text: {
        fontSize: 18,
        marginVertical: 4,
    },
});