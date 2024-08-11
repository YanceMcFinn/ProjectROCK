import React from "react";
import {View, ImageBackground , SafeAreaView, StyleSheet, Text} from "react-native"

const Profile = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../assets/PRC_Logo_BlackAndWhite.png')} style={styles.image} imageStyle= 
{{opacity:0.5}} >
                <Text style={styles.text}>Proofile</Text>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      image: {
        
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
      },
      text: {
        fontSize: 80,
        fontWeight: 'bold'
      }
})
export default Profile