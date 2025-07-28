import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import AirtimeService from '@/components/services/AirtimeService';
import DataService from '@/components/services/DataService';
import TVService from '@/components/services/TVService';
import ElectricityService from '@/components/services/ElectricityService';

export default function ServiceScreen() {
  const { service } = useLocalSearchParams();

  const renderService = () => {
    switch(service) {
      case 'airtime':
        return <AirtimeService />;
      case 'data':
        return <DataService />;
      case 'tv':
        return <TVService />;
      case 'electricity':
        return <ElectricityService />;
      case 'refer':
        return <ReferralService />;
      case 'checkin':
        return <CheckinService />;
      case 'finance':
        return <FinancialService />;
      default:
        return <DefaultService />;
    }
  };

  return (
    <View style={styles.container}>
      {renderService()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});