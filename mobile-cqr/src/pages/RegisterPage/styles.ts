import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{},
    
    logo:{
        marginLeft: 7,
        width: '100%',
        height: '30%',
        resizeMode: 'contain',
    },

    title: {
        flex: 1,
        textAlign: "center",
        marginTop: 400,
        justifyContent: "center"
    },

    containerForm:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },

    textInput:{
        borderWidth: 1,
        borderColor: '#777',
        borderRadius: 7,
        padding: 8,
        margin: 10,
        width: 250
    },

    btnAcesso:{
        backgroundColor: '#e74c3a', 
        width: 200,
        padding: 10,
        borderRadius: 7,
        marginTop: 10
    }, 

    textBtnAcesso:{
        color: '#FFF',
        textAlign: "center",
        justifyContent: 'center',
        fontFamily: 'Poppins_600SemiBold',
    },

    btnRegister:{
        color: '#606060',
        marginTop: 10,
        fontFamily:'Poppins_400Regular'
    }
});

export default styles;