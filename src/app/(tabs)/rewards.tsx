import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { COLORS } from '@/src/constants/Colors';

export default function RewardsScreen() {
  // User rewards data
  const userRewards = {
    points: 1250,
    level: 'Gold',
    progress: 65,
    nextLevel: 'Platinum',
  };

  // Featured financial products
  const financialProducts = [
    {
      id: '1',
      name: 'Zeepay Wealth',
      icon: 'trending-up',
      description: 'Earn up to 15% annual returns on your investments',
      reward: 'Get ₦500 bonus on first investment',
      color: '#FF6B6B',
    },
    {
      id: '2',
      name: 'Target Savings',
      icon: 'bullseye',
      description: 'Save towards specific goals and earn rewards',
      reward: '1% cashback on all deposits',
      color: '#4ECDC4',
    },
    {
      id: '3',
      name: 'Fixed Deposit',
      icon: 'lock',
      description: 'Lock funds for higher interest rates',
      reward: 'Extra 0.5% interest for Gold members',
      color: '#45B7D1',
    },
    {
      id: '4',
      name: 'Round-Up Savings',
      icon: 'piggy-bank',
      description: 'Automatically save spare change from transactions',
      reward: 'Double points on all round-ups',
      color: '#A78BFA',
    },
  ];

  // Daily rewards
  const dailyRewards = [
    { id: '1', name: 'Check-in Bonus', points: 10, claimed: true },
    { id: '2', name: 'Transfer Reward', points: 5, claimed: false },
    { id: '3', name: 'Payment Reward', points: 8, claimed: false },
    { id: '4', name: 'Referral Bonus', points: 50, claimed: false },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Rewards Header */}
      <View style={styles.header}>
        <View style={styles.pointsContainer}>
          <Text style={styles.pointsLabel}>Your Points</Text>
          <Text style={styles.pointsValue}>{userRewards.points.toLocaleString()}</Text>
        </View>
        
        <View style={styles.levelContainer}>
          <View style={styles.levelBadge}>
            <Text style={styles.levelText}>{userRewards.level}</Text>
          </View>
          <Text style={styles.levelInfo}>Member</Text>
        </View>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View 
            style={[
              styles.progressFill, 
              { width: `${userRewards.progress}%` }
            ]} 
          />
        </View>
        <Text style={styles.progressText}>
          {userRewards.progress}% to {userRewards.nextLevel}
        </Text>
      </View>

      {/* Daily Rewards */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Daily Rewards</Text>
        <View style={styles.rewardsGrid}>
          {dailyRewards.map((reward) => (
            <TouchableOpacity 
              key={reward.id} 
              style={[
                styles.rewardCard,
                reward.claimed && styles.claimedCard
              ]}
              disabled={reward.claimed}
            >
              <View style={styles.rewardIcon}>
                <Ionicons 
                  name="gift" 
                  size={24} 
                  color={reward.claimed ? COLORS.gray : COLORS.primary} 
                />
              </View>
              <Text style={styles.rewardName}>{reward.name}</Text>
              <Text style={styles.rewardPoints}>+{reward.points} pts</Text>
              {reward.claimed && (
                <Text style={styles.claimedText}>Claimed</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Featured Financial Products */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Grow Your Money</Text>
        <Text style={styles.sectionSubtitle}>Earn rewards while you save and invest</Text>
        
        <FlatList
          data={financialProducts}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.productsContainer}
          renderItem={({ item }) => (
            <View style={[styles.productCard, { backgroundColor: item.color }]}>
              <View style={styles.productHeader}>
                <View style={styles.productIcon}>
                  <MaterialCommunityIcons 
                    name={item.icon as any} 
                    size={24} 
                    color="white" 
                  />
                </View>
                <Text style={styles.productName}>{item.name}</Text>
              </View>
              
              <Text style={styles.productDescription}>{item.description}</Text>
              <Text style={styles.productReward}>{item.reward}</Text>
              
              <TouchableOpacity style={styles.productButton}>
                <Text style={styles.productButtonText}>Learn More</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      {/* Special Offers */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Special Offers</Text>
        <View style={styles.offerCard}>
          <Image 
            source={require('@/assets/images/scanhubs.png')} 
            style={styles.offerImage}
          />
          <View style={styles.offerContent}>
            <Text style={styles.offerTitle}>Double Points Week!</Text>
            <Text style={styles.offerText}>
              Earn double reward points on all transactions this week
            </Text>
            <TouchableOpacity style={styles.offerButton}>
              <Text style={styles.offerButtonText}>Activate Offer</Text>
            </TouchableOpacity>
          </View>
        </View>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  pointsContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    flex: 1,
    marginRight: 10,
  },
  pointsLabel: {
    fontSize: 14,
    color: COLORS.gray,
    marginBottom: 5,
  },
  pointsValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  levelContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    width: 100,
  },
  levelBadge: {
    backgroundColor: '#FFD700',
    paddingHorizontal: 12,
    paddingVertical: 3,
    borderRadius: 10,
    marginBottom: 5,
  },
  levelText: {
    color: COLORS.black,
    fontWeight: 'bold',
    fontSize: 14,
  },
  levelInfo: {
    fontSize: 12,
    color: COLORS.gray,
  },
  progressContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  progressBar: {
    height: 10,
    backgroundColor: COLORS.lightGray,
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: 5,
  },
  progressText: {
    fontSize: 12,
    color: COLORS.gray,
    textAlign: 'center',
  },
  section: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 10,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: COLORS.gray,
    marginBottom: 15,
  },
  rewardsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  rewardCard: {
    width: '48%',
    backgroundColor: COLORS.secondary,
    borderRadius: 10,
    padding: 15,
    marginBottom: 12,
    alignItems: 'center',
  },
  claimedCard: {
    backgroundColor: '#F0F0F0',
  },
  rewardIcon: {
    marginBottom: 8,
  },
  rewardName: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.black,
    marginBottom: 5,
    textAlign: 'center',
  },
  rewardPoints: {
    fontSize: 12,
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  claimedText: {
    fontSize: 10,
    color: COLORS.gray,
    marginTop: 5,
  },
  productsContainer: {
    paddingVertical: 8,
  },
  productCard: {
    width: 200,
    borderRadius: 12,
    padding: 16,
    marginRight: 12,
  },
  productHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  productIcon: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  productDescription: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.9)',
    marginBottom: 10,
  },
  productReward: {
    fontSize: 12,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 15,
  },
  productButton: {
    backgroundColor: COLORS.white,
    padding: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
  productButtonText: {
    color: COLORS.primary,
    fontSize: 12,
    fontWeight: 'bold',
  },
  offerCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.secondary,
    borderRadius: 10,
    overflow: 'hidden',
  },
  offerImage: {
    width: 100,
    height: '100%',
  },
  offerContent: {
    flex: 1,
    padding: 12,
  },
  offerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 5,
  },
  offerText: {
    fontSize: 12,
    color: COLORS.gray,
    marginBottom: 10,
  },
  offerButton: {
    backgroundColor: COLORS.primary,
    padding: 6,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  offerButtonText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
});