import { useState, useEffect } from "react";
import { View, TextInput, Button, Alert, ActivityIndicator, StyleSheet, Text } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, updateDoc, getDoc } from "firebase/firestore";
import { my_auth, db } from "../components/firebase";

export default function LogInScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [detailsLoaded, setDetailsLoaded] = useState(false);
    const [loading, setLoading] = useState(false);
    const [userId, setUserId] = useState('');

    async function handleLogin() {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(my_auth, email, password);
            setUserId(response.user.uid);
            await loadUserDetails(response.user.uid);
        } catch (error) {
            Alert.alert('Login Error', error.message);
        } finally {
            setLoading(false);
        }
    }

    async function loadUserDetails(userId) {
        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const userData = docSnap.data();
            setName(userData.name);
            setAddress(userData.address);
            setPhone(userData.phone);
            setDetailsLoaded(true);
        } else {
            setDetailsLoaded(false);
        }
    }

    async function saveUserDetails() {
        if (!name || !address || !phone) {
            Alert.alert('Error', 'Please fill all fields.');
            return;
        }
        setLoading(true);
        try {
            await setDoc(doc(db, "users", userId), {
                name: name,
                address: address,
                phone: phone,
            });
            Alert.alert('Success', 'Details saved successfully!');
            setDetailsLoaded(true);
        } catch (error) {
            console.error("Error saving details:", error);
        } finally {
            setLoading(false);
        }
    }

    async function updateUserDetails() {
        setLoading(true);
        try {
            await updateDoc(doc(db, "users", userId), {
                name: name,
                address: address,
                phone: phone,
            });
            Alert.alert('Success', 'Details updated successfully!');
        } catch (error) {
            console.error("Error updating details:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            {!detailsLoaded && (
                <>
                    <Text style={styles.title}>Login</Text>
                    <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
                    <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
                    <Button title="Log In" onPress={handleLogin} color="#6200EE" />
                </>
            )}
            {userId && (
                <>
                    <Text style={styles.title}>User Details</Text>
                    <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
                    <TextInput style={styles.input} placeholder="Address" value={address} onChangeText={setAddress} />
                    <TextInput style={styles.input} placeholder="Phone" value={phone} onChangeText={setPhone} />
                    {detailsLoaded ? (
                        <Button title="Update Details" onPress={updateUserDetails} color="#6200EE" />
                    ) : (
                        <Button title="Save Details" onPress={saveUserDetails} color="#6200EE" />
                    )}
                </>
            )}
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
        marginBottom: 15,
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
        marginBottom: 10,
    },
    loading: {
        marginTop: 20,
    },
});
