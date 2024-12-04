import {api} from './api';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const api_name = 'api/';

const AccessToken = async () => {
  try {
    const ACCESS_TOKEN = await AsyncStorage.getItem('ACCESS_TOKEN');
    const value = JSON.parse(ACCESS_TOKEN);
    console.log('access token', value);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    return e;
  }
};

export default {

// Get_Question :
   GetQusetion: async () => {
    let url = `question`;
    return api.getMethod(url);
  },
  // Notification Count API

};
