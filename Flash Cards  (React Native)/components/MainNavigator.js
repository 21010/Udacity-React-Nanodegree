import React from 'react'
import { connect } from 'react-redux'
import { handleGetDecks, handleInitData } from '../actions'
import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import { createStackNavigator } from '@react-navigation/stack'
import { white, purple } from '../helpers/colors'

import Tabs from './Tabs'
import Deck from './Deck'
import Quiz from './Quiz'
import AddCard from './AddCard'

const Stack = createStackNavigator()

class MainNavigator extends React.Component {
    componentDidMount() {
        // this.props.handleInitData()
        this.props.handleGetDecks()
    }
    render() {
        return (
          <Stack.Navigator 
            initialRouteName='Tabs' 
            screenOptions={{ 
              headerTitleAlign: 'center',
              headerTintColor: white,
              headerStyle: {
                height: 48,
                backgroundColor: purple,
              }
            }}
          >
            <Stack.Screen 
              name='Tabs' 
              component={Tabs} 
              options={{ 
                title: 'UdaciCards',
              }}
            />
            <Stack.Screen 
              name='Deck' 
              component={Deck} 
              options={({ route }) => ({ 
                title: route.params.title,
              })}
            />
            <Stack.Screen 
              name='Quiz' 
              component={Quiz} 
              options={({ route }) => ({ 
                title: route.params.title,
              })}
            />
            <Stack.Screen 
              name='AddCard' 
              component={AddCard} 
              options={({ route }) => ({ 
                title: route.params.title, 
              })}
            />
          </Stack.Navigator>
        )
    }
}

function mapStateToProps({ decks }) {
    return {
        decks
    }
}

export default connect(mapStateToProps, { handleGetDecks, handleInitData })(MainNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  statusBar: {
    height: Constants.statusBarHeight,
  }
})
