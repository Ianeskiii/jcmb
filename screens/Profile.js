import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    Dimensions
} from "react-native";

import ProfileDetails from './components/Profile/ProfileDetails'

const {height,width} = Dimensions.get('window')
class Profile extends Component {
    render() {
        return (
                <ScrollView scrollEventThrottle={16}>
                    <View style={{ height: height, width: width}}>
                      <View style={{ paddingTop:50, alignItems: 'center' }}  >

<View style={{ marginLeft: 20 }}>
                                <View style={{ flex: 2}}>
                                <Image  source={require('../assets/ian.jpg')} style={{ flex:1, width: 400, height: 400, borderRadius: 400/ 2}} />
                                </View>
                                  <View style={{ flex: 2, paddingLeft: 10,  paddingtop:10, alignItems: 'center' }} >
                                  <Text style={{ fontSize: 24, fontWeight: '700'}}>
                                 Ian Miras
                                  </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
        );
    }
}

                        // <ProfileDetails imageUri={require('../assets/ian.jpg')}
                        // name="Ian Miras" />
// <Category imageUri={require('../assets/backtoschool.jpg')} name="Back to School Project"/>
export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});