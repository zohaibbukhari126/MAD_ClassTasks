import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import SquareColor from './SquareColor';

export default function ColorChanger(props) {
       

    return (
        <View>
            <Text>The Color is {props.color}</Text>

            <Button title="onIncrease"
                onPress={() => {props.onIncrease()}}
            />

            <Button title="onDecrease"
                onPress={() => {props.onDecrease()}}
            />

        </View>
    )
}


