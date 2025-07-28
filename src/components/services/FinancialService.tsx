import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { COLORS } from '@/constants/colors';
import { Ionicons } from '@expo/vector-icons';

const financialProducts = [
  {
    id: '1',
    name: 'Quick Loans',
    icon: 'cash-outline',
    description: 'Get instant loans up to ₦500,000',
    interest: '5% monthly',
  },
  {
    id: '2',
    name: 'Investments',
    icon: 'trending-up-outline',
    description: 'Earn up to 15% annual returns',
    interest: 'Flexible terms',
  },
  {
    id: '3',
    name: 'Savings',
    icon: 'wallet-outline',
    description: 'Grow your money safely',
    interest: 'Up to 10% interest',
  },
  {
    id: '4',
    name: 'Insurance',
    icon: 'shield-checkmark-outline',
    description: 'Protect what matters',
    interest: 'Affordable premiums',
  },
];

export default function FinancialService() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Financial Services</Text>
      
      <FlatList
        data={financialProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.productCard}>
            <View style={styles.productHeader}>
              <View style={styles.productIcon}>
                <Ionicons 
                  name={item.icon as any} 
                  size={24} 
                  color={COLORS.primary} 
                />
              </View>
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productDesc}>{item.description}</Text>
              </View>
            </View>
            <View style={styles.productFooter}>
              <Text style={styles.interestText}>{item.interest}</Text>
              <TouchableOpacity style={styles.learnMoreButton}>
                <Text style={styles.learnMoreText}>Learn More</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.productsList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: COLORS.white,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: COLORS.black,
  },
  productCard: {
    backgroundColor: COLORS.secondary,
    borderRadius: 12,
    padding: 16,
    marginBottom: 15,
  },
  productHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  productIcon: {
    backgroundColor: COLORS.white,
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 5,
  },
  productDesc: {
    fontSize: 12,
    color: COLORS.gray,
  },
  productFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  interestText: {
    fontSize: 12,
    color: COLORS.primary,
    fontWeight: '500',
  },
  learnMoreButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  learnMoreText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: '500',
  },
  productsList: {
    paddingBottom: 20,
  },
});