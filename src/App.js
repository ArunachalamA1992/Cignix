//import liraries
import React, { useEffect, useState } from 'react';
import {
  Linking,
  LogBox,
  NativeEventEmitter,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider, useDispatch } from 'react-redux';

import { Provider as PaperProvider } from 'react-native-paper';
import SplashScreen from './SplashScreen';
import LinearGradient from 'react-native-linear-gradient';
import OnboardScreen from './screens/Onboard/OnboardScreen';
import TabNavigator, { Auth } from './route';
import Timeline from './screens/TimeLine/Timeline';
import TermsandConditions from './screens/SideMenu/TermsandConditions';
import PrivacyPolicy from './screens/SideMenu/PrivacyPolicy';
import AboutUs from './screens/SideMenu/AboutUs';
import ContactUs from './screens/SideMenu/ContactUs';
import Profile from './screens/ProfileTab/Profile';
import Color from './Global/Color';
import Store from './Redux/Store';
import NotificationsList from './screens/Home/NotificationsList';
import Icon from 'react-native-vector-icons/Ionicons';
import SimTest from './screens/Auth/SimTest';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

LogBox.ignoreAllLogs;
export const navigationRef = React.createRef();

const MyDrawer = () => {
  const dispatch = useDispatch();

  return (
    <PaperProvider>
      <NavigationContainer ref={navigationRef}>
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{ swipeEnabled: false }}
        // drawerContent={props => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen
            name="Home"
            component={MainApp}
            options={{ headerShown: false }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

// create a component
const App = () => {
  return (
    <Provider store={Store}>
      <MyDrawer />
    </Provider>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});


const MainApp = () => {
  return (
    <>
      {/* <ForegroundHandler /> */}
      <LinearGradient
        style={{
          height: StatusBar.currentHeight,
        }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#0D71BA', '#2994CB', '#0D71BA']}
      />
      <StatusBar
        backgroundColor="transparent"
        barStyle={'light-content'}
        translucent
      />
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OnboardScreen"
          component={OnboardScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SimTest"
          component={SimTest}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="TermsandConditions"
          component={TermsandConditions}
          options={({ navigation, route }) => ({
            headerTitle: 'Terms & Conditions',
            headerTitleAlign: 'center',
            headerTitleStyle: { color: Color.white },
            headerStyle: { backgroundColor: Color.primary },
            headerLeft: () => (
              <View style={{ marginHorizontal: 10 }}>
                <Icon
                  name="arrow-back"
                  size={30}
                  color={Color.white}
                  onPress={() => navigation.goBack()}
                />
              </View>
            ),
          })}
        />

        <Stack.Screen
          name="PrivacyPolicy"
          component={PrivacyPolicy}
          options={({ navigation, route }) => ({
            headerTitle: 'Privacy Policy',
            headerTitleStyle: { color: Color.white },
            headerStyle: { backgroundColor: Color.primary },
            headerLeft: () => (
              <View style={{ marginHorizontal: 10 }}>
                <Icon
                  name="arrow-back"
                  size={30}
                  color={Color.white}
                  onPress={() => navigation.goBack()}
                />
              </View>
            ),
          })}
        />

        <Stack.Screen
          name="AboutUs"
          component={AboutUs}
          options={({ navigation, route }) => ({
            headerTitle: 'About Us',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: Color.black,
              fontSize: 18,
              // fontFamily: Manrope.Bold,
            },
            headerStyle: { backgroundColor: Color.white },
            headerLeft: () => (
              <View style={{ marginHorizontal: 10 }}>
                <Icon
                  name="arrow-back"
                  size={30}
                  color={Color.black}
                  onPress={() => navigation.goBack()}
                />
              </View>
            ),
          })}
        />

        <Stack.Screen
          name="ContactUs"
          component={ContactUs}
          options={({ navigation, route }) => ({
            headerTitle: 'Contact Us',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: Color.black,
              fontSize: 18,
              // fontFamily: Manrope.Bold,
            },
            headerStyle: { backgroundColor: Color.white },
            headerLeft: () => (
              <View style={{ marginHorizontal: 10 }}>
                <Icon
                  name="arrow-back"
                  size={30}
                  color={Color.black}
                  onPress={() => navigation.goBack()}
                />
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="NotificationsList"
          component={NotificationsList}
          options={({ navigation, route }) => ({
            headerTitle: 'Notifications List',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: Color.black,
              fontSize: 18,
              // fontFamily: Manrope.Bold,
            },
            headerStyle: { backgroundColor: Color.white },
            headerLeft: () => (
              <View style={{ marginHorizontal: 10 }}>
                <Icon
                  name="arrow-back"
                  size={30}
                  color={Color.black}
                  onPress={() => navigation.goBack()}
                />
              </View>
            ),
          })}
        />

      </Stack.Navigator>
    </>
  );
};


//make this component available to the app
export default App;
