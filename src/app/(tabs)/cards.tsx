import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '@/src/constants/Colors';

export default function CardsScreen() {
  const [activeTab, setActiveTab] = useState<'virtual' | 'physical'>('virtual');
  const [isAgreed, setIsAgreed] = useState(false);

  const CardDetails = {
    virtual: {
      title: 'Virtual Card',
      image: require('@/assets/images/neoscan.png'),
      features: [
        'Instant digital card issuance',
        'Use for online purchases immediately',
        'Enhanced security with dynamic CVV',
        'No physical card delivery wait'
      ],
      buttonText: 'Get Virtual Card'
    },
    physical: {
      title: 'Physical Card',
      image: require('@/assets/images/neoscan.png'),
      features: [
        'Premium metal or plastic card',
        'Worldwide ATM access',
        'Contactless payments',
        '24/7 customer support'
      ],
      buttonText: 'Order Physical Card'
    }
  };

  const currentCard = CardDetails[activeTab];

  return (
    <ScrollView style={styles.container}>
      {/* Tab Switcher */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'virtual' && styles.activeTab]}
          onPress={() => setActiveTab('virtual')}
        >
          <Text style={[styles.tabText, activeTab === 'virtual' && styles.activeTabText]}>
            Virtual Card
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'physical' && styles.activeTab]}
          onPress={() => setActiveTab('physical')}
        >
          <Text style={[styles.tabText, activeTab === 'physical' && styles.activeTabText]}>
            Physical Card
          </Text>
        </TouchableOpacity>
      </View>

      {/* Card Display */}
      <View style={styles.cardContainer}>
        <Image 
          source={currentCard.image} 
          style={styles.cardImage} 
          resizeMode="contain"
        />
      </View>

      {/* Features List */}
      <View style={styles.featuresContainer}>
        <Text style={styles.featuresTitle}>Key Features:</Text>
        {currentCard.features.map((feature, index) => (
          <View key={index} style={styles.featureItem}>
            <Ionicons name="checkmark-circle" size={20} color={COLORS.primary} />
            <Text style={styles.featureText}>{feature}</Text>
          </View>
        ))}
      </View>

      {/* Terms Agreement */}
      <View style={styles.termsContainer}>
        <TouchableOpacity 
          style={styles.checkboxContainer}
          onPress={() => setIsAgreed(!isAgreed)}
        >
          <View style={[styles.checkbox, isAgreed && styles.checkedBox]}>
            {isAgreed && <Ionicons name="checkmark" size={14} color="white" />}
          </View>
          <Text style={styles.termsText}>
            I agree to the terms and conditions of the {currentCard.title}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Get Card Button */}
      <TouchableOpacity 
        style={[styles.button, !isAgreed && styles.disabledButton]}
        disabled={!isAgreed}
        onPress={() => console.log(`${currentCard.title} requested`)}
      >
        <Text style={styles.buttonText}>{currentCard.buttonText}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    padding: 16,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
  },
  tab: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: COLORS.primary,
  },
  tabText: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.gray,
  },
  activeTabText: {
    color: COLORS.white,
  },
  cardContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  featuresContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },
  featuresTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 15,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  featureText: {
    fontSize: 14,
    color: COLORS.black,
    marginLeft: 10,
    flex: 1,
  },
  termsContainer: {
    marginBottom: 25,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: COLORS.gray,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedBox: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  termsText: {
    fontSize: 14,
    color: COLORS.black,
    flex: 1,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 30,
  },
  disabledButton: {
    backgroundColor: COLORS.lightGray,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});