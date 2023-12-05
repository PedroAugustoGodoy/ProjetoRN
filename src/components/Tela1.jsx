import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const Tela1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Leilão do Bessa</Text>

      {/* Botão para Cadastrar Veículo (direciona para Tela2) */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Tela2')}
      >
        <Text style={styles.buttonText}>Cadastrar Veículo</Text>
      </TouchableOpacity>

      {/* Botão para Participar do Leilão (direciona para Tela3) */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Tela3')}
      >
        <Text style={styles.buttonText}>Participar do Leilão</Text>
      </TouchableOpacity>

      {/* Botão para Sobre o Sistema (direciona para Tela4) */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Tela4')}
      >
        <Text style={styles.buttonText}>Sobre o Sistema</Text>
      </TouchableOpacity>
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

  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Tela1;