import React from "react";
import { StyleSheet,View ,Text, TouchableOpacity} from "react-native";


export default function HomeScreen({navigation}) {
    return (
    <View>
        <TouchableOpacity style={styles.viewStyle} onPress={()=>{navigation.navigate('Main')}}>

        <Text style={styles.textStyle}>
            Go to MainScreen!
        </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.viewStyle} onPress={()=>{navigation.navigate('Image')}}>

        <Text style={styles.textStyle}>
            Go to ImageScreen!
        </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.viewStyle} onPress={()=>{navigation.navigate('Counter')}}>

        <Text style={styles.textStyle}>
            Go to CounterScreen!
        </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.viewStyle} onPress={()=>{navigation.navigate('Text')}}>

        <Text style={styles.textStyle}>
            Go to TextScreen!
        </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.viewStyle} onPress={()=>{navigation.navigate('Flat')}}>

        <Text style={styles.textStyle}>
            Go to FlatScreen!
        </Text>
        </TouchableOpacity>



        <TouchableOpacity style={styles.viewStyle} onPress={()=>{navigation.navigate('LabTask1')}}>

        <Text style={styles.textStyle}>
            Go to LabTask1Screen!
        </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.viewStyle} onPress={()=>{navigation.navigate('Color')}}>

        <Text style={styles.textStyle}>
            Color Screen
        </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.viewStyle} onPress={()=>{navigation.navigate('Assignment1')}}>

        <Text style={styles.textStyle}>
            Assignment 1 Screen
        </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.viewStyle} onPress={()=>{navigation.navigate('SquareColor')}}>

        <Text style={styles.textStyle}>
            Color Mixer Screen
        </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.viewStyle} onPress={()=>{navigation.navigate('SearchScreen')}}>

        <Text style={styles.textStyle}>
            Search Screen
        </Text>
        </TouchableOpacity>
        console.log("HomeScreen");


    </View>
    )}
    
    const styles=StyleSheet.create({
        viewStyle:{
            backgroundColor:'green',
            borderRadius: 20,
            padding: 10,
            alignSelf:'center',
        },
        textStyle:{
            fontSize:20,
            fontStyle:'italic',
        }
    })