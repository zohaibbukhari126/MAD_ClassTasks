import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { my_auth } from '../components/firebase.js';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function SignUp({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function signUpWithEmail() {
        try {
            const response = await createUserWithEmailAndPassword(my_auth, email, password);
            alert('Sign Up Successful');
            navigation.navigate('LogInScreen', { userId: response.user.uid });
        } catch (err) {
            console.log(err);
            alert('Sign Up Failed: ' + err.message);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create an Account</Text>
            <Text style={styles.label}>Email:</Text>
            <TextInput style={styles.input} value={email} placeholder="Enter email" onChangeText={setEmail} />
            <Text style={styles.label}>Password:</Text>
            <TextInput style={styles.input} value={password} placeholder="Enter password" onChangeText={setPassword} secureTextEntry />
            <View style={styles.buttonContainer}>
                <Button title="Sign Up" onPress={signUpWithEmail} color="#6200EE" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 30,
        backgroundColor: "#f5f5f5",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#6200EE",
        marginBottom: 20,
        textAlign: "center",
    },
    label: {
        fontSize: 16,
        color: "#333",
        marginBottom: 5,
        marginTop: 15,
    },
    input: {
        height: 50,
        borderColor: "#6200EE",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        backgroundColor: "#fff",
        fontSize: 16,
        marginBottom: 15,
    },
    buttonContainer: {
        marginTop: 20,
        borderRadius: 8,
        overflow: "hidden",
    },
});
