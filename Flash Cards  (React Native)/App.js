import 'react-native-gesture-handler'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import middlewares from './middlewares'
import { StyleSheet, View, StatusBar} from 'react-native'
import Constants from 'expo-constants'
import { NavigationContainer } from '@react-navigation/native'
import MainNavigator from './components/MainNavigator'
import { white, purple } from './helpers/colors'
import { setLocalNotification } from './helpers/notifications'

class App extends React.Component {
  componentDidMount() {
    setLocalNotification()    
  }
  render() {
    return (
      <Provider store={createStore(reducers, middlewares)}>
        <NavigationContainer>
          <View style={styles.container}>
            <StatusBar 
              style={styles.statusBar} 
              barStyle="light-content" 
              backgroundColor={purple} 
              translucent={false} 
              hidden={false} 
            />
            <MainNavigator />
          </View>
        </NavigationContainer>  
      </Provider>
    )
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  statusBar: {
    height: Constants.statusBarHeight,
  }
})
