/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Addpatient from './screens/Addpatient';
import Addvitals from './screens/Addvitals';
import Jrdoc from './screens/Jrdoc';
import Login from './screens/Login';
import Signup from './screens/Signup';

AppRegistry.registerComponent(appName, () => Addpatient);
