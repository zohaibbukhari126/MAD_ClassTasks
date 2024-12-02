import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  ActivityIndicator,
  Alert,
} from "react-native";
import axios from "axios";

const API_KEY = "1bf99915cc23cbb8562aa1b9fe09f38103a1bd80";

export default function FetchSaveScreen() {
  const [loading, setLoading] = useState(false);
  const [passouts, setPassouts] = useState([]);
  const [error, setError] = useState(null);

  const fetchPassoutsFromAPI = async (page = 1, perPage = 100) => {
    setLoading(true);
    setError(null);
    try {
      const targetUrl = "https://passouts.kptevta.gov.pk/api/passouts";

      const response = await axios.get(targetUrl, {
        headers: { "x-api-key": API_KEY },
        params: { page, perpage: perPage },
      });

      if (response.status === 200) {
        setPassouts(response.data.data || []); // Handle empty data gracefully
      } else {
        setError("Failed to fetch data from the API.");
      }
    } catch (err) {
      console.error("Error fetching passouts:", err);
      setError("An error occurred while fetching data.");
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Button title="Fetch Data" onPress={() => fetchPassoutsFromAPI()} />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : passouts.length === 0 ? (
        <Text style={styles.emptyText}>No data available.</Text>
      ) : (
        <FlatList
          data={passouts}
          keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text>Name: {item.stu_name}</Text>
              <Text>Gender: {item.gender}</Text>
              <Text>Session: {item.session}</Text>
              <Text>Institute: {item.inst_name}</Text>
              <Text>Trade: {item.trade_name}</Text>
              <Text>District: {item.district_name}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#f5f5f5" },
  card: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  errorText: {
    color: "red",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
  },
  emptyText: {
    color: "#555",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
  },
});

