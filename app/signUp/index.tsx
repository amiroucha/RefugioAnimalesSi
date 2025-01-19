import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import { GlobalStyles } from '../../theme/GlobalStyles';

const signUp = () => {
  return (
    <View style = {GlobalStyles.contenedorRegistro}>
        <View style={{height:100, width:'100%' , position:'absolute', top:13}}>
            <Image 
            source={require("../../assets/images/logo_2.png")}
            style={{width: 60, height:60, position:'relative', left:'77%'}}
            ></Image>
        </View>

        <Text style={GlobalStyles.tituloRegistro}>Bienvenido a</Text>
        <Text style={GlobalStyles.PetConnectRegistro}>Petconnect</Text>
        <Image 
          source={require("../../assets/images/perroGatoJuntos.png")}
          style={GlobalStyles.perroGato}
        ></Image>

        <View style={GlobalStyles.contenedorNegro}>
            
        <Image 
            source={require("../../assets/images/huellaBlanca.png")}
            style={GlobalStyles.pataNaranjaArriba}
        ></Image>
        <Text style= {GlobalStyles.textoUnirse}>¡Hazte parte del refugio!</Text>
        <Image 
             source={require("../../assets/images/huellaBlanca.png")}
            style={GlobalStyles.pataNaranjaAbajo}
        ></Image>
        <TextInput
            style={GlobalStyles.input}
            placeholder="Contraseña"
        />
         <TextInput
            style={GlobalStyles.input}
            placeholder="Contraseña"
        />
         <TextInput
            style={GlobalStyles.input}
            placeholder="Contraseña"
        />
         <TextInput
            style={GlobalStyles.input}
            placeholder="Contraseña"
        />
                
            


        </View>


    </View>  )
}

export default signUp