import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button } from "react-native";


export default function MainScreen() {
    return (
    <View style={styles.container}>
    <View style={styles.firstRow}>
    <Button title="Button 1" color="green" />
    <Button title="Button 2" color="red" />
    </View>
    <View style={styles.SecondRow}>
    <Button title="Button 3" color="#841584" />
    </View>
    <View style={styles.ThirdRow}>
    
    
    
    <Button title="Button 4" color="pink" />
    <Button title="Button 5" color="orange" />
    </View>
    <StatusBar style="auto" />
    </View>
    );
    }
    
    const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    padding: 20,
    },
    firstRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    },
    SecondRow: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    },
    ThirdRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    },
});