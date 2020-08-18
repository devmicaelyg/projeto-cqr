import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // backgroundColor: '#f0f0f7'
        //  backgroundColor: '#e74c3a'
        // backgroundColor: '#171414'
        // backgroundColor: '#282a36'
    },

    logo: {
        width: '100%',
        resizeMode: 'contain',
        alignContent: "center",
        marginTop: -70
    },

    title: {
         marginTop: 100,
         fontSize: 30,
         fontFamily:'Poppins_600SemiBold',
         marginLeft: 5,
         color: '#FFF'
        //  color: '#171414'
    },

    titleS:{
        fontFamily:'Poppins_400Regular',
        fontSize: 15,
        width: '68%',
        marginLeft: 10,
        color: '#FFF',
        // color: '#202020',
        textAlign:'left'
    },

    buttonContainer: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-evenly"
    },

    login: {
        // backgroundColor: '#ffbd59',
        backgroundColor:'#e74c3a',
        padding: 10,
        borderRadius: 10,
        width: '40%',
        marginTop: -40
    },

    register: {
        //  backgroundColor: '#ffbd59',
        backgroundColor:'#e74c3a',
        padding: 10,
        borderRadius: 10,
        width: '40%',
        marginTop: -40
    },

    buttonTextLogin:{
        textAlign: "center",
        fontFamily: 'Poppins_600SemiBold',
        color: '#FFF'
      
    },
    
    buttonTextRegister:{
        textAlign: "center",
        fontFamily: 'Poppins_600SemiBold',
        color: '#FFF'
    },

    subTitle:{
        textAlign: "center",
        fontFamily: 'Poppins_400Regular', 
        marginTop: 50,
        color: '#FFF'
        // color: '#202020'
    },
});

export default styles;