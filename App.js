import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './screens/Login'
import FeedsScreen from './screens/Feeds'
import Chats from './screens/Chats'
import AuthLoadingScreen from './screens/AuthLoading'
// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const AppStack = createStackNavigator({ Feeds: Chats, Chats : FeedsScreen });
const AuthStack = createStackNavigator({ Login: LoginScreen });

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
    
  },
  {
    initialRouteName: 'App',
  }
));