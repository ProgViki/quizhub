// import * as Google from 'expo-auth-session/providers/google';
// import * as WebBrowser from 'expo-web-browser';
// import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
// import React, { useEffect } from 'react';
// import { Button, Text, View } from 'react-native';
// import { auth } from '../src/firebase';

// WebBrowser.maybeCompleteAuthSession();

// export default function LoginScreen({ navigation }) {
//   const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
//     clientId: "YOUR_GOOGLE_WEB_CLIENT_ID", // from Firebase -> Auth -> Sign in method -> Web
//   });

//   useEffect(() => {
//     if (response?.type === "success") {
//       const { id_token } = response.params;
//       const credential = GoogleAuthProvider.credential(id_token);
//       signInWithCredential(auth, credential).then(() => {
//         navigation.replace("Dashboard");
//       });
//     }
//   }, [response]);

//   return (
//     <View style={{ padding: 20 }}>
//       <Text>Login to take your quiz</Text>
//       <Button title="Login with Google" disabled={!request} onPress={() => promptAsync()} />
//     </View>
//   );
// }


import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter();

  const handleLogin = () => {
    // Placeholder for logic
    router.replace('./index');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Employee Quiz Portal</Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#ccc"
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#ccc"
        style={styles.input}
        secureTextEntry
      />

      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>By SaaS DevOps Team</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    color: 'orange',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 48,
  },
  input: {
    backgroundColor: '#1a1a1a',
    color: '#eee',
    padding: 14,
    borderRadius: 8,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#333',
  },
  button: {
    backgroundColor: 'orange',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#ff9900',
    shadowOpacity: 0.5,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  buttonText: {
    color: '#0a0a0a',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footerText: {
    color: 'gray',
    textAlign: 'center',
    marginTop: 40,
    fontSize: 12,
  },
});
