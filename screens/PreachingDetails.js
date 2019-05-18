import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class PreachingDetails extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>PreachingDetails</Text>
            </View>
        );
    }
}
export default PreachingDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});