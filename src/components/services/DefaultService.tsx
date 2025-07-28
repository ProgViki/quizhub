import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '@/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function DefaultService() {
  const router = useRouter();
  
  const popularServices = [
    { name: 'Airtime', icon: 'phone-portrait-outline', screen: 'airtime' },
    { name: 'Data', icon: 'wifi-outline', screen: 'data' },
    { name: 'Electricity', icon: 'bulb-outline', screen: 'electricity' },
    { name: 'TV', icon: 'tv-outline', screen: 'tv' },
    { name: 'Transfer', icon: 'arrow-redo-outline', screen: 'transfer' },
    { name: 'Pay Bills', icon: 'receipt-outline', screen: 'bills' },
  ];

  return (
    <View style={styles.container}>
      <Image 
        source={require('@/assets/images/service-not-found.png')} 
        style={styles.image}
        resizeMode="contain"
      />
      
      <Text style={styles.title}>Service Not Found</Text>
      
      <Text style={styles.subtitle}>
        The service you're looking for isn't available, but here are some popular services you might like:
      </Text>
      
      <View style={styles.servicesGrid}>
        {popularServices.map((service, index) => (
          <TouchableOpacity 
            key={index}
            style={styles.serviceCard}
            // onPress={() => router.push(`/services/${service.screen}`)}
          >
            <View style={styles.serviceIcon}>
              <Ionicons 
                name={service.icon as any} 
                size={24} 
                color={COLORS.primary} 
              />
            </View>
            <Text style={styles.serviceName}>{service.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      
      <TouchableOpacity 
        style={styles.homeButton}
        onPress={() => router.push('/(tabs)/home')}
      >
        <Text style={styles.homeButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.gray,
    textAlign: 'center',
    marginBottom: 32,
    paddingHorizontal: 20,
    lineHeight: 24,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 32,
  },
  serviceCard: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 20,
  },
  serviceIcon: {
    backgroundColor: COLORS.secondary,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  serviceName: {
    fontSize: 14,
    color: COLORS.black,
    textAlign: 'center',
    fontWeight: '500',
  },
  homeButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 32,
    width: '100%',
    alignItems: 'center',
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
  },
  homeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});