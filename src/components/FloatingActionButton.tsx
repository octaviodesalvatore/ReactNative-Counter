import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';

interface Props {
  signo: string;
  setCounter: (value: number) => void;
  counter: number;
  position?: 'br' | 'bl';
}

export function FloatingActionButton({
  signo,
  setCounter,
  counter,
  position = 'br',
}: Props) {
  const ios = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={[
          styles.fabLocation,
          position === 'br' ? styles.right : styles.left,
        ]}
        onPress={() =>
          setCounter(position === 'br' ? counter + 1 : counter - 1)
        }>
        <View style={styles.fab}>
          <Text style={styles.fabText}>{signo}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const android = () => {
    return (
      <View
        style={[
          styles.fabLocation,
          position === 'br' ? styles.right : styles.left,
        ]}>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}
          onPress={() =>
            setCounter(position === 'br' ? counter + 1 : counter - 1)
          }>
          <View style={styles.fab}>
            <Text style={styles.fabText}>{signo}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  return Platform.OS === 'ios' ? ios() : android();
}

const styles = StyleSheet.create({
  fabLocation: {
    position: 'absolute',
    bottom: 25,
  },
  right: {
    right: 25,
  },
  left: {
    left: 25,
  },
  fab: {
    backgroundColor: '#5856d6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  fabText: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
