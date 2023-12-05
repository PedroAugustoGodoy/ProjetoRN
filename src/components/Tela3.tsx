import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const Tela3 = ({ navigation }) => {
  const [fipeValue, setFipeValue] = useState('');
  const [valorInicial, setValorInicial] = useState(0);
  const [valorDoLance, setValorDoLance] = useState(valorInicial);

  const handlePress = (amount) => {
    setValorDoLance(valorDoLance + amount);
  };

  const handleValorInicialChange = (text) => {
    const numericValue = parseFloat(text);
    if (!isNaN(numericValue)) {
      setValorInicial(numericValue);
      setValorDoLance(numericValue);
    }
  };

  const calcularTaxaLeiloeiro = () => {
    return (valorDoLance * 0.05).toFixed(2);
  };

  const calcularTaxaPatio = () => {
    return 1300.00.toFixed(2);
  };

  const calcularTaxaLogistica = () => {
    return 200.00.toFixed(2);
  };

  const calcularTaxaAdministracao = () => {
    return 150.00.toFixed(2);
  };

  const calcularTotalComTaxas = () => {
    const totalTaxas =
      parseFloat(calcularTaxaLeiloeiro()) +
      parseFloat(calcularTaxaPatio()) +
      parseFloat(calcularTaxaLogistica()) +
      parseFloat(calcularTaxaAdministracao());

    return (valorDoLance + totalTaxas).toFixed(2);
  };

  const calcularDiferencaPercentual = () => {
    const diferencaPercentual = ((calcularTotalComTaxas() - parseFloat(fipeValue)) / parseFloat(fipeValue)) * 100;
    return diferencaPercentual.toFixed(2);
  };

  const avaliarCompra = () => {
    const totalComTaxas = parseFloat(calcularTotalComTaxas());
    const diferencaPercentual = ((totalComTaxas - parseFloat(fipeValue)) / parseFloat(fipeValue)) * 100;

    let mensagem = '';
    let corSinalizacao = 'yellow'; // Padrão é o amarelo

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
      <Text style={styles.header}>Participar do Leilão</Text>

      {/* Inserir Valor FIPE */}
      <Text style={styles.label}>FIPE:</Text>
      <TextInput
        style={styles.input}
        placeholder="Insira o valor FIPE"
        onChangeText={(text) => setFipeValue(text)}
        value={fipeValue}
      />

      {/* Inserir Valor Inicial */}
      <Text style={styles.label}>Valor Inicial:</Text>
      <TextInput
        style={styles.input}
        placeholder="Insira o valor inicial"
        keyboardType="numeric"
        onChangeText={handleValorInicialChange}
        value={valorInicial.toString()}
      />

      {/* Mostrar Valor do Lance */}
      <Text style={styles.label}>Valor do Lance:</Text>
      <Text style={styles.valueText}>{valorDoLance}</Text>

      {/* Botões para adicionar valores */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handlePress(300)}>
          <Text style={styles.buttonText}>+300</Text>
        </TouchableOpacity>

        <View style={styles.buttonSpacer} />

        <TouchableOpacity style={styles.button} onPress={() => handlePress(500)}>
          <Text style={styles.buttonText}>+500</Text>
        </TouchableOpacity>
      </View>

      {/* Comparação de compra */}
      <View style={[styles.compraContainer, { backgroundColor: corSinalizacao }]}>
        <Text style={styles.compraText}>{mensagem}</Text>
      </View>

      {/* Diferença de preço em porcentagem */}
      <Text style={styles.label}>Diferença de preço:</Text>
      <Text style={styles.valueText}>
        {((parseFloat(calcularTotalComTaxas()) - parseFloat(fipeValue)) / parseFloat(fipeValue) * 100).toFixed(2)}%
      </Text>

      {/* Informações sobre as taxas */}
      <Text style={styles.taxLabel}>Informações sobre as taxas:</Text>
      <Text style={styles.taxText}>Taxa leiloeiro: 5% do valor do arremate - R${calcularTaxaLeiloeiro()}</Text>
      <Text style={styles.taxText}>Taxa de pátio: R$ {calcularTaxaPatio()}</Text>
      <Text style={styles.taxText}>Taxa de logística: R$ {calcularTaxaLogistica()}</Text>
      <Text style={styles.taxText}>Taxa de administração: R$ {calcularTaxaAdministracao()}</Text>
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

  valueText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },

  buttonSpacer: {
    width: 10, // Espaçamento entre os botões
  },

  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },

  taxLabel: {
    fontSize: 16,
    marginTop: 20,
    fontWeight: 'bold',
  },

  taxText: {
    fontSize: 14,
    marginTop: 5,
  },

  compraContainer: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },

  compraText: {
    color: 'black',
  },
});

export default Tela3;