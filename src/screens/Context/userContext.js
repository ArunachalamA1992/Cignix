import React, { createContext, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const Getuserdata = async (navigateFunction) => {
    try {
      const TOKEN = await AsyncStorage.getItem('ACCESS_TOKEN');
      const ACCESS_TOKEN = JSON.parse(TOKEN);
      if (ACCESS_TOKEN) {
        navigateFunction('Tab');
      } else {
        navigateFunction('OnboardScreen');
      }
    } catch (error) {
      console.log('Error getting user data:', error);
    }
  };

  return (
    <UserContext.Provider value={{ Getuserdata }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
