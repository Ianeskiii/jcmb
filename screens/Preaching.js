import React, { Component } from "react";
import {
  TabNavigator,
} from 'react-navigation';

import { 
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    Dimensions,
    TouchableOpacity
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import Category from './components/Explore/Category'
import Home from './components/Explore/Home'
import Tag from './components/Explore/Tag'

const {height,width} = Dimensions.get('window')
class Preaching extends Component {


    render() {
        return (
            <ScrollView scrollEventThrottle={16}>
              
            <View style={{marginTop:50, paddingHorizontal:20}}>
              <Text style={{ fontSize:24, fontWeight: '700'}} >
                Preachings
              </Text>
            </View>
              <View style={{ paddingHorizontal: 20, marginTop:40}}>
                               <View style={{ paddingHorizontal: 10, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                             
                                <Home width={width}
                                  name="Divine Purpose"
                                  achivement="By Pastor Pete Miraflor"
                                  imageUri={require('../assets/divinepurpose.png')}
                                  
                                />
                                <Home width={width}
                                  name="Husband and Wife"
                                  achivement="By Pastora Arlene Miraflor"
                                  imageUri={require('../assets/husbandandwife.png')}
                                />
                                 <Home width={width}
                                  name="Gods Generosity"
                                  achivement="By Pastor Pete Miraflor"
                                 imageUri={require('../assets/generosity.png')}
                                />
                                 <Home width={width}
                                  name="The First and the Last"
                                  achivement="By Pastor Pete Miraflor"
                                 imageUri={require('../assets/thefirst.png')}
                                />
                                 <Home width={width}
                                  name="Strategic Wisdom in Winning"
                                  achivement="By Pastor Arlene Miraflor"
                                 imageUri={require('../assets/strategic.jpg')}
                                />
                              </View>
                              
                </View>
               </ScrollView>
        );
    }
}
export default Preaching;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});