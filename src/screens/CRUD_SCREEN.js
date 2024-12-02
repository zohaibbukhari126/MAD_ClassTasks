import { useState } from "react";
import { View, TextInput, Button, Alert, ActivityIndicator, StyleSheet, Text } from "react-native";
import { db } from "../components/firebase";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";

export default function CRUD_SCREEN({ route }) {
    const userId = route.params.userId;
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);

    async function updateDetails() {
        setLoading(true);
        try {
            await updateDoc(doc(db, "users", userId), {
                name: name,
                address: address,
                phone: phone,
            });
            Alert.alert("Success", "Details updated");
        } catch (error) {
            Alert.alert("Error", "Could not update details: " + error.message);
        } finally {
            setLoading(false);
        }
    }

    async function deleteData() {
        setLoading(true);
        try {
            await deleteDoc(doc(db, "users", userId));
            Alert.alert("Success", "Account deleted");
        } catch (error) {
            Alert.alert("Error", "Could not delete account: " + error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Update Your Details</Text>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Address"
                value={address}
                onChangeText={setAddress}
            />
            <TextInput
                style={styles.input}
                placeholder="Phone"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
            />
            <Button title="Update Details" onPress={updateDetails} color="#6200EE" />
            <View style={styles.spacer} />
            <Button title="Delete Account" onPress={deleteData} color="#B00020" />
            {loading && <ActivityIndicator size="large" color="#6200EE" style={styles.loading} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f5f5f5",
        justifyContent: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#6200EE",
        marginBottom: 20,
        textAlign: "center",
    },
    input: {
        height: 50,
        borderColor: "#6200EE",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: "#ffffff",
        fontSize: 16,
        marginBottom: 15,
    },
    spacer: {
        marginVertical: 10,
    },
    loading: {
        marginTop: 20,
    },
});
