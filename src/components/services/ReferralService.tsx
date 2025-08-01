import { View, Text, StyleSheet, TouchableOpacity, Share } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '@/src/constants/Colors';

export default function ReferralService() {
  const referralCode = 'ZEEPAY1234';
  const earnedAmount = '₦5,250';

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Join me on Zeepay! Use my referral code ${referralCode} to get ₦500 bonus on your first transaction. Download the app at https://zeepay.com`,
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Refer & Earn</Text>
      
      <View style={styles.referralCard}>
        <View style={styles.referralHeader}>
          <Ionicons name="gift-outline" size={32} color={COLORS.primary} />
          <Text style={styles.referralTitle}>Invite Friends, Earn Money</Text>
        </View>
        
        <Text style={styles.referralText}>
          Share your referral code with friends and earn ₦500 when they sign up and complete their first transaction.
        </Text>
        
        <View style={styles.codeContainer}>
          <Text style={styles.codeText}>{referralCode}</Text>
          <TouchableOpacity style={styles.copyButton}>
            <Text style={styles.copyButtonText}>Copy</Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
          <Ionicons name="share-social-outline" size={20} color={COLORS.white} />
          <Text style={styles.shareButtonText}>Share Referral Link</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.earningsCard}>
        <Text style={styles.earningsTitle}>Your Earnings</Text>
        <Text style={styles.earningsAmount}>{earnedAmount}</Text>
        <Text style={styles.earningsSubtext}>Total earned from referrals</Text>
        
        <TouchableOpacity style={styles.withdrawButton}>
          <Text style={styles.withdrawButtonText}>Withdraw Earnings</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Successful Referrals</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>5</Text>
          <Text style={styles.statLabel}>Pending Referrals</Text>
        </View>
      </View>
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
  referralCard: {
    backgroundColor: COLORS.secondary,
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  referralHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  referralTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color: COLORS.black,
  },
  referralText: {
    fontSize: 14,
    color: COLORS.black,
    marginBottom: 20,
    lineHeight: 20,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
  },
  codeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  copyButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  copyButtonText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '500',
  },
  shareButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shareButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  earningsCard: {
    backgroundColor: '#E3F2FD',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  earningsTitle: {
    fontSize: 16,
    color: COLORS.black,
    marginBottom: 5,
  },
  earningsAmount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 5,
  },
  earningsSubtext: {
    fontSize: 12,
    color: COLORS.gray,
    marginBottom: 15,
  },
  withdrawButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  withdrawButtonText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    width: '48%',
    backgroundColor: COLORS.secondary,
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: COLORS.gray,
    textAlign: 'center',
  },
});