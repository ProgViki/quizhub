import { Stack } from 'expo-router';

export default function ServicesLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="[service]" 
        options={{ 
          title: 'Services',
          headerBackTitle: 'Back'
        }} 
      />
    </Stack>
  );
}