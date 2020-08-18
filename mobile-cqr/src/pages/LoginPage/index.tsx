//OBSERVAÇÃO:
//Para a finalização da página falta arrumar o scroll

import React from 'react';
import { Text, View, Image,  KeyboardAvoidingView } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader';

import styles from './style';

const LoginPage: React.FC = () => {

    const { navigate } = useNavigation();

    const handleNavigateToRegisterPage = () => navigate('RegisterPage');
    
    const handleNavigateToMainPage = () => navigate('MainPage');
    
    return(
        <KeyboardAvoidingView>
            <View style={styles.container} >
            <PageHeader title="Login"/>
               
                <Image source={require('../../assets/images/login-img.png')} style={styles.logo}/>

                <View style={styles.containerForm}>
                    <TextInput
                    style={styles.textInput} 
                    autoCorrect={false}
                    placeholder='Email'
                    onChange={ () => {}}
                    
                    />

                    <TextInput
                    style={styles.textInput} 
                    autoCorrect={false}
                    placeholder='Senha'
                    onChange={ () => {}}
                    
                    />

                    <TouchableOpacity style={styles.btnAcesso} onPress={handleNavigateToMainPage}>
                        <Text style={styles.textBtnAcesso}>
                            Acessar
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleNavigateToRegisterPage}>
                        <Text  style={styles.btnRegister}>
                        Não tem conta? Registre-se
                        </Text>
                    </TouchableOpacity>
                </View>
        </View>
        </KeyboardAvoidingView>
        )
}

export default LoginPage;