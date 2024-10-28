import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import yelp from '../api/yelp';
import ResultList from '../components/Resultlist';
import SearchBar from '../components/SearchBar';

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
                    location: 'san francisco',
                },
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong');
        }
    };

    const filterResultsByPrice = (price) => {
        return results.filter(result => result.price === price);
    };

    return (
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={searchApi}
                PlaceHolderS="Enter name of the Dish or the Restaurant"
            />
            {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
            <Text style={styles.resultsCount}>You have found {results.length} results</Text>
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
                title="Luxury Dining"
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#f8f9fa',
        paddingHorizontal: 16,
    },
    contentContainer: {
        paddingBottom: 16,
    },
    error: {
        color: '#d9534f',
        margin: 15,
        fontSize: 16,
        fontWeight: '500',
    },
    resultsCount: {
        fontSize: 18,
        margin: 15,
        marginBottom: 5,
        fontWeight: '600',
        color: '#343a40',
    },
});
