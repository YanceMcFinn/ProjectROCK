import React from "react";
import { useState, useEffect } from "react";
import {View, ImageBackground , SafeAreaView, StyleSheet, Dimensions, } from "react-native"
import MapView from "react-native-maps";
import { Canvas, Circle, Group, ImageSVG, useSVG } from "@shopify/react-native-skia";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";


const Map = () => {

// const svg = useSVG(require('../../assets/PRC_BoulderLayout_SVGTEST2.svg'))

//   const [width,setWidth]= useState(0);
//   const [height, setHeight] = useState(0);
//   const r = width * 0.33;
//     return (
//         <View style={styles.container} onLayout={({ nativeEvent }) => {
//             const { x, y, width, height } = nativeEvent.layout;
//             setHeight(height);
//             setWidth(width)}}>
//             <ImageBackground source={require('../../assets/PRC_Logo_BlackAndWhite.png')} style={styles.image} imageStyle= 
// {{opacity:0.5}} >
//                 <Canvas style={styles.canvas}>
//                 <Circle cx={0} cy={0} r={10} color="blue" />
//                 <Circle cx={width} cy={0} r={10} color="red" />
//                 <Circle cx={0} cy={height} r={10} color="lightblue" />
//                 <Circle cx={width} cy={height} r={10} color="lightblue" />


//       { svg && (
//         <ImageSVG
//           svg={svg}
//           x={0} y={0} width={width} height={height}

//         />)
//       }
    // </Canvas>
        //     </ImageBackground>
        // </View>
    //)

    return (
      <View style={styles.container}>
        <MapView 
          style={styles.map}
          initialRegion={{
            latitude: 26.171928485585433,
            longitude: -80.14518743154949,
            latitudeDelta: 0.00075,
            longitudeDelta: 0.00075,
          }} />
      </View>
    );
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
      },
      canvas: {
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: '#ADADAD'
      },
      map: {
        width: '100%',
        height: '100%'
      }
})
export default Map