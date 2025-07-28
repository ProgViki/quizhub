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
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E9ECEF',
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: COLORS.black,
  },
  providerList: {
    paddingBottom: 5,
  },
  providerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#E9ECEF',
  },
  selectedProviderButton: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  providerText: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.black,
    marginLeft: 8,
  },
  selectedProviderText: {
    color: '#fff',
  },
  meterTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  meterTypeButton: {
    width: '48%',
    backgroundColor: '#F8F9FA',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E9ECEF',
  },
  selectedMeterTypeButton: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  meterTypeText: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.black,
  },
  selectedMeterTypeText: {
    color: '#fff',
  },
  amountInputContainer: {
    marginBottom: 24,
  },
  amountOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  amountOption: {
    width: '30%',
    backgroundColor: '#F8F9FA',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E9ECEF',
  },
  selectedAmountOption: {
    backgroundColor: '#E6F7FF',
    borderColor: COLORS.primary,
  },
  amountOptionText: {
    fontSize: 14,
    color: COLORS.black,
  },
  buyButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    marginTop: 8,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
  },
  disabledBuyButton: {
    backgroundColor: '#CED4DA',
    shadowColor: 'transparent',
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.black,
    marginBottom: 12,
  },
  recentPayments: {
    marginTop: 24,
  },
  recentPaymentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E9ECEF',
  },
  recentPaymentLeft: {
    flex: 1,
  },
  recentPaymentDisco: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.black,
    marginBottom: 4,
  },
  recentPaymentDate: {
    fontSize: 12,
    color: '#6C757D',
  },
  recentPaymentAmount: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.black,
  },
});