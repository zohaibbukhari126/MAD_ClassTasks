import { useState, useEffect } from "react";
import { View, Text, Button, Alert, TextInput, ActivityIndicator } from "react-native";
import { db } from '../components/firebase';
import { doc, updateDoc, deleteDoc, getDocs, query, collection, where } from "firebase/firestore";

export default function DataManagementScreen({ route }) {
    const { userId } = route.params;
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getDataWithUserId();
    }, []);

    async function getDataWithUserId() {
        setLoading(true);
        try {
            const docSnap = await getDocs(
                query(collection(db, "users"), where("uid", "==", userId))
            );
            const users = [];
            docSnap.forEach((doc) => users.push({ ...doc.data(), id: doc.id }));
            if (users.length > 0) setUserData(users[0]);
        } catch (error) {
            console.error("Error fetching data: ", error);
        } finally {
            setLoading(false);
        }
    }

    async function updateData() {
        setLoading(true);
        try {
            await updateDoc(doc(db, "users", userData.id), { name: userData.name });
            Alert.alert('Success', 'Data updated successfully');
        } catch (error) {
            Alert.alert('Error', 'Failed to update data: ' + error.message);
        } finally {
            setLoading(false);
        }
    }

    async function deleteData() {
        setLoading(true);
        try {
            await deleteDoc(doc(db, "users", userData.id));
            Alert.alert('Success', 'Data deleted successfully');
        } catch (error) {
            Alert.alert('Error', 'Failed to delete data: ' + error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <View style={{ padding: 20 }}>
            {loading ? <ActivityIndicator size="large" color="#0000ff" /> : (
                <>
                    <Text>Name: {userData?.name}</Text>
                    <Text>Address: {userData?.address}</Text>
                    <Text>Phone: {userData?.phone}</Text>
                    <Button title="Update Data" onPress={updateData} />
                    <Button title="Delete Data" onPress={deleteData} color="red" />
                </>
            )}
        </View>
    );
}
