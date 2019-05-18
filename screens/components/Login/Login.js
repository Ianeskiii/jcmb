import React, { Component } from "react";
import { NavigationActions } from "react-navigation"
import { 
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import Home from '../../../Home'; 

export default class Login extends Component {

    componentDidMount(){
    setTimeOut( () => {
        NavigationActions.navigate('Home');
    }, 5000 );
    }
   setTimeOut(() => {
     Actions.yourNextSceneName()
  }, milliseconds)
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                  <Image source={require('../../../assets/faithsplash.png')} />
                 </View>
                 <View style={styles.formContainer}>
                 </View>
            </View>
            
        );
    }



}


const styles = StyleSheet.create({
    container: {
      
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    logo:{
      width: 350,
      height: 230
    }
});