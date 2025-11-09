import { useRouter } from 'expo-router';
import React from 'react';
import { Button, Text, View } from 'react-native';

// Placeholder for Twilio/Jitsi integration
const VideoCallScreen = () => {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 32 }}>Video Call Screen</Text>
      <Text style={{ marginBottom: 32 }}>Integrate Twilio or WebRTC SDK here!</Text>
      <Button title="End Call" onPress={() => router.back()} />
    </View>
  );
};

export default VideoCallScreen;