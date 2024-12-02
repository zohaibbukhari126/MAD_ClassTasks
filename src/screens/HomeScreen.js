import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";

export default function HomeScreen({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => { navigation.navigate('Main') }}>
                <Text style={styles.textStyle}>Go to MainScreen!</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle} onPress={() => { navigation.navigate('Image') }}>
                <Text style={styles.textStyle}>Go to ImageScreen!</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle} onPress={() => { navigation.navigate('Counter') }}>
                <Text style={styles.textStyle}>Go to CounterScreen!</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle} onPress={() => { navigation.navigate('Text') }}>
                <Text style={styles.textStyle}>Go to TextScreen!</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle} onPress={() => { navigation.navigate('Flat') }}>
                <Text style={styles.textStyle}>Go to FlatScreen!</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle} onPress={() => { navigation.navigate('LabTask1') }}>
                <Text style={styles.textStyle}>Go to LabTask1Screen!</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle} onPress={() => { navigation.navigate('Color') }}>
                <Text style={styles.textStyle}>Color Screen</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle} onPress={() => { navigation.navigate('Assignment1') }}>
                <Text style={styles.textStyle}>Assignment 1 Screen</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle} onPress={() => { navigation.navigate('SquareColor') }}>
                <Text style={styles.textStyle}>Color Mixer Screen</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle} onPress={() => { navigation.navigate('SearchScreen') }}>
                <Text style={styles.textStyle}>Food Search Screen</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle} onPress={() => { navigation.navigate('WeatherSearchScreen') }}>
                <Text style={styles.textStyle}>Weather Screen</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle} onPress={() => { navigation.navigate('LabExamScreen') }}>
                <Text style={styles.textStyle}>Lab Exam Screen</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle} onPress={() => { navigation.navigate('SignUp') }}>
                <Text style={styles.textStyle}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle} onPress={() => { navigation.navigate('LogInScreen') }}>
                <Text style={styles.textStyle}>Login</Text>
            </TouchableOpacity>

            

            <TouchableOpacity style={styles.buttonStyle} onPress={() => { navigation.navigate('FetchSaveScreen') }}>
                <Text style={styles.textStyle}>FetchSaveScreen</Text>
            </TouchableOpacity>

            

            

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f4f4f4',
    },
    buttonStyle: {
        backgroundColor: '#4CAF50',
        borderRadius: 30,
        paddingVertical: 15,
        paddingHorizontal: 25,
        marginVertical: 10,
        width: '80%',
        elevation: 3, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF', // White color for text
        textAlign: 'center',
    },
});
