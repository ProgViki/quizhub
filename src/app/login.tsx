import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { auth } from '../src/firebase';

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen({ navigation }) {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: "YOUR_GOOGLE_WEB_CLIENT_ID", // from Firebase -> Auth -> Sign in method -> Web
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential).then(() => {
        navigation.replace("Dashboard");
      });
    }
  }, [response]);

  return (
    <View style={{ padding: 20 }}>
      <Text>Login to take your quiz</Text>
      <Button title="Login with Google" disabled={!request} onPress={() => promptAsync()} />
    </View>
  );
}
