import { View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { COLORS } from '@/constants/colors';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

const discoProviders = [
  { id: '1', name: 'IKEDC', icon: 'flash-outline', code: 'ikeja-electric' },
  { id: '2', name: 'EKEDC', icon: 'flash-outline', code: 'eko-electric' },
  { id: '3', name: 'PHED', icon: 'flash-outline', code: 'portharcourt-electric' },
  { id: '4', name: 'KAEDCO', icon: 'flash-outline', code: 'kaduna-electric' },
];

export default function ElectricityService() {
  const [meterNumber, setMeterNumber] = useState('');
  const [meterType, setMeterType] = useState<'prepaid' | 'postpaid'>('prepaid');
  const [amount, setAmount] = useState('');
  const [selectedDisco, setSelectedDisco] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Electricity Bill Payment</Text>
      
      <View style={styles.inputContainer}>
        <Ionicons name="flash-outline" size={20} color={COLORS.gray} />
        <TextInput
          style={styles.input}
          placeholder="Enter Meter Number"
          keyboardType="numeric"
          value={meterNumber}
          onChangeText={setMeterNumber}
        />
      </View>

      <Text style={styles.sectionTitle}>Select Disco</Text>
      <FlatList
        horizontal
        data={discoProviders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.providerButton,
              selectedDisco === item.id && styles.selectedProviderButton
            ]}
            onPress={() => setSelectedDisco(item.id)}
          >
            <Ionicons 
              name={item.icon as any} 
              size={24} 
              color={selectedDisco === item.id ? COLORS.white : COLORS.primary} 
            />
            <Text style={[
              styles.providerText,
              selectedDisco === item.id && styles.selectedProviderText
            ]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.providerList}
      />

      <Text style={styles.sectionTitle}>Meter Type</Text>
      <View style={styles.meterTypeContainer}>
        <TouchableOpacity
          style={[
            styles.meterTypeButton,
            meterType === 'prepaid' && styles.selectedMeterTypeButton
          ]}
          onPress={() => setMeterType('prepaid')}
        >
          <Text style={[
            styles.meterTypeText,
            meterType === 'prepaid' && styles.selectedMeterTypeText
          ]}>
            Prepaid
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[
            styles.meterTypeButton,
            meterType === 'postpaid' && styles.selectedMeterTypeButton
          ]}
          onPress={() => setMeterType('postpaid')}
        >
          <Text style={[
            styles.meterTypeText,
            meterType === 'postpaid' && styles.selectedMeterTypeText
          ]}>
            Postpaid
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="cash-outline" size={20} color={COLORS.gray} />
        <TextInput
          style={styles.input}
          placeholder="Enter Amount"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />
      </View>

      <TouchableOpacity 
        style={[
          styles.buyButton,
          (!meterNumber || !selectedDisco || !amount) && styles.disabledBuyButton
        ]}
        disabled={!meterNumber || !selectedDisco || !amount}
      >
        <Text style={styles.buyButtonText}>Pay Electricity Bill</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  // ... existing styles
  meterTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  meterTypeButton: {
    width: '48%',
    backgroundColor: COLORS.secondary,
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  selectedMeterTypeButton: {
    backgroundColor: COLORS.primary,
  },
  meterTypeText: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.black,
  },
  selectedMeterTypeText: {
    color: COLORS.white,
  },
});