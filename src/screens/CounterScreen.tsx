import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FloatingActionButton} from '../components/FloatingActionButton';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {counter}</Text>
      <FloatingActionButton
        signo="+1"
        setCounter={setCounter}
        counter={counter}
        position="br"
      />
      <FloatingActionButton
        signo="-1"
        setCounter={setCounter}
        counter={counter}
        position="bl"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    top: -15,
  },
  fabLocationBL: {
    position: 'absolute',
    bottom: 25,
    left: 25,
  },
  fabLocationBR: {
    position: 'absolute',
    right: 25,
    bottom: 25,
  },
  fab: {
    backgroundColor: '#5856d6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
  },
  fabText: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
