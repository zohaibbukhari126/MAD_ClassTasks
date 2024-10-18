import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import yelp from '../api/yelp';
import { MaterialIcons } from '@expo/vector-icons';
import ResultList from '../components/Resultlist';

export default function SearchScreen() {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    const searchApi = async () => {
         {
            const response = await yelp.get('/search', {
                params: {
                    limit: 45,
                    term: term,
                    location: 'san francisco'
                }
            });
            setResults(response.data.businesses);
        } 
        
    };

    return (
        <View>
            <View style={styles.background}>
                <MaterialIcons name="search" style={styles.iconStyle} />
                <TextInput
                    placeholder="Enter name of the Dish or the Restaurant"
                    term={term}
                    onChangeText={newValue =>setTerm(newValue)}
                    onSubmitEditing={()=>{searchApi()}}
                    style={styles.inputStyle}
                />
            </View>
            <Text>You have found {results.length} results</Text>
            <ResultList results={results} />    
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flexDirection: 'row',
        borderRadius: 15,
        backgroundColor: '#BBBBBB',
        margin: 15,
        padding: 10,
    },
    iconStyle: {
        fontSize: 35,
        marginHorizontal: 20,
        alignSelf: 'center'
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
        color: 'black',
    }
});
