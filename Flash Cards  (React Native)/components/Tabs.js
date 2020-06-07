import React from 'react'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { black, grey, purple, white } from '../helpers/colors'

import DeckList from './DeckList'
import AddDeck from './AddDeck'

const Tab = createBottomTabNavigator()

function Tabs() {
  return (
    <Tab.Navigator 
      initialRouteName='Decks' 
      tabBarOptions={{
        showLabel: false,
        activeTintColor: white,
        inactiveTintColor: grey,
        style: {
          backgroundColor: purple,
          height: 48,
        }
      }
    }>
      <Tab.Screen 
        name='Decks' 
        component={DeckList}
        options={{
          tabBarLabel: 'Decks',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name='cards' color={color} size={42} />,
        }}
      />
      <Tab.Screen 
        name='AddDeck'
        component={AddDeck}
        options={{
          tabBarLabel: 'Add Deck',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name='plus' color={color} size={42} />
        }} 
      />
    </Tab.Navigator>
  )
}

export default Tabs

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  }
})
