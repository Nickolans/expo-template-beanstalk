import { registerRootComponent } from 'expo';
import React from 'react';
import { NativeRouter } from 'react-router-native';
import config from '../config.json';

import App from './App/App';

const Index = () => (
  <NativeRouter>
    <App />
  </NativeRouter>
);

async function startApp() {
  // registerRootComponent calls AppRegistry.registerComponent('main', () => App);
  // It also ensures that whether you load the app in Expo Go or in a native build,
  // the environment is set up appropriately
  registerRootComponent(Index);
}

if (config.withServer) {
  console.log('Running with API Server');
  startApp();
} else {
  console.log('Running in DEV Mode');
  startApp();
}
