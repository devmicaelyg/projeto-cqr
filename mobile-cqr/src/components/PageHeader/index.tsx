import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';

interface PageHeaderProps{
    title: string;
}
const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {

    const { navigate } = useNavigation();

    const handleNavigateToRegisterPage = () => navigate("PaginaInicial");

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={handleNavigateToRegisterPage} style={styles.iconBack}>
                <Feather name="arrow-left" size={20} color="#FFF" />
            </TouchableOpacity>
            <Text style={styles.titleHeader}>{title}</Text>
        </View>
    );
}

export default PageHeader;