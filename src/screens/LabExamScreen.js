import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import openweather from '../api/openweather';
import yelp from '../api/yelp';
import SearchBar from '../components/SearchBar';
import { useNavigation } from '@react-navigation/native';


export default function LabExamScreen() {
    const navigation = useNavigation();
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [restaurants, setRestaurants] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [hoveredItemId, setHoveredItemId] = useState(null); 

    const fetchWeather = async () => {
        try {
            const response = await openweather.get('/weather', {
                params: {
                    q: city,
                    units: 'metric',
                }
            });
            setWeather(response.data);
            fetchRestaurants();
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    const fetchRestaurants = async () => {
        if (!weather) return;

        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 45,
                    location: 'san francisco',
                }
            });

            const sortedRestaurants = response.data.businesses
                .filter(restaurant => weather.weather[0].main === 'Rain' ? restaurant.price === '$$$$' : true)
                .sort((a, b) => a.distance - b.distance);

            setRestaurants(sortedRestaurants);
        } catch (err) {
            setErrorMessage('Something went wrong with fetching restaurants');
            console.error(err);
        }
    };

    const handleHover = (id) => {
        setHoveredItemId(id);
    };

    return (
        <View style={styles.container}>
            <SearchBar
                term={city}
                onTermChange={setCity}
                onTermSubmit={fetchWeather}
                PlaceHolderS="Enter City Name"
            />
            <Button title="Get Weather and Restaurants" onPress={fetchWeather} color="#FF6F61" />
            
            {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
            
            <Text style={styles.resultsCount}>You have found {restaurants.length} restaurants</Text>
            <FlatList
                data={restaurants}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('RestaurantDetail', { restaurant: item })}
                        onMouseEnter={() => handleHover(item.id)} 
                        onMouseLeave={() => handleHover(null)} 
                    >
                        <View style={styles.itemContainer}>
                            
                            <View style={styles.imageContainer}>
                                <Image 
                                    source={{ uri: item.image_url }} 
                                    style={[
                                        styles.image, 
                                        hoveredItemId === item.id && styles.imageHovered 
                                    ]}
                                />
                                <View style={styles.overlay}>
                                    <Text style={styles.overlayText}>{item.name}</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FAFAFA',
    },
    error: {
        color: '#E74C3C',
        marginVertical: 10,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
    },
    resultsCount: {
        fontSize: 20,
        marginVertical: 10,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    itemContainer: {
        marginVertical: 10,
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    imageContainer: {
        position: 'relative',
        overflow: 'hidden', 
        borderRadius: 10, 
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        marginVertical: 5,
        transition: 'transform 0.3s', 
    },
    imageHovered: {
        transform: [{ scale: 1.05 }], 
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlayText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    rating: {
        fontSize: 14,
        color: '#555',
    },
    price: {
        fontSize: 14,
        color: '#888',
    },
});
