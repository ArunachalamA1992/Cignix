//import liraries
import React, { useState, useEffect, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  Animated,
  View,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  Dimensions,
  LogBox,
  StatusBar,
  FlatList,
  PermissionsAndroid,
  Modal,
  NativeEventEmitter,
  NativeModules,
  TextInput,
  ImageBackground,
} from 'react-native';

import { Iconviewcomponent } from '../../Components/Icontag';
import Color from '../../Global/Color';
import { Mulish } from '../../Global/FontFamily';
import { Badge } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { scr_height } from '../../Components/Dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import fetchData from '../../Config/fetchData';
import common_fn from '../../Components/common_fn';


// create a component
const Profile = ({ navigation }) => {
  // const navigation = useNavigation();
  const [Uservalue, setuserdata] = useState(null);
  const [shopSection] = useState([
    { id: 1, title: 'Profile', data: ['Profile'] },
    { id: 2, title: 'Account', data: ['Account'] },
    { id: 3, title: 'Other Settings', data: ['Other Settings'] },
  ]);
  const User_Function = async () => {
    const userdata = await AsyncStorage.getItem('USERDATA');
    const data = JSON.parse(userdata);
    // console.log('====================================');
    console.log('userdata', data);
    setuserdata(data);
    // console.log('====================================');
  };
  useEffect(() => {
    User_Function();
  }, []);

  const Logout = async () => {
    try {
      const logout = await fetchData?.Logout();
      console.log('logout', logout);
      if (logout?.success == true) {
        await AsyncStorage.removeItem('ACCESS_TOKEN');
        await AsyncStorage.removeItem('USERDATA');
        navigation.reset({
          index: 0,
          routes: [{ name: 'Auth' }],
        });
      } else {
        console.log('error');
        common_fn.showToast(logout?.message);
      }
    } catch (error) {
      console.log('Catch in Logout', error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        hidden={false} // Hides the status bar
        backgroundColor={Color.white} // Matches background color
        translucent={true}
        barStyle={'dark-content'}
      />
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 15,
          paddingHorizontal: 15,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Iconviewcomponent
            viewstyle={{ alignItems: 'center', justifyContent: 'center' }}
            Icontag="Ionicons"
            icon_size={30}
            icon_color={Color.black}
            iconname="chevron-back"
          />
        </TouchableOpacity>
        <View>
          <Text
            style={{ fontSize: 20, color: Color.black, fontFamily: Mulish.Bold }}>
            Profile
          </Text>
        </View>
        <TouchableOpacity
          style={{ marginHorizontal: 10 }}
          onPress={() => navigation.navigate('notification')}>
          <View style={{ position: 'absolute', zIndex: 999, top: -5, right: -5 }}>
            <Badge
              badgeStyle={{
                position: 'absolute',
                zIndex: 999,
                backgroundColor: Color.red,
                color: Color.white,
                // fontFamily: Manrope.Bold,
                fontSize: 12,
              }}
              maxLength={3}>
              10
            </Badge>
          </View>
          <Iconviewcomponent
            viewstyle={{ alignItems: 'center', justifyContent: 'center' }}
            Icontag="Ionicons"
            icon_size={30}
            icon_color={Color.black}
            iconname="notifications-outline"
          />
        </TouchableOpacity>
      </View>

      <Animated.SectionList
        sections={shopSection}
        scrollEnabled={true}
        keyExtractor={(item, index) => item + index}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={1}
        nestedScrollEnabled
        initialNumToRender={5}
        renderItem={({ item }) => {
          switch (item) {
            case 'Profile':
              return (
                <View
                  style={{ width: '100%', alignItems: 'center', marginTop: 20 }}>
                  <View
                    style={{
                      width: '95%',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        flex: 0,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <View
                        style={{
                          backgroundColor: Color.cloudyGrey,
                          borderRadius: 50,
                        }}>
                        <Image
                          source={require('../../assets/Logos/cignix_black.png')}
                          style={{ width: 60, height: 60, resizeMode: 'contain' }}
                        />
                      </View>
                    </View>
                    <View
                      style={{
                        flex: 3,
                        width: '100%',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        paddingHorizontal: 5,
                      }}>
                      <Text
                        style={{
                          width: '100%',
                          fontSize: 16,
                          textAlign: 'left',
                          color: Color.black,
                          fontFamily: Mulish.Bold,
                          letterSpacing: 0.5,
                          padding: 3, textTransform: 'capitalize'
                        }}
                        numberOfLines={1}>
                        {Uservalue?.name}
                      </Text>
                      <Text
                        style={{
                          width: '100%',
                          fontSize: 14,
                          textAlign: 'left',
                          color: Color.cloudyGrey,
                          fontFamily: Mulish.Medium,
                          letterSpacing: 0.5,
                          padding: 3,
                        }}
                        numberOfLines={1}>
                        {Uservalue?.email}
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 1.5,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <View
                        style={{
                          padding: 10,
                          paddingHorizontal: 10,
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: '#62A2FD',
                          borderRadius: 50,
                        }}>
                        <Text
                          style={{
                            fontSize: 10,
                            color: Color.white,
                            fontFamily: Mulish.Medium,
                            letterSpacing: 0.5,
                          }}>
                          {Uservalue?.step == 1 ||
                            Uservalue?.step == 2 ||
                            Uservalue?.step == 3
                            ? 'Free User'
                            : 'Premium User'}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: '100%',
                      height: 5,
                      backgroundColor: '#F9F9F9',
                      marginVertical: 20,
                    }}></View>
                </View>
              );
            case 'Account':
              return (
                <View style={{ width: '100%', alignItems: 'center' }}>
                  <View style={{ width: '95%' }}>
                    <Text
                      style={{
                        fontSize: 18,
                        textAlign: 'left',
                        color: Color.black,
                        fontFamily: Mulish.Bold,
                        letterSpacing: 0.5,
                      }}>
                      Account Settings
                    </Text>

                    <TouchableOpacity
                      onPress={() => navigation.navigate('EditProfile')}
                      style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 30,
                      }}>
                      <View
                        style={{
                          flex: 0,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Iconviewcomponent
                          viewstyle={{
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                          Icontag="Feather"
                          icon_size={22}
                          icon_color={Color.lightBlack}
                          iconname="user"
                        />
                      </View>
                      <View
                        style={{
                          flex: 3,
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                          paddingHorizontal: 20,
                        }}>
                        <Text
                          style={{
                            fontSize: 16,
                            color: Color.lightBlack,
                            fontFamily: Mulish.SemiBold,
                            letterSpacing: 0.5,
                          }}>
                          Edit Profile
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          justifyContent: 'flex-end',
                          alignItems: 'flex-end',
                        }}>
                        <Iconviewcomponent
                          viewstyle={{
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                          Icontag="Ionicons"
                          icon_size={20}
                          icon_color={Color.Venus}
                          iconname="chevron-forward-outline"
                        />
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => navigation.navigate('Membership')}
                      style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 30,
                      }}>
                      <View
                        style={{
                          flex: 0,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Iconviewcomponent
                          viewstyle={{
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                          Icontag="MaterialCommunityIcons"
                          icon_size={22}
                          icon_color={Color.lightBlack}
                          iconname="crown-outline"
                        />
                      </View>
                      <View
                        style={{
                          flex: 3,
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                          paddingHorizontal: 20,
                        }}>
                        <Text
                          style={{
                            fontSize: 16,
                            color: Color.lightBlack,
                            fontFamily: Mulish.SemiBold,
                            letterSpacing: 0.5,
                          }}>
                          Manage Subscription
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          justifyContent: 'flex-end',
                          alignItems: 'flex-end',
                        }}>
                        <Iconviewcomponent
                          viewstyle={{
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                          Icontag="Ionicons"
                          icon_size={20}
                          icon_color={Color.Venus}
                          iconname="chevron-forward-outline"
                        />
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => navigation.navigate('ChangePassword')}
                      style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 30,
                      }}>
                      <View
                        style={{
                          flex: 0,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Iconviewcomponent
                          viewstyle={{
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                          Icontag="MaterialCommunityIcons"
                          icon_size={22}
                          icon_color={Color.lightBlack}
                          iconname="key-outline"
                        />
                      </View>
                      <View
                        style={{
                          flex: 3,
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                          paddingHorizontal: 20,
                        }}>
                        <Text
                          style={{
                            fontSize: 16,
                            color: Color.lightBlack,
                            fontFamily: Mulish.SemiBold,
                            letterSpacing: 0.5,
                          }}>
                          Change Password
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          justifyContent: 'flex-end',
                          alignItems: 'flex-end',
                        }}>
                        <Iconviewcomponent
                          viewstyle={{
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                          Icontag="Ionicons"
                          icon_size={20}
                          icon_color={Color.Venus}
                          iconname="chevron-forward-outline"
                        />
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('NotificationSettings')
                      }
                      style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 30,
                      }}>
                      <View
                        style={{
                          flex: 0,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Iconviewcomponent
                          viewstyle={{
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                          Icontag="Ionicons"
                          icon_size={22}
                          icon_color={Color.lightBlack}
                          iconname="notifications-outline"
                        />
                      </View>
                      <View
                        style={{
                          flex: 3,
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                          paddingHorizontal: 20,
                        }}>
                        <Text
                          style={{
                            fontSize: 16,
                            color: Color.lightBlack,
                            fontFamily: Mulish.SemiBold,
                            letterSpacing: 0.5,
                          }}>
                          Notification Settings
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          justifyContent: 'flex-end',
                          alignItems: 'flex-end',
                        }}>
                        <Iconviewcomponent
                          viewstyle={{
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                          Icontag="Ionicons"
                          icon_size={20}
                          icon_color={Color.Venus}
                          iconname="chevron-forward-outline"
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            case 'Other Settings':
              return (
                <View
                  style={{
                    width: '100%',
                    alignItems: 'center',
                    paddingBottom: scr_height / 9,
                  }}>
                  <View style={{ width: '95%', marginTop: 40 }}>
                    <Text
                      style={{
                        fontSize: 18,
                        textAlign: 'left',
                        color: Color.black,
                        fontFamily: Mulish.Bold,
                        letterSpacing: 0.5,
                      }}>
                      Other Settings
                    </Text>

                    <TouchableOpacity
                      onPress={() => navigation.navigate('HelpCenter')}
                      style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 30,
                      }}>
                      <View
                        style={{
                          flex: 0,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Iconviewcomponent
                          viewstyle={{
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                          Icontag="Feather"
                          icon_size={22}
                          icon_color={Color.cloudyGrey}
                          iconname="help-circle"
                        />
                      </View>
                      <View
                        style={{
                          flex: 3,
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                          paddingHorizontal: 20,
                        }}>
                        <Text
                          style={{
                            fontSize: 16,
                            color: Color.lightBlack,
                            fontFamily: Mulish.SemiBold,
                            letterSpacing: 0.5,
                          }}>
                          Help Center
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          justifyContent: 'flex-end',
                          alignItems: 'flex-end',
                        }}>
                        <Iconviewcomponent
                          viewstyle={{
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                          Icontag="Ionicons"
                          icon_size={20}
                          icon_color={Color.Venus}
                          iconname="chevron-forward-outline"
                        />
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => navigation.navigate('ContactUs')}
                      style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 30,
                      }}>
                      <View
                        style={{
                          flex: 0,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Iconviewcomponent
                          viewstyle={{
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                          Icontag="AntDesign"
                          icon_size={22}
                          icon_color={Color.cloudyGrey}
                          iconname="customerservice"
                        />
                      </View>
                      <View
                        style={{
                          flex: 3,
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                          paddingHorizontal: 20,
                        }}>
                        <Text
                          style={{
                            fontSize: 16,
                            color: Color.lightBlack,
                            fontFamily: Mulish.SemiBold,
                            letterSpacing: 0.5,
                          }}>
                          Contact Support
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          justifyContent: 'flex-end',
                          alignItems: 'flex-end',
                        }}>
                        <Iconviewcomponent
                          viewstyle={{
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                          Icontag="Ionicons"
                          icon_size={20}
                          icon_color={Color.Venus}
                          iconname="chevron-forward-outline"
                        />
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => navigation.navigate('PrivacyPolicy')}
                      style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 30,
                      }}>
                      <View
                        style={{
                          flex: 0,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Iconviewcomponent
                          viewstyle={{
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                          Icontag="SimpleLineIcons"
                          icon_size={22}
                          icon_color={Color.cloudyGrey}
                          iconname="lock"
                        />
                      </View>
                      <View
                        style={{
                          flex: 3,
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                          paddingHorizontal: 20,
                        }}>
                        <Text
                          style={{
                            fontSize: 16,
                            color: Color.lightBlack,
                            fontFamily: Mulish.SemiBold,
                            letterSpacing: 0.5,
                          }}>
                          Privacy Policy
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          justifyContent: 'flex-end',
                          alignItems: 'flex-end',
                        }}>
                        <Iconviewcomponent
                          viewstyle={{
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                          Icontag="Ionicons"
                          icon_size={20}
                          icon_color={Color.Venus}
                          iconname="chevron-forward-outline"
                        />
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => navigation.navigate('TermsandConditions')}
                      style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 30,
                      }}>
                      <View
                        style={{
                          flex: 0,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        {/* <Iconviewcomponent
                                                    viewstyle={{ alignItems: 'center', justifyContent: 'center' }}
                                                    Icontag="Ionicons"
                                                    icon_size={25}
                                                    icon_color={Color.cloudyGrey}
                                                    iconname="notifications-outline"
                                                /> */}
                        <Image
                          source={require('../../assets/Images/terms.png')}
                          style={{ width: 25, height: 25, resizeMode: 'contain' }}
                        />
                      </View>
                      <View
                        style={{
                          flex: 3,
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                          paddingHorizontal: 20,
                        }}>
                        <Text
                          style={{
                            fontSize: 16,
                            color: Color.lightBlack,
                            fontFamily: Mulish.SemiBold,
                            letterSpacing: 0.5,
                          }}>
                          Terms and Conditions
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          justifyContent: 'flex-end',
                          alignItems: 'flex-end',
                        }}>
                        <Iconviewcomponent
                          viewstyle={{
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                          Icontag="Ionicons"
                          icon_size={20}
                          icon_color={Color.Venus}
                          iconname="chevron-forward-outline"
                        />
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() =>
                        // navigation.reset({
                        //   index: 0,
                        //   routes: [{name: 'Auth'}], // Replace 'Auth' with your desired route name
                        // })
                        Logout()
                      }
                      style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 25,
                      }}>
                      <View
                        style={{
                          flex: 0,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Iconviewcomponent
                          viewstyle={{
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                          Icontag="MaterialCommunityIcons"
                          icon_size={22}
                          icon_color={Color.cloudyGrey}
                          iconname="logout"
                        />
                      </View>
                      <View
                        style={{
                          flex: 3,
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                          paddingHorizontal: 20,
                        }}>
                        <Text
                          style={{
                            fontSize: 16,
                            color: Color.lightBlack,
                            fontFamily: Mulish.SemiBold,
                            letterSpacing: 0.5,
                          }}>
                          Logout
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          justifyContent: 'flex-end',
                          alignItems: 'flex-end',
                        }}>
                        <Iconviewcomponent
                          viewstyle={{
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                          Icontag="Ionicons"
                          icon_size={20}
                          icon_color={Color.Venus}
                          iconname="chevron-forward-outline"
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              );
          }
        }}
      />
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Color.white,
  },
});

//make this component available to the app
export default Profile;
