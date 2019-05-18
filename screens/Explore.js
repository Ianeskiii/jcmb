import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions,
    Animated
} from "react-native";

import Icon from 'react-native-vector-icons/Ionicons'
import Category from './components/Explore/Category'
import Home from './components/Explore/Home'
import Tag from './components/Explore/Tag'

const {height,width} = Dimensions.get('window')
class Explore extends Component {
  componentWillMount(){
    this.startHeaderHeight = 100
    if(Platform.OS == 'android'){
      this.startHeaderHeight = 100 + StatusBar.currentHeight
    }
  }
    render() {
        return (
           <SafeAreaView style={{flex:1}}>
              <View style={{flext:1}}>
                <View style={{height:80, backgroundColor:'white',
                borderBottomWidth:1, borderBottomColor:"#dddddd"}}>
                    <View style={{flexDirection: 'row', padding:10, backgroundColor:'white', marginHorizontal:20, shadowOffset:{width:0, height:0},
                    shadowColor: 'black',
                    shadowOpacity: 0.2,
                    elevation:1,
                    marginTop:Platform.OS == 'android'? 30 : null
                    }}>
                      <Icon name="ios-search" size={20} />
                  <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="    Search"
                  placeholderTextColor="grey"
                  style={{flext:1, fontWeight:'700',
                  backgroundColor:'white'}}
                  />
                    </View>


                </View>
                  <ScrollView scrollEventThrottle={16}>
                    <View style={{ flex:1, backgroundColor:'white', paddingTop: 20}}>
                        <Text style={{ fontSize:24, fontWeight:'700', paddingHorizontal: 20}}>
                              Events
                        </Text>
                          <View style={{ height: 130, marginTop: 20}}>  
                          <ScrollView horizontal={true}
                          showsHorizontalScrollIndicator={false}>
                           <Category imageUri={require('../assets/backtoschool.jpg')} name="Back to School Project"/>
                           <Category imageUri={require('../assets/camp.jpg')} name="Youthentic Camp"/>
                           <Category imageUri={require('../assets/shindig.jpg')} name="Shindig"/>
                           <Category imageUri={require('../assets/conquest.jpg')} name="Conquest Party"/>
                            <Category imageUri={require('../assets/campusrev.jpg')} name="Campus Revolution"/>
                            
                          </ScrollView>
                          </View>
                              
                    </View>
                 
              
            <View style={{marginTop:20, paddingHorizontal:20}}>
              <Text style={{ fontSize:24, fontWeight: '700'}} >
                Our Monthly Theme
              </Text>
               <Text>
               The First and the Last
              </Text>
            </View>
            <View style={{width: width - 10, height:200, marginTop:20, paddingLeft:10}}>
              <Image style={{ flex: 1, height: null, width:null, resizeMode: 'cover', borderRadius: 5, borderWidth:1, borderColor: '#dddddd'}}
              source={require('../assets/fromfirsttolast.png')} />
              </View>

              <View stlye={{borderColor: '#dddddd'}}>
              <View style={{ paddingHorizontal: 20, marginTop:40}}>
                  <Text style={{ fontSize:24, fontWeight: '700'}}>
                              Declaration
                  </Text>
                  <Text style={{fontSize:18, marginTop:10}}>
               BUILDER COMMUNITY OF BELIEVERS
              </Text>
              <Text>
               by Finest Ronald Andal
              </Text>
               <Text style={{marginTop:20}}>
              "And let us consider one another in order to stir up love and good works, not forsaking the assembling of ourselves together, as is the manner of some, but exhorting one another, and so much the more as you see the Day approaching." (Hebrews 10:24-25)
              </Text>
             <Text style={{ marginTop: 5}}>
                DECLARATION "I am a builder of a united community of believers."
             </Text>
             <Text style={{ marginTop: 5}}>
                Bible Reading: Job 41-42 and Acts 16:22-40
             </Text>
            </View>
              




              </View>
              
              <View style={{ paddingHorizontal: 20, marginTop:40}}>
                              <Text style={{ fontSize:24, fontWeight: '700'}}>
                              Achievers Club
                             </Text>
                               <View style={{ paddingHorizontal: 10, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                <Home width={width}
                                  name="Julie Anne Bulisig"
                                  achivement="Licensed Psychometrician/ Top 9 Board Passer"
                                  imageUri={require('../assets/julie.jpg')}
                                />
                                <Home width={width}
                                  name="Ryan Art Bato"
                                  achivement="Reaching his 12 Disciples"
                                  imageUri={require('../assets/ryan.jpg')}
                                />
                                 <Home width={width}
                                  name="Alexander Ramos"
                                  achivement="Reaching his 12 Disciples"
                                 imageUri={require('../assets/alex.jpg')}
                                 
                                />
                              </View>
                              
                </View>
                 <View style={{ paddingHorizontal: 20, marginTop:100}}>

                 </View>
               </ScrollView>
              </View>
              </SafeAreaView>
        );
    }
}
export default Explore;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})