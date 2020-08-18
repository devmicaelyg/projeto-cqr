import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';

import styles from './styles';

const RegisterPage: React.FC = () => {
    const { navigate } = useNavigation();

    const handleNavigateToRegisterPage = () => navigate('RegisterPage');
    return(
            <KeyboardAvoidingView >
         
                <View style={styles.container} >

                <PageHeader title="Registre-se" />
    
                    <Image source={require('../../assets/images/register-img.png')} style={styles.logo}/>
        
                    <View style={styles.containerForm}>

                        <TextInput
                        style={styles.textInput} 
                        autoCorrect={false}
                        placeholder='Nome'
                        onChange={ () => {}}
                        />
                        
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
                        
                        <TextInput
                        style={styles.textInput} 
                        autoCorrect={false}
                        placeholder='Confirme a senha'
                        onChange={ () => {}}
                        />
    
                        <TouchableOpacity style={styles.btnAcesso}>
                            <Text style={styles.textBtnAcesso}>
                                Registre-se
                            </Text>
                        </TouchableOpacity>
    
                        {/* <TouchableOpacity onPress={handleNavigateToRegisterPage}>
                            <Text  style={styles.btnRegister}>
                            Não tem conta? Registre-se
                            </Text>
                        </TouchableOpacity> */}
                    </View>
                </View>
            </KeyboardAvoidingView>
    )
}

export default RegisterPage;