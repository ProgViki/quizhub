import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '@/src/constants/Colors';

const financialProducts = [
  {
    id: '1',
    name: 'Wallet',
    icon: 'wallet-outline',
    description: 'Instant access to your funds',
    balance: '₦25,430.00',
  },
  {
    id: '2',
    name: 'ZeeWealth',
    icon: 'trending-up-outline',
    description: 'Investment portfolio',
    balance: '₦152,800.00',
  },
  {
    id: '3',
    name: 'Targets',
    icon: 'flag-outline',
    description: 'Save for specific goals',
    balance: '₦87,500.00',
  },
  {
    id: '4',
    name: 'Fixed',
    icon: 'lock-closed-outline',
    description: 'Higher interest savings',
    balance: '₦300,000.00',
  },
  {
    id: '5',
    name: 'Spend & Save',
    icon: 'repeat-outline',
    description: 'Automatic savings',
    balance: '₦42,150.00',
  },
  {
    id: '6',
    name: 'SaveBox',
    icon: 'cube-outline',
    description: 'Round-up savings',
    balance: '₦18,750.00',
  },
  {
    id: '7',
    name: 'Saving Report',
    icon: 'book-outline',
    description: 'Round-up savings',
    balance: '₦18,750.00',
  },
];

export default function FinanceScreen() {
  const totalBalance = financialProducts.reduce((sum, product) => {
    return sum + parseFloat(product.balance.replace(/[^0-9.]/g, ''));
  }, 0).toLocaleString('en-NG', { style: 'currency', currency: 'NGN' });

  const totalInterest = 12500; // This would come from your backend in a real app

  return (
    <ScrollView style={styles.container}>
      {/* Balance Summary Section */}
      <View style={styles.summaryCard}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Total Balance</Text>
          <Text style={styles.summaryValue}>{totalBalance}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Total Interest</Text>
          <Text style={[styles.summaryValue, styles.interestValue]}>
            +₦{totalInterest.toLocaleString()}
          </Text>
        </View>
      </View>

      {/* Products Grid */}
      <View style={styles.gridContainer}>
        {financialProducts.map((product) => (
          <TouchableOpacity 
            key={product.id} 
            style={styles.productCard}
            onPress={() => console.log(`Navigate to ${product.name}`)}
          >
            <View style={styles.productHeader}>
              <View style={styles.productIcon}>
                <Ionicons 
                  name={(product.icon as any)} 
                  size={24} 
                  color={COLORS.primary} 
                />
              </View>
              <Text style={styles.productName}>{product.name}</Text>
            </View>
            <Text style={styles.productDescription}>{product.description}</Text>
            <Text style={styles.productBalance}>{product.balance}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    padding: 16,
  },
  summaryCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  summaryLabel: {
    fontSize: 16,
    color: COLORS.gray,
  },
  summaryValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  interestValue: {
    // color: COLORS.success,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.lightGray,
    marginVertical: 8,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    width: '49%',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  productHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  productIcon: {
    backgroundColor: COLORS.secondary,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  productDescription: {
    fontSize: 12,
    color: COLORS.gray,
    marginBottom: 8,
    minHeight: 32,
  },
  productBalance: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.primary,
  },
});