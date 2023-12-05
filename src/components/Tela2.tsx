// Tela2.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const Tela2 = () => {
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState('');
  const [cor, setCor] = useState('');

  const handleSalvar = () => {
    // Aqui você pode adicionar a lógica para salvar as informações no seu banco de dados ou realizar outras ações necessárias.
    // Por enquanto, apenas exibiremos os valores no console.
    console.log('Modelo:', modelo);
    console.log('Ano:', ano);
    console.log('Cor:', cor);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cadastrar Veículo</Text>

      {/* Componente Modelo */}
      <Text style={styles.label}>Modelo:</Text>
      <TextInput
        style={styles.input}
        placeholder="Insira o modelo do veículo"
        onChangeText={(text) => setModelo(text)}
        value={modelo}
      />

      {/* Componente Ano */}
      <Text style={styles.label}>Ano:</Text>
      <TextInput
        style={styles.input}
        placeholder="Insira o ano de fabricação"
        onChangeText={(text) => setAno(text)}
        value={ano}
      />

      {/* Componente Cor */}
      <Text style={styles.label}>Cor:</Text>
      <TextInput
        style={styles.input}
        placeholder="Insira a cor do veículo"
        onChangeText={(text) => setCor(text)}
        value={cor}
      />

      {/* Botão Salvar */}
      <TouchableOpacity style={styles.button} onPress={handleSalvar}>
        <Text style={styles.buttonText}>Salvar</Text>
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

  label: {
    fontSize: 16,
    marginTop: 10,
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
  },

  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Tela2;