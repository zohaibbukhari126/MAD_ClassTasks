import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';


export default function ResultList(props) {
       

    return (
        <View>
          <FlatList
          horizontal
          data = {props.results}
            renderItem={({item})=>{
            return (
                <View>
                <Text>{item.name} || </Text>
                </View>
            )
        }}
          />
        </View>
    )
}

const styles = StyleSheet.create({

});