import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

// This component is called a child component because it will take instructions from the parent
export default function ImageDetail(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <Image source={props.imageSource} style={styles.image} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        alignItems: 'center', // Center the items horizontally
        padding: 10,
        backgroundColor: '#fff', // White background for contrast
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
        textAlign: 'center',
    },
    image: {
        width: '100%', // Full width of the container
        height: 200, // Set a fixed height for uniformity
        borderRadius: 12,
        resizeMode: 'cover', // Maintain aspect ratio and cover the area
        marginBottom: 10,
    },
});
