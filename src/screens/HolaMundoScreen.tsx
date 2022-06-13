import React from 'react';
import {View, Text} from 'react-native';

export const HolaMundoScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#045',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 30,
          color: 'white',
          textAlign: 'center',
        }}>
        Hola Mundo!
      </Text>
    </View>
  );
};
