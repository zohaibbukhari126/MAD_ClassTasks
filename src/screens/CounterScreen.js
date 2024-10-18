import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function CounterScreen() {
     const [counter,setCounter] = useState(0);

    return (
        <View>
            <Button title="Increase"
                onPress={() => { setCounter(counter + 1) }} />

            <Button title="Decrease"
                onPress={() => setCounter(counter - 1)} />
            <Text>counter state:{counter}</Text>
        </View>
    )
}


