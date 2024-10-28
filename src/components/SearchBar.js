
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function SearchBar({PlaceHolderS, term, onTermChange, onTermSubmit }) {
    return (
        <View style={styles.searchContainer}>
            <Feather name="search" size={24} color="black" style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder={PlaceHolderS}
                value={term}
                onChangeText={onTermChange}
                onSubmitEditing={onTermSubmit}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        backgroundColor: '#f0eeee',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginVertical: 10,
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    input: {
        flex: 1,
        fontSize: 18,
        paddingLeft: 8,
    },
    icon: {
        marginRight: 10,
    },
});
