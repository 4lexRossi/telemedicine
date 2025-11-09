import { RouteProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { RootStackParamList } from '../App';

type AppointmentScreenRouteProp = RouteProp<RootStackParamList, 'Appointment'>;

type Props = {
  route: AppointmentScreenRouteProp;
};

const AppointmentScreen: React.FC<Props> = ({ route }) => {
  const { id } = route.params || {};
  const [notes, setNotes] = useState<string>('');

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Text style={{ fontSize: 20 }}>Appointment Details {id ? `#${id}` : ''}</Text>
      <Text style={{ marginTop: 24 }}>Notes:</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          marginBottom: 24,
          padding: 8,
          borderRadius: 4,
        }}
        value={notes}
        onChangeText={setNotes}
        placeholder="Add notes or prescription"
        multiline
      />
      <Button title="Save" onPress={() => alert('Saved (stub)!')} />
    </View>
  );
};

export default AppointmentScreen;