import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function TextScreen() {
    const [text, setText] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Enter some text:</Text>
            <TextInput
                style={styles.input}
                value={text}
                onChangeText={(newText) => setText(newText)}
            />
            <Text style={styles.text}>You entered: {text}</Text>
        </View>
    );
};

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
    },
});