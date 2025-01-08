/**
 * @format
 */

import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import { firebase } from '@react-native-firebase/app';

import App from './src/App';
import { name as appName } from './app.json';

const firebaseConfig = {
    apiKey: "AIzaSyB-61fszLkagkKIEtP6W5kMVStWGIrxOQI",
    authDomain: "your-auth-domain",
    projectId: "cignix-912de",
    storageBucket: "your-storage-bucket",
    messagingSenderId: "your-messaging-sender-id",
    appId: "1:542915280674:android:871c228395852547e5af7b"
};
firebase.initializeApp(firebaseConfig);

AppRegistry.registerComponent(appName, () => App);
