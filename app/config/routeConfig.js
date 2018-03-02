import {
    StackNavigator
} from 'react-navigation';

import LoginScreen from '../screen/LoginScreen';
import ForgetPasswordScreen from '../screen/ForgetPasswordScreen'


//进行导航的注册
const ScreenApp = StackNavigator({
  Login: { screen: LoginScreen },
  ForgetPassword:{ screen: ForgetPasswordScreen }
});

AppRegistry.registerComponent('ScreenApp', () => ScreenApp);

export default ScreenApp;
