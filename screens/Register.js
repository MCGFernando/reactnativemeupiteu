import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text, Alert, Pressable  } from "react-native";

const Register = ({ navigation }) => {
    const [nome, onChangeNome] = React.useState('');
    const [email, onChangeEmail] = React.useState('');
    const [senha, onChangeSenha] = React.useState('');
    const [confirmaSenha, onChangeConfirmaEmail] = React.useState('');
    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNome}
                value={nome}
                placeholder="Digite o nome..."
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                value={email}
                placeholder="Digite o e-mail..."
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeSenha}
                value={senha}
                placeholder="Digite a senha..."
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeConfirmaEmail}
                value={confirmaSenha}
                placeholder="Confirme a senha..."
            />
            <Pressable style={styles.button} onPress={() => Alert.alert('Simple Button pressed')}>
                <Text style={styles.buttonText}>Registrar</Text>
            </Pressable>
            <Pressable style={styles.buttonSecundary} onPress={() => { navigation.navigate('Login'); console.log('pressed') }}>
                <Text style={styles.linkText}>Entrar</Text>
            </Pressable>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    button: {
        height: 40,
        margin: 12,
        padding: 10,
        textAlign: 'center',
        backgroundColor: "#0081F1"
    },
    buttonSecundary: {
        height: 40,
        margin: 12,
        padding: 10,
        textAlign: 'center'
    },
    linkText: {
        color: 'blue',
        textDecorationLine: 'underline',
        textAlign: 'center'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
  });
export default Register;