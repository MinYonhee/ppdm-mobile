import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Profile from '../src/components/Profile';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        App criado para a disciplina de Programação para Dispositivos Móveis
      </Text>
      <Profile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6E6FA',
  },
  title: {
    color: '#800080',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});