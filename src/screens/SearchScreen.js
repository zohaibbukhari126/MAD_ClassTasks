import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import yelp from '../api/yelp';
import { MaterialIcons } from '@expo/vector-icons';
import ResultList from '../components/Resultlist';

export default function SearchScreen() {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async () => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 45,
                    term: term,
                    location: 'san francisco'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong');
        }
    };

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
            <View style={styles.background}>
                <MaterialIcons name="search" style={styles.iconStyle} />
                <TextInput
                    placeholder="Enter name of the Dish or the Restaurant"
                    value={term}
                    onChangeText={setTerm}
                    onSubmitEditing={searchApi}
                    style={styles.inputStyle}
                />
            </View>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>You have found {results.length} results</Text>
            <ResultList 
                results={filterResultsByPrice('$')}
                title="Cost Effective"
            />    
            <ResultList 
                results={filterResultsByPrice('$$')}
                title="Bit Expensive"
            />    
            <ResultList 
                results={filterResultsByPrice('$$$')}
                title="Big Spender"
            />    
            <ResultList 
                results={filterResultsByPrice('$$$$')}
                title="Burger Bcha"
            />    
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    background: {
        flexDirection: 'row',
        borderRadius: 15,
        backgroundColor: '#BBBBBB',
        margin: 15,
        padding: 10,
        alignItems: 'center',
    },
    iconStyle: {
        fontSize: 35,
        marginHorizontal: 10,
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
        color: 'black',
    }
});