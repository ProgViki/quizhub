import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
  screenOptions={({ route }) => ({
    headerShown: false,
    tabBarStyle: { backgroundColor: '#0a0a0a' },
    tabBarActiveTintColor: 'orange',
    tabBarInactiveTintColor: 'gray',
    tabBarIcon: ({ color, size }) => {
      const icons = {
        home: 'home',
        quiz: 'document-text',
      } as const;

      const iconName = icons[route.name as keyof typeof icons];

      return <Ionicons name={iconName} size={size} color={color} />;
    },
  })}
/>

  );
}
