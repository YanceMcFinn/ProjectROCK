import React from "react";
import Profile from '../screens/Profile';
import Map from "../screens/Map";
import Social from "../screens/Social";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';


const Tab = createBottomTabNavigator()


const Tabs = () => {
    return(
        <Tab.Navigator screenOptions={{
            headerTitleAlign: 'center',
            tabBarActiveTintColor: '#07f900',
            tabBarInactiveTintColor: 'black',
            tabBarStyle: {
                backgroundColor:'#848385',
            },
            headerStyle: {
                backgroundColor: '#848385'
            },
            headerTitleStyle: {
                alignSelf: 'center',
                fontWeight: 'bold',
                fontSize: 25,
                color: 'white',
                
            }
          }}> 
            <Tab.Screen 
                name={'Map'}
                options={{
                    tabBarIcon: ({focused}) => (
                        <FontAwesome5
                            name={'map'} 
                            size={25} 
                            color={focused ? '#07f900' : 'black'}
                        />)
                        }}
                    > 
                    {() => <Map />}
            </Tab.Screen>
            <Tab.Screen 
                name={'Profile'}
                options={{
                    tabBarIcon: ({focused}) => (
                        <FontAwesome5
                            name={'user-alt'} 
                            size={25} 
                            color={focused ? '#07f900' : 'black'}
                        />)
                        }}
                    > 
                    {() => <Profile/>}
            </Tab.Screen>
          </Tab.Navigator>
    )
}

export default Tabs