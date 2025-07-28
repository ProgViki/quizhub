import { View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { COLORS } from '@/constants/colors';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

const tvProviders = [
  { id: '1', name: 'DSTV', icon: 'tv-outline' },
  { id: '2', name: 'GOTV', icon: 'tv-outline' },
  { id: '3', name: 'Startimes', icon: 'tv-outline' },
  { id: '4', name: 'Showmax', icon: 'play-outline' },
];

const dstvPackages = [
  { id: '1', name: 'DStv Premium', price: 21000, description: 'All channels' },
  { id: '2', name: 'DStv Compact+', price: 12500, description: '100+ channels' },
  { id: '3', name: 'DStv Compact', price: 7900, description: '70+ channels' },
  { id: '4', name: 'DStv Yanga', price: 2500, description: 'Local channels' },
];

export default function TVService() {
  const [smartCardNumber, setSmartCardNumber] = useState('');
  const [selectedProvider, setSelectedProvider] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TV Subscription</Text>
      
      <View style={styles.inputContainer}>
        <Ionicons name="card-outline" size={20} color={COLORS.gray} />
        <TextInput
          style={styles.input}
          placeholder="Enter Smart Card/IUC Number"
          keyboardType="numeric"
          value={smartCardNumber}
          onChangeText={setSmartCardNumber}
        />
      </View>

      <Text style={styles.sectionTitle}>Select Provider</Text>
      <FlatList
        horizontal
        data={tvProviders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.providerButton,
              selectedProvider === item.id && styles.selectedProviderButton
            ]}
            onPress={() => {
              setSelectedProvider(item.id);
              setSelectedPackage('');
            }}
          >
            <Ionicons 
              name={item.icon as any} 
              size={24} 
              color={selectedProvider === item.id ? COLORS.white : COLORS.primary} 
            />
            <Text style={[
              styles.providerText,
              selectedProvider === item.id && styles.selectedProviderText
            ]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.providerList}
      />

      {selectedProvider === '1' && (
        <>
          <Text style={styles.sectionTitle}>Select DStv Package</Text>
          <FlatList
            data={dstvPackages}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.packageButton,
                  selectedPackage === item.id && styles.selectedPackageButton
                ]}
                onPress={() => setSelectedPackage(item.id)}
              >
                <View style={styles.packageInfo}>
                  <Text style={styles.packageName}>{item.name}</Text>
                  <Text style={styles.packageDesc}>{item.description}</Text>
                </View>
                <Text style={styles.packagePrice}>₦{item.price.toLocaleString()}</Text>
              </TouchableOpacity>
            )}
          />
        </>
      )}

      {/* Similar blocks for other providers */}

      <TouchableOpacity 
        style={[
          styles.buyButton,
          (!smartCardNumber || !selectedProvider || !selectedPackage) && styles.disabledBuyButton
        ]}
        disabled={!smartCardNumber || !selectedProvider || !selectedPackage}
      >
        <Text style={styles.buyButtonText}>Subscribe Now</Text>
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
    marginBottom: 20,
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
  providerIcon: {
    marginRight: 8,
  },
  providerText: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.black,
  },
  selectedProviderText: {
    color: '#fff',
  },
  packageList: {
    marginBottom: 20,
  },
  packageButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E9ECEF',
  },
  selectedPackageButton: {
    backgroundColor: '#E6F7FF',
    borderColor: COLORS.primary,
  },
  packageInfo: {
    flex: 1,
  },
  packageName: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.black,
    marginBottom: 4,
  },
  packageDesc: {
    fontSize: 12,
    color: '#6C757D',
  },
  packagePrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary,
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
  durationOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  durationButton: {
    width: '23%',
    backgroundColor: '#F8F9FA',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E9ECEF',
  },
  selectedDurationButton: {
    backgroundColor: '#E6F7FF',
    borderColor: COLORS.primary,
  },
  durationText: {
    fontSize: 12,
    color: COLORS.black,
  },
  recentSubscriptions: {
    marginTop: 24,
  },
  recentSubscriptionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E9ECEF',
  },
  recentSubscriptionLeft: {
    flex: 1,
  },
  recentSubscriptionProvider: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.black,
    marginBottom: 4,
  },
  recentSubscriptionDate: {
    fontSize: 12,
    color: '#6C757D',
  },
  recentSubscriptionAmount: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.black,
  },
});