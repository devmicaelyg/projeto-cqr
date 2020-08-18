import React from 'react';
import { Text, View, Image, Button, StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

import Logo from '../../assets/images/logo2-cqr.png';

import styles from './style';

const PaginaInicial = () => {
    const { navigate } = useNavigation();

    const handleNavigateToLoginPage = () => navigate('LoginPage');

    const handleNavigateToRegisterPage = () => navigate('RegisterPage');

    return(
       <View style={styles.container}>
            <LinearGradient
          // Background Linear Gradient
          colors={['rgb(226,55,24)', 'transparent']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 1000,
          }}
        />
           <View>
                <Text style={styles.title}> O melhor da região! </Text>
                <Text style={styles.titleS}> Registre-se e ganhe 10% de desconto no seu primeiro pedido!</Text>
           </View>
           <Image source={ Logo } style={styles.logo} />

        <View style={styles.buttonContainer}>
            <RectButton onPress={handleNavigateToLoginPage} style={styles.login}>
                <Text style={styles.buttonTextLogin}> Login </Text>
            </RectButton>
            <RectButton onPress={handleNavigateToRegisterPage} style={styles.register}>
                <Text style={styles.buttonTextRegister}> Registre-se </Text>
            </RectButton>
        </View>
          

           <Text style={styles.subTitle}> Continue sem logar </Text>
       </View>
    );
}

export default PaginaInicial;