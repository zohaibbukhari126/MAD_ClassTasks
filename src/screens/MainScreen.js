import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export default function MainScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.firstRow}>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>Button 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>Button 2</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.secondRow}>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>Button 3</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.thirdRow}>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>Button 4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>Button 5</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f9fa", // Light background color
        justifyContent: "space-between",
        padding: 20,
    },
    firstRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    secondRow: {
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        marginVertical: 15,
    },
    thirdRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    buttonStyle: {
        backgroundColor: "#4CAF50", // Green for Button 1
        borderRadius: 25,
        paddingVertical: 15,
        paddingHorizontal: 20,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        flex: 1,
        marginHorizontal: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff', // White text color
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
