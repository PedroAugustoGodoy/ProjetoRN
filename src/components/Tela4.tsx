// Tela4.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Tela4 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sobre o Sistema</Text>
      <Text style={styles.text}>
        O projeto se trata de um aplicativo que permite cadastrar carros e participar de leilões. Os usuários podem inserir informações sobre o veículo, como o valor FIPE, e o sistema fornece uma avaliação sobre a viabilidade do arremate no leilão, considerando taxas e valores adicionais.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  text: {
    fontSize: 16,
    textAlign: 'justify',
  },
});

export default Tela4;