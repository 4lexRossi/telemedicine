import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import AppointmentScreen from './screens/AppointmentScreen';
import LoginScreen from './screens/LoginScreen';
import PatientDashboard from './screens/PatientDashboard';
import ProviderDashboard from './screens/ProviderDashboard';
import VideoCallScreen from './screens/VideoCallScreen';

export type RootStackParamList = {
  Login: undefined;
  PatientDashboard: undefined;
  ProviderDashboard: undefined;
  Appointment: { id?: number };
  VideoCall: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  const [userType, setUserType] = useState<'patient' | 'provider' | null>(null);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!userType ? (
          <Stack.Screen name="Login" options={{ headerShown: false }}>
            {props => <LoginScreen {...props} setUserType={setUserType} />}
          </Stack.Screen>
        ) : userType === 'patient' ? (
          <>
            <Stack.Screen name="PatientDashboard" component={PatientDashboard} />
            <Stack.Screen name="Appointment" component={AppointmentScreen} />
            <Stack.Screen name="VideoCall" component={VideoCallScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="ProviderDashboard" component={ProviderDashboard} />
            <Stack.Screen name="Appointment" component={AppointmentScreen} />
            <Stack.Screen name="VideoCall" component={VideoCallScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}