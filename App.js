import React, {Component} from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from './screens/Login'
import FeedsScreen from './screens/Feeds'

class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const AppNavigator = createStackNavigator({
  LoginScreen: LoginScreen,
  FeedsScreen: FeedsScreen,
});

const AppContainer = createAppContainer(AppNavigator)
export default App