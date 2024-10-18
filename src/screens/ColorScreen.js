import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet,Button } from 'react-native';


export default function ColorScreen() {

    const randomRGB = () => {
        const red = Math.floor(Math.random()*256);
        const green = Math.floor(Math.random()*256);
        const blue = Math.floor(Math.random()*256);

        return `rgb(${red},${green},${blue})`;
    }
    const [colors, setColors] = useState([]);
    return (
        <View>
            <Text >Welcome to the Color Screen</Text>
            <Button
                title='Add color'
                onPress={() => {
                    setColors([...colors, randomRGB()]);
                }
                }
            />

            <FlatList
             horizontal
                data={colors}
            
                renderItem={({ item }) => {
                    return (
                        <View style={{ height: 10, width: 50, backgroundColor: item }} >
                        </View>
                    )
                }}
            />

            


<FlatList 
                data={colors}
            
                renderItem={({ item }) => {
                    return (
                        <View style={{ height: 10, width: 50, backgroundColor: item }} >
                        </View>
                    )
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({

});
