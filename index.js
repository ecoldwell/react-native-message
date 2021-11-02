/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import StickersApp from './src/Navigation';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent('InputDemoStickersApp', () => StickersApp);

