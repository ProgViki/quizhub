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
  // Similar to previous styles with additions for TV packages
  packageButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  selectedPackageButton: {
    backgroundColor: COLORS.primary,
  },
  packageInfo: {
    flex: 1,
  },
  packageName: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.black,
  },
  packageDesc: {
    fontSize: 12,
    color: COLORS.gray,
  },
  packagePrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  // ... other existing styles
});