import React from 'react';
import { Button, Text, View } from 'react-native';

interface Props {
  setUserType: React.Dispatch<React.SetStateAction<'patient' | 'provider' | null>>;
}

const LoginScreen: React.FC<Props> = ({ setUserType }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ fontSize: 24, marginBottom: 24 }}>Telemedicine Login</Text>
    <Button title="Login as Patient" onPress={() => setUserType('patient')} />
    <View style={{ height: 16 }} />
    <Button title="Login as Provider" onPress={() => setUserType('provider')} />
  </View>
);

export default LoginScreen;