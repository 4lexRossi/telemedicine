import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { RootStackParamList } from '../App';
import AppointmentList from '../components/AppointmentList';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'PatientDashboard'>;
};

const PatientDashboard: React.FC<Props> = ({ navigation }) => (
  <View style={{ flex: 1, padding: 24 }}>
    <Text style={{ fontSize: 24, marginBottom: 16 }}>Patient Dashboard</Text>
    <AppointmentList
      isPatient={true}
      onSelect={id => navigation.navigate('Appointment', { id })}
    />
    <Button title="Join Video Call" onPress={() => navigation.navigate('VideoCall')} />
  </View>
);

export default PatientDashboard;