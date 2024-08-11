import React from "react";
import {View, ImageBackground , SafeAreaView, StyleSheet} from "react-native"

const Social = ({props}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../assets/projectrock-site-logo-XL.jpg')} imageStyle={{opacity:0.5, objectFit: 'contain'}}></ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})
export default Social