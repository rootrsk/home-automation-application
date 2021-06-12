import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux'
import store from './src/redux/store'
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';
import NaviGator from './src/Navigator';

if (process.env.NODE_ENV == 'development') {
  console.log(process.env.NODE_ENV)
  // axios.defaults.baseURL = 'http://localhost:3001'
  axios.defaults.baseURL = 'https://rootrsk-test-api.herokuapp.com';

} else {
  axios.defaults.baseURL = 'https://rootrsk-test-api.herokuapp.com';
}
axios.interceptors.request.use(async function (config) {
    const token = await SecureStore.getItemAsync('auth_token');
    config.headers.Authorization = token;
    return config;
});

function App(props) {
    return (
        <Provider store={store}>
            <NaviGator />
        </Provider>
    );
}

export default  App