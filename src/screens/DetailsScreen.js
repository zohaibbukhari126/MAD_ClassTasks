import { View, Text, TextInput, Button, Alert } from "react-native";
import { useState } from 'react';
import { db } from '../components/firebase';
import { setDoc, doc } from "firebase/firestore";

export default function DetailsScreen({ route }) {
    const { userId } = route.params;
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    async function saveDetails() {
        try {
            await setDoc(doc(db, "users", userId), {
                name,
                address,
                phone,
                uid: userId
            });
            Alert.alert('Success', 'Details saved successfully!');
        } catch (error) {
            Alert.alert('Error', 'Failed to save details: ' + error.message);
        }
    }

    return (
        <View style={{ padding: 20 }}>
            <Text>Name:</Text>
            <TextInput value={name} onChangeText={setName} />
            <Text>Address:</Text>
            <TextInput value={address} onChangeText={setAddress} />
            <Text>Phone:</Text>
            <TextInput value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
            <Button title="Save Details" onPress={saveDetails} />
        </View>
    );
}
