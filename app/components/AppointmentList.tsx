import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Appointment } from '../types/appointement';

const appointments: Appointment[] = [
  { id: 1, time: '2025-11-10T09:00', patient: 'Alice', provider: 'Dr. Bob' },
  { id: 2, time: '2025-11-10T13:30', patient: 'John', provider: 'Dr. Eva' },
];

interface Props {
  isPatient: boolean;
  onSelect: (id: number) => void;
}

const AppointmentList: React.FC<Props> = ({ isPatient, onSelect }) => (
  <View style={{ marginBottom: 24 }}>
    <Text style={{ fontWeight: 'bold', marginBottom: 8 }}>Upcoming Appointments</Text>
    {appointments.map(a => (
      <TouchableOpacity key={a.id} onPress={() => onSelect(a.id)}>
        <View
          style={{
            backgroundColor: '#f1f1f1',
            padding: 12,
            marginVertical: 6,
            borderRadius: 8,
          }}
        >
          <Text>{a.time.replace('T', ' ')}</Text>
          <Text>
            {isPatient ? `Provider: ${a.provider}` : `Patient: ${a.patient}`}
          </Text>
        </View>
      </TouchableOpacity>
    ))}
  </View>
);

export default AppointmentList;