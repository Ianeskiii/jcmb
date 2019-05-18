import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";



class ProfileDetails extends Component {
    render() {
        return (
           <View style={{ height:300, width:300, marginLeft: 20,  borderRadius: 400/ 2}}>
                                <View style={{ flex: 2,  borderRadius: 400/ 2}}>
                                <Image  source={this.props.imageUri} style={{ flex:1,   borderRadius: 400/ 2}} />
                                </View>
                                  <View style={{ flex: 2, paddingLeft: 10,  paddingtop:10, alignItems: 'center' }} >
                                  <Text style={{ fontSize: 24, fontWeight: '700'}}>
                                  {this.props.name}
                                  </Text>
                                </View>
                            </View>
        );
    }
}
export default ProfileDetails;




const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});