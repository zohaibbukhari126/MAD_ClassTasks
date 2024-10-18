import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ColorChanger from './ColorChanger';

export default function SquareColor() {
    const [red,setRed] = useState(0);
    const [green,setGreen] = useState(0);
    const [blue,setBlue] = useState(0);
    const Color_increment = 15;

    const setColor= (color,change)=>{
            switch(color){
                case 'red':
                    red+change >255 || red+change <0 ?NULL: setRed(red+change);
                    return ;
                case 'blue':
                    blue+change >255 || blue+change <0 ?NULL: setBlue(blue+change);
                    return ;
                case 'green':
                    green+change >255 || green+change <0 ?NULL: setGreen(green+change);
                    return ;
            }
    }
    

    return (
        <View>
        <View>
            <ColorChanger color = 'red' onIncrease = {()=>{setColor('red',Color_increment)}}
             onDecrease = {()=>{setColor('red',-1*Color_increment)}}/>
            <ColorChanger color = 'blue' onIncrease = {()=>{setColor('blue',Color_increment)}}
             onDecrease = {()=>{setColor('blue',-1*Color_increment)}}/>
            <ColorChanger color = 'green' onIncrease = {()=>{setColor('green',Color_increment)}}
             onDecrease = {()=>{setColor('green',-1*Color_increment)}}/>
        </View>
        
        <View style=  {{margin:20, height:150, width:150, backgroundColor: `rgb(${red},${blue},${green})`
        }}>

        </View>

        </View>
    )
}


