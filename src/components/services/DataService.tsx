import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { COLORS } from '@/constants/colors';
import { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';

const networkProviders = [
  { id: '1', name: 'MTN', code: '*556#' },
  { id: '2', name: 'Airtel', code: '*123#' },
  { id: '3', name: 'Glo', code: '*127#' },
  { id: '4', name: '9mobile', code: '*200#' },
];

const dataPlans = [
  { id: '1', name: 'Daily', price: 200, validity: '1 day', data: '100MB' },
  { id: '2', name: 'Weekly', price: 500, validity: '7 days', data: '350MB' },
  { id: '3', name: 'Monthly', price: 1500, validity: '30 days', data: '1.5GB' },
  { id: '4', name: '2 Monthly', price: 2500, validity: '60 days', data: '3GB' },
  { id: '5', name: '3 Monthly', price: 3500, validity: '90 days', data: '6GB' },
  { id: '6', name: 'Yearly', price: 12000, validity: '365 days', data: '30GB' },
];

export default function DataService() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedNetwork, setSelectedNetwork] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [detectedNetwork, setDetectedNetwork] = useState<string | null>(null);

  useEffect(() => {
    // Simple network detection based on phone number prefix
    if (phoneNumber.length >= 4) {
      const prefix = phoneNumber.substring(0, 4);
      if (prefix === '0803' || prefix === '0806' || prefix === '0703' || prefix === '0903') {
        setDetectedNetwork('MTN');
      } else if (prefix === '0802' || prefix === '0808' || prefix === '0708' || prefix === '0902') {
        setDetectedNetwork('Airtel');
      } else if (prefix === '0805' || prefix === '0807' || prefix === '0905') {
        setDetectedNetwork('Glo');
      } else if (prefix === '0809' || prefix === '0817' || prefix === '0818') {
        setDetectedNetwork('9mobile');
      } else {
        setDetectedNetwork(null);
      }
    } else {
      setDetectedNetwork(null);
    }
  }, [phoneNumber]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buy Data</Text>
      
      <View style={styles.inputContainer}>
        <Ionicons name="call-outline" size={20} color={COLORS.gray} />
        <TextInput
          style={styles.input}
          placeholder="Enter phone number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>

      {detectedNetwork && (
        <View style={styles.detectedNetwork}>
          <Text style={styles.detectedNetworkText}>
            Detected network: {detectedNetwork}
          </Text>
        </View>
      )}

      <Text style={styles.sectionTitle}>Select Network</Text>
      <FlatList
        horizontal
        data={networkProviders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.networkButton,
              selectedNetwork === item.id && styles.selectedNetworkButton
            ]}
            onPress={() => setSelectedNetwork(item.id)}
          >
            <Text style={[
              styles.networkText,
              selectedNetwork === item.id && styles.selectedNetworkText
            ]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.networkList}
      />

      <Text style={styles.sectionTitle}>Select Data Plan</Text>
      <FlatList
        data={dataPlans}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.planButton,
              selectedPlan === item.id && styles.selectedPlanButton
            ]}
            onPress={() => setSelectedPlan(item.id)}
          >
            <View style={styles.planInfo}>
              <Text style={styles.planName}>{item.name}</Text>
              <Text style={styles.planData}>{item.data}</Text>
              <Text style={styles.planValidity}>{item.validity}</Text>
            </View>
            <Text style={styles.planPrice}>₦{item.price.toLocaleString()}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity 
        style={[
          styles.buyButton,
          (!phoneNumber || !selectedNetwork || !selectedPlan) && styles.disabledBuyButton
        ]}
        disabled={!phoneNumber || !selectedNetwork || !selectedPlan}
      >
        <Text style={styles.buyButtonText}>Buy Data</Text>
      </TouchableOpacity>
    </View>
  );
}

// Add styles similar to AirtimeService with additional styles for network and plan selection