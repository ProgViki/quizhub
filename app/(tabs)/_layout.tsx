import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';

type IconName =
  | "home"
  | "home-outline"
  | "list"
  | "list-outline"
  | "time"
  | "person"
  | "time-outline"
  | "person-outline"
  | "grid"
  | "grid-outline";
const TabBarIcon = ({
  name,
  color,
  focused,
}: {
  name: IconName;
  color: string;
  focused: boolean;
}) => {
  const iconMap: Record<IconName, IconName> = {
    home: "home-outline",
    "home-outline": "home",
    list: "list-outline",
    "list-outline": "list",
    time: "time-outline",
    "time-outline": "time",
    person: "person-outline",
    "person-outline": "person",
    grid: "grid-outline",
    "grid-outline": "grid",
  };
  return (
    <Ionicons name={focused ? name : iconMap[name]} color={color} size={24} />
  );
};


export default function TabLayout() {
  const colorScheme = useColorScheme();


  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="home" color={color} focused={focused} />
          ),
        }}
      />
       <Tabs.Screen
        name="result"
        options={{
          title: "Result",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="list" color={color} focused={focused} />
          ),
        }}
      />
        <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="person" color={color} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
