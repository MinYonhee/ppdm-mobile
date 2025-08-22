import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/profile.jpeg')}
        style={styles.photo}
      />
      <Text style={styles.name}>Beatriz Costa</Text> 
      <Text style={styles.bio}>
        Olá! Eu sou a Bea, atualmente estudante de Sistemas para Internet. Bacharel em Comunicação Social - Publicidade e Propaganda e Técnica em Jogos Digitais. Atuo como Desenvovedora Junior FrontEnd, em um projeto Mobile. Apaixonada por gatos e livros ^^
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
    padding: 20,
    backgroundColor: '#',
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50, 
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3C096C',
  },
  bio: {
    fontSize: 14,
    textAlign: 'center',
    color: '#3C096C',
  },
});

export default Profile;