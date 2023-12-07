import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const Tela3 = ({ navigation }) => {
  const [fipeValue, setFipeValue] = useState('');
  const [valorInicial, setValorInicial] = useState('');
  const [valorDoLance, setValorDoLance] = useState('');

  const taxaLeiloeiro = 0.05; // 5%
  const taxaPatio = 130;
  const taxaLogistica = 200;
  const taxaAdministracao = 150;

  useEffect(() => {
    setValorDoLance(valorInicial);
  }, [valorInicial]);

  const handleAdicionar300 = () => {
    setValorDoLance((prevValue) => (parseFloat(prevValue) || 0) + 300);
  };

  const handleAdicionar500 = () => {
    setValorDoLance((prevValue) => (parseFloat(prevValue) || 0) + 500);
  };

  const handleValorInicialChange = (text) => {
    setValorInicial(text);
  };

  const calcularTaxaLeiloeiro = () => {
    return (valorDoLance * taxaLeiloeiro).toFixed(2);
  };

  const calcularTaxaPatio = () => {
    return taxaPatio.toFixed(2);
  };

  const calcularTaxaLogistica = () => {
    return taxaLogistica.toFixed(2);
  };

  const calcularTaxaAdministracao = () => {
    return taxaAdministracao.toFixed(2);
  };

  const calcularValorTotalArremate = () => {
    const valorLance = parseFloat(valorDoLance) || 0;
    const valorLeiloeiro = valorLance * taxaLeiloeiro;
    const valorTotal =
      valorLance + valorLeiloeiro + taxaPatio + taxaLogistica + taxaAdministracao;
    return valorTotal.toFixed(2);
  };

  const avaliarCompra = () => {
    const diferencaPercentual =
      ((parseFloat(calcularValorTotalArremate()) - parseFloat(fipeValue)) /
        parseFloat(fipeValue)) *
      100;

    let mensagem = '';
    let corSinalizacao = 'yellow'; // Padrão: amarelo

    if (diferencaPercentual <= -35) {
      mensagem = 'Boa compra!';
      corSinalizacao = 'green';
    } else if (diferencaPercentual <= -30) {
      mensagem = 'Compra dentro da margem de variação aceitável.';
    } else {
      mensagem = 'Cuidado! Possível má compra.';
      corSinalizacao = 'red';
    }

    return { mensagem, corSinalizacao };
  };

  const { mensagem, corSinalizacao } = avaliarCompra();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Leilão do Bessa</Text>

      <Text>FIPE:</Text>
      <TextInput
        style={styles.input}
        placeholder="Insira o valor do veículo"
        value={fipeValue}
        onChangeText={(text) => setFipeValue(text)}
      />

      <Text>Valor Inicial:</Text>
      <TextInput
        style={styles.input}
        placeholder="Insira o valor inicial"
        keyboardType="numeric"
        value={valorInicial}
        onChangeText={handleValorInicialChange}
      />

      <Text>Valor do Lance: {valorDoLance}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleAdicionar300}>
          <Text style={styles.buttonText}>+300</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleAdicionar500}>
          <Text style={styles.buttonText}>+500</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.resultText}>
        Valor Total do Arremate: R$ {calcularValorTotalArremate()}
      </Text>

      {/* Informações sobre as taxas */}
      <Text style={styles.taxLabel}>Informações sobre as taxas:</Text>
      <Text style={styles.taxText}>
        Taxa leiloeiro: 5% do valor do arremate - R$ {calcularTaxaLeiloeiro()}
      </Text>
      <Text style={styles.taxText}>Taxa de pátio: R$ {calcularTaxaPatio()}</Text>
      <Text style={styles.taxText}>Taxa de logística: R$ {calcularTaxaLogistica()}</Text>
      <Text style={styles.taxText}>
        Taxa de administração: R$ {calcularTaxaAdministracao()}
      </Text>

      {/* Comparação de compra */}
      <View style={[styles.compraContainer, { backgroundColor: corSinalizacao }]}>
        <Text style={styles.compraText}>{mensagem}</Text>
      </View>
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

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  resultText: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },

  taxLabel: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },

  taxText: {
    marginTop: 5,
    fontSize: 16,
    color: 'black',
  },

  compraContainer: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
  },

  compraText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default Tela3;