import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { COLORS } from '@/constants/colors';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

const airtimeAmounts = [100, 200, 500, 1000, 2000, 5000];

export default function AirtimeService() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buy Airtime</Text>
      
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

      <Text style={styles.sectionTitle}>Select Amount</Text>
      
      <FlatList
        data={airtimeAmounts}
        numColumns={3}
        columnWrapperStyle={styles.amountGrid}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.amountButton,
              selectedAmount === item && styles.selectedAmountButton
            ]}
            onPress={() => {
              setSelectedAmount(item);
              setCustomAmount('');
            }}
          >
            <Text style={[
              styles.amountText,
              selectedAmount === item && styles.selectedAmountText
            ]}>
              ₦{item.toLocaleString()}
            </Text>
          </TouchableOpacity>
        )}
      />

      <View style={styles.customAmountContainer}>
        <Text style={styles.orText}>OR</Text>
        <TextInput
          style={styles.customInput}
          placeholder="Enter custom amount"
          keyboardType="numeric"
          value={customAmount}
          onChangeText={(text) => {
            setCustomAmount(text);
            setSelectedAmount(null);
          }}
        />
      </View>

      <TouchableOpacity 
        style={styles.buyButton}
        disabled={!phoneNumber || (!selectedAmount && !customAmount)}
      >
        <Text style={styles.buyButtonText}>Buy Airtime</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: COLORS.black,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 15,
    color: COLORS.black,
  },
  amountGrid: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  amountButton: {
    width: '30%',
    backgroundColor: COLORS.secondary,
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    alignItems: 'center',
  },
  selectedAmountButton: {
    backgroundColor: COLORS.primary,
  },
  amountText: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.black,
  },
  selectedAmountText: {
    color: COLORS.white,
  },
  customAmountContainer: {
    marginTop: 10,
    marginBottom: 25,
  },
  orText: {
    textAlign: 'center',
    color: COLORS.gray,
    marginBottom: 10,
  },
  customInput: {
    backgroundColor: COLORS.secondary,
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
  },
  buyButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    marginTop: 20,
  },
  disabledBuyButton: {
    backgroundColor: COLORS.lightGray,
  },
  buyButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});