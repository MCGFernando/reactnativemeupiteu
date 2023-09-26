import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text, Alert, Pressable } from "react-native";

const Login = ({ navigation }) => {
    const [email, onChangeEmail] = React.useState('');
    const [senha, onChangeSenha] = React.useState('');

    return (
        <SafeAreaView>
            <Text style={styles.label}>E-mail</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                value={email}
                placeholder="Digite o e-mail..."
            />
            <Text style={styles.label}>Senha</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeSenha}
                value={senha}
                placeholder="Digite a senha..."
            />
            <Pressable style={styles.button} onPress={() => { navigation.navigate('Home'); console.log('pressed') }}>
                <Text style={styles.buttonText}>Entrar</Text>
            </Pressable>
            <Pressable style={styles.buttonSecundary} onPress={() => { navigation.navigate('Register'); console.log('pressed') }}>
                <Text style={styles.linkText}>Criar Conta</Text>
            </Pressable>
        </SafeAreaView >
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
    },label: {
        marginLeft: 12,
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 6,
      },
});

export default Login;