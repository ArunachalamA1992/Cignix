//import liraries
import { useNavigation } from '@react-navigation/native';
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
  Pressable,
} from 'react-native';
import Color from '../../Global/Color';
import { Mulish } from '../../Global/FontFamily';
import { Iconviewcomponent } from '../../Components/Icontag';
import { scr_height, scr_width } from '../../Components/Dimensions';
import LinearGradient from 'react-native-linear-gradient';
import fetchData from '../../Config/fetchData';
import common_fn from '../../Components/common_fn';
import RazorpayCheckout from 'react-native-razorpay';
import { ActivityIndicator } from 'react-native';

// create a component
const Membership = () => {
  const navigation = useNavigation();
  const [data, setdata] = useState([
    {
      _id: '67384564541b7f8679e39faa',
      name: 'Free Plan',
      price: '0',
      description:
        'Access essential features to help you begin your quit-smoking journey.',
      duration: 0,
      features: [
        'Limited access to videos',
        'smoke-free days and basic progress metrics',
        'Daily reminders and milestone notifications',
      ],
      createdAt: '2024-11-16T07:10:28.236Z',
      updatedAt: '2024-11-21T07:02:17.733Z',
    },
    {
      _id: '67384564541b7f8679e39faa',
      name: 'Premium Plan',
      price: '0',
      description:
        'Access essential features to help you begin your quit-smoking journey.',
      duration: 0,
      features: [
        'Limited access to videos',
        'smoke-free days and basic progress metrics',
        'Daily reminders and milestone notifications',
      ],
      createdAt: '2024-11-16T07:10:28.236Z',
      updatedAt: '2024-11-21T07:02:17.733Z',
    },
    {
      _id: '67384564541b7f8679e39faa',
      name: 'Premium Plan',
      price: '0',
      description:
        'Access essential features to help you begin your quit-smoking journey.',
      duration: 0,
      features: [
        'Limited access to videos',
        'smoke-free days and basic progress metrics',
        'Daily reminders and milestone notifications',
      ],
      createdAt: '2024-11-16T07:10:28.236Z',
      updatedAt: '2024-11-21T07:02:17.733Z',
    },
    {
      _id: '67357ab223774fd7b6cba916',
      name: 'Premium Plan',
      price: '4999',
      description:
        'Access essential features to help you begin your quit-smoking journey.',
      features: [
        'Limited access to videos',
        'smoke-free days and basic progress metrics',
        'Daily reminders and milestone notifications',
      ],
      duration: 12,
      createdAt: '2024-11-14T04:21:06.133Z',
      updatedAt: '2024-11-22T11:04:49.102Z',
      duration_type: 'month',
      special_price: '4000',
    },
  ]);
  const [Amount, setAmount] = useState(null);
  const [Coupondata, setCouponData] = useState('');
  const [Couponcode, setCouponcode] = useState('');
  const [plan, setplan] = useState([]);
  const [selected, setSelected] = useState(null);
  const [btnloader, setBtnloader] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    Get_Membership();
  }, []);

  // Get_Membership :
  const Get_Membership = async () => {
    try {
      const GetMembership = await fetchData?.Get_Member_Screen();
      console.log('Get_Member_Screen', GetMembership?.data);
      if (GetMembership?.success == true) {
        setplan(GetMembership?.data);
        setSelectedPlan(GetMembership?.data[0]);
        console.log('setplan', GetMembership?.data);
      } else {
        setplan([]);
      }
    } catch (error) {
      console.log('Catch in Get_Membership', error);
    }
  };
  //  Item :
  const Item = ({ title, index }) => {
    console.log("title", title);
    const isSelected = selectedPlan?._id === title?._id;
    console.log("selcted ", isSelected, title);

    return (
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => {
          console.log("Click user plan", title);
          setSelectedPlan(title);
        }}>
        <LinearGradient
          colors={isSelected ? ['#ffff', '#FFBB3C'] : ['#ffff', '#CCCCCC']}
          style={{
            borderWidth: 1,
            borderColor: isSelected ? '#FFBB3C' : '#CCCCCC',
            borderRadius: 10,
            paddingLeft: 17,
            paddingTop: 25,
            paddingBottom: 30,
            marginRight: 5,
            width: scr_width / 1.188,
            marginTop: 10,
          }}
          key={index}
        >
          <View>
            <Text
              style={{
                color: '#000',
                fontSize: 20,
                textTransform: 'capitalize',
                fontFamily: Mulish?.SemiBold,
              }}>
              {title?.name == 'Free Plan' ? 'basic Plan' : 'Cignix Pro'}
            </Text>
          </View>
          <View>
            <Text
              style={{ fontFamily: Mulish?.Regular, color: '#000', fontSize: 40 }}>
              {title?.price == 0 ? '₹0' : '₹' + title?.special_price}
              <Text style={{ fontSize: 16 }}>/ year</Text>
            </Text>
          </View>
          {title?.price != 0 ? (
            <View>

              <Text
                style={{ fontFamily: Mulish?.Regular, color: '#000', fontSize: 20 }}>
                {title?.price}
              </Text>
            </View>
          ) : null}
          <View style={{ gap: 15, marginTop: 20 }}>
            {title?.features?.map((item, index) => {
              return (
                <View
                  style={{ gap: 13, flexDirection: 'row', alignItems: 'center' }}
                  key={index}>
                  <Iconviewcomponent
                    Icontag={'AntDesign'}
                    icon_size={14}
                    icon_color={'#27AE60'}
                    iconname={'checkcircle'}
                  />
                  <Text
                    style={{
                      color: '#333333',
                      fontFamily: Mulish?.Regular,
                      fontSize: 12,
                      textTransform: 'capitalize',
                      fontWeight: '400',
                    }}>
                    {item}
                  </Text>
                </View>
              );
            })}
          </View>
          <View
            style={{
              position: 'absolute',
              top: -15,
              right: 10,
              backgroundColor: '#FFBB3C',
              borderRadius: 100,
              width: 75,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: Mulish?.SemiBold,
                color: '#000',
                fontSize: 12,
              }}>
              {title?.name == 'Free Plan' ? 'Free' : 'Prime'}
            </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>

    );
  }

  // Apply Coupon :
  const Applycoupon = async item => {
    try {
      let data = {
        code: item,
      };
      console.log('data', data);
      const Apply_coupon = await fetchData?.Get_Coupon(data);
      console.log('DDDDDDDDDDDDDDDDDDDDDDDD', Apply_coupon);
      if (Apply_coupon?.success == true) {
        console.log('Applycoupon', Apply_coupon?.data);
        setCouponData(Apply_coupon?.data);
      } else {
        common_fn?.showToast(Apply_coupon?.message);
      }
    } catch (error) {
      console.log('CATCH IN Apply Coupon', error);
    }
  };

  // callRazorpay :
  // const callRazorpay = async () => {
  //   setBtnloader(true);
  //   try {
  //     const optionvalue = {
  //       plan_id: '67357ab223774fd7b6cba916',
  //       amount: '4999',
  //     };
  //     const Optiondata = await fetchData?.Get_Razorpay_Option(optionvalue);
  //     if (Optiondata?.success == true) {
  //       console.log('Razorpay amount', Optiondata?.data?.payment);
  //       RazorpayCheckout.open(Optiondata?.data?.payment)
  //         .then(data => {
  //           console.dir('Razorpay Success: ', data);
  //           setBtnloader(false);
  //         })
  //         .catch(error => {
  //           console.dir('Razorpay Error: ', error);
  //           alert(
  //             `Payment failed: ${
  //               error?.description || 'Unknown error occurred'
  //             }`,
  //           );
  //           setBtnloader(false);
  //         });
  //     }
  //   } catch (error) {
  //     console.error('Catch in callRazorpay: ', error);
  //   }
  // };
  const callRazorpay = async () => {
    try {
      common_fn?.showToast('Still Progress');
      //   var razorpayOptions = {
      //     key: "rzp_test_IDhrBL8LF95I6p", // Replace with your test key
      //     amount: 200000 * 100, // Amount in paise (e.g., 10 INR = 1000 paise)
      //     currency: "INR",
      //     name: "Test Merchant",
      //     description: "Test Payment",
      //     order_id: "order_PeTyecFUguJVIP", // Replace with a valid order ID
      //     prefill: {
      //         "contact": "8825659803",
      //         "email": "arunachalam@avanexa.vom",
      //         "name": "Arun A"
      //     },
      //     theme: {
      //         color: "#F37254", 
      //     },
      // };
      // console.log("Payment razorpayOptions=================:", razorpayOptions);
      // RazorpayCheckout.open(razorpayOptions)
      //     .then((data) => {
      //         // Alert.alert("Payment Successful", `Payment ID: ${data.razorpay_payment_id}`);
      //         console.log("Payment Success:", data);                            
      //     })
      //     .catch((error) => {
      //         // Alert.alert("Payment Failed", error.description);
      //         console.error("Payment Failed:", error);
      //     });
    } catch (error) {
      console.log("catch in callRazor_pay =================:", error);
    }

  }
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: '#fff', flex: 1 }}>
      <View
        style={{
          backgroundColor: Color?.white,
          flexDirection: 'row',
          paddingLeft: 25,
          paddingTop: 31,
          paddingBottom: 20,
        }}>
        <Pressable
          style={{ width: scr_width / 4 }}
          onPress={() => {
            navigation?.goBack();
          }}>
          <Iconviewcomponent
            // viewstyle={{ alignItems: 'center', justifyContent: 'center' }}
            Icontag="Ionicons"
            icon_size={25}
            icon_color={'#000'}
            iconname={'chevron-back'}
          />
        </Pressable>
        <View>
          <Text
            style={{
              fontFamily: Mulish?.SemiBold,
              fontSize: 22,
              color: '#000',
            }}>
            Cignix <Text style={{ color: '#D09B37' }}>Prime</Text>
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 11, padding: 20 }}>
        <View style={{ gap: 10 }}>
          <Text
            style={{ fontSize: 22, color: '#000', fontFamily: Mulish?.SemiBold }}>
            Choose Your Plan
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: '#666666',
              fontFamily: Mulish?.Regular,
            }}>
            Access essential features to help you begin your quit-smoking
            journey.
          </Text>
        </View>
        <FlatList
          data={plan ? plan : []}
          keyExtractor={item => item?._id}
          renderItem={({ item, index }) => <Item title={item} indxe={index} />}
          // numColumns={1}
          contentContainerStyle={styles.listContainer}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        // ListFooterComponent={() => (
        //   <View style={{ height: 50,backgroundColor:"red" }} />
        // )}
        />
      </View>
      <View
        style={{
          height: 10,
          marginLeft: 25,
          marginRight: 25,
          backgroundColor: '#F9F9F9',
        }}></View>
      <View style={{ padding: 25, gap: 20 }}>
        <View>
          <Text
            style={{
              color: '#000000',
              fontSize: 22,
              fontFamily: Mulish?.SemiBold,
            }}>
            Cignix Pro Plan Benefits
          </Text>
        </View>
        <View style={{ gap: 15, width: scr_width / 1.18 }}>
          <View style={{ gap: 13, flexDirection: 'row', alignItems: 'center' }}>
            <Iconviewcomponent
              Icontag={'AntDesign'}
              icon_size={24}
              icon_color={'#27AE60'}
              iconname={'checkcircle'}
            />
            <Text
              style={{
                color: '#333333',
                fontFamily: Mulish?.Regular,
                fontSize: 16,
                textTransform: 'capitalize',
                fontWeight: '400',
              }}>
              Work progress metrics
            </Text>
          </View>
          <View style={{ gap: 13, flexDirection: 'row', alignItems: 'center' }}>
            <Iconviewcomponent
              Icontag={'AntDesign'}
              icon_size={24}
              icon_color={'#27AE60'}
              iconname={'checkcircle'}
            />
            <Text
              style={{
                color: '#333333',
                fontFamily: Mulish?.Regular,
                fontSize: 16,
                textTransform: 'capitalize',
                fontWeight: '400',
              }}>
              Daily reminders and milestone notifications
            </Text>
          </View>
          <View style={{ gap: 13, flexDirection: 'row', alignItems: 'center' }}>
            <Iconviewcomponent
              Icontag={'AntDesign'}
              icon_size={24}
              icon_color={'#27AE60'}
              iconname={'checkcircle'}
            />
            <Text
              style={{
                color: '#333333',
                fontFamily: Mulish?.Regular,
                fontSize: 16,
                textTransform: 'capitalize',
                fontWeight: '400',
              }}>
              Limited access to videos{' '}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          height: 10,
          marginLeft: 25,
          marginRight: 25,
          backgroundColor: '#F9F9F9',
        }}></View>
      <View style={{ margin: 25, gap: 20 }}>
        <View style={{ gap: 10 }}>
          <Text
            style={{
              fontSize: 22,
              color: '#000000',
              fontFamily: Mulish?.SemiBold,
            }}>
            Have a coupon code ?
          </Text>
          <Text
            style={{
              color: '#333333',
              fontFamily: Mulish?.Regular,
              fontSize: 16,
              textTransform: 'capitalize',
              fontWeight: '400',
            }}>
            Access essential features to help you begin your quit-smoking
            journey.
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#F2F4FF',
            flexDirection: 'row',
            alignItems: 'center',
            width: scr_width / 1.18,
            padding: 10,
            justifyContent: 'space-between',
            borderRadius: 10,
          }}>
          <TextInput
            placeholder="Enter Coupon Code"
            placeholderTextColor={'#999999'}
            maxLength={6}
            value={Couponcode}
            editable={Coupondata == '' ? true : false}
            onChangeText={text => {
              setCouponcode(text);
            }}
          />
          {Coupondata == '' ? (
            <TouchableOpacity
              onPress={() => {
                if (Couponcode !== '') {
                  Applycoupon(Couponcode);
                } else {
                  common_fn?.showToast('Please Enter Coupon Code');
                }
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: '#4254B6',
                  fontWeight: '700',
                  fontFamily: Mulish?.Bold,
                }}>
                Apply
              </Text>
            </TouchableOpacity>
          ) : (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#27AE60',
                    fontWeight: '700',
                    fontFamily: Mulish?.Bold,
                    textTransform: 'capitalize',
                  }}>
                  Applied
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setCouponData('');
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#4254B6',
                    fontWeight: '700',
                    fontFamily: Mulish?.Bold,
                  }}>
                  Edit
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
      {
        selectedPlan?.price != 0 ?
          (<TouchableOpacity
            style={{
              margin: 25,
              padding: 18,
              backgroundColor: '#4254B6',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              callRazorpay();
            }}>
            {btnloader ? (
              <ActivityIndicator size={"small"} color={"#fff"} />
            ) : (
              <Text
                style={{ color: '#fff', fontFamily: Mulish?.Medium, fontSize: 16 }}>
                Buy Now for ₹{selectedPlan?.price} + 18% GST
              </Text>
            )}
          </TouchableOpacity>) : (<TouchableOpacity
            style={{
              margin: 25,
              padding: 18,
              backgroundColor: '#4254B6',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              common_fn?.showToast('Please select a plan');
            }}>
            {btnloader ? (
              <ActivityIndicator size={"small"} color={"#fff"} />
            ) : (
              <Text
                style={{ color: '#fff', fontFamily: Mulish?.Medium, fontSize: 16 }}>
                Select Premium plan
              </Text>
            )}
          </TouchableOpacity>)
      }


      <View style={{ padding: 40, height: 100 }}></View>
      {/* <View style={styles.container}>
                <View style={{ width: '100%', alignItems: 'center', marginVertical: 10, bottom: 50 }}>
                    <Text style={{ width: '100%', fontSize: 18, color: Color.black, fontFamily: Mulish.SemiBold, marginTop: 50, paddingHorizontal: 10, letterSpacing: 0.5 }}>Enjoy your free trial</Text>
                    <Text style={{ width: '100%', fontSize: 16, color: Color.cloudyGrey, fontFamily: Mulish.Regular, paddingHorizontal: 10, paddingVertical: 10, letterSpacing: 0.5 }}>Access essential features to help you begin your quit-smoking journey.</Text>

                    <View style={{ width: '100%', paddingHorizontal: 10, paddingVertical: 10, }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15 }}>
                            <View>
                                <Iconviewcomponent
                                    viewstyle={{ alignItems: 'center', justifyContent: 'center' }}
                                    Icontag="Octicons"
                                    icon_size={25}
                                    icon_color={'#26AD5F'}
                                    iconname={'check-circle-fill'}
                                />
                            </View>
                            <View>
                                <Text style={{ fontSize: 18, color: Color.lightBlack, fontFamily: Mulish.Regular, paddingHorizontal: 10, letterSpacing: 0.5 }}>Limited access to videos </Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15 }}>
                            <View>
                                <Iconviewcomponent
                                    viewstyle={{ alignItems: 'center', justifyContent: 'center' }}
                                    Icontag="Octicons"
                                    icon_size={25}
                                    icon_color={'#26AD5F'}
                                    iconname={'check-circle-fill'}
                                />
                            </View>
                            <View>
                                <Text style={{ fontSize: 18, color: Color.lightBlack, fontFamily: Mulish.Regular, paddingHorizontal: 10, letterSpacing: 0.5 }}>Basic progress metrics</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15 }}>
                            <View>
                                <Iconviewcomponent
                                    viewstyle={{ alignItems: 'center', justifyContent: 'center' }}
                                    Icontag="Octicons"
                                    icon_size={25}
                                    icon_color={'#26AD5F'}
                                    iconname={'check-circle-fill'}
                                />
                            </View>
                            <View>
                                <Text style={{ fontSize: 18, color: Color.lightBlack, fontFamily: Mulish.Regular, paddingHorizontal: 10, letterSpacing: 0.5 }}>Daily reminders and notifications </Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ width: '100%', height: 5, backgroundColor: '#F9F9F9', marginVertical: 10 }}></View>

                    <View style={{ width: '100%', alignItems: 'center', paddingVertical: 15 }}>
                        <Text style={{ width: '100%', fontSize: 18, color: Color.black, fontFamily: Mulish.SemiBold, paddingHorizontal: 10, letterSpacing: 0.5 }}>Unlock Premium Access</Text>
                        <Text style={{ width: '100%', fontSize: 16, color: Color.cloudyGrey, fontFamily: Mulish.Regular, paddingHorizontal: 10, paddingVertical: 10, letterSpacing: 0.5 }}>Upgrade to Premium for full access to exclusive content, personalized insights.</Text>

                        <View style={{ width:scr_width/1.1, height:scr_height/1.9, marginVertical: 10,borderRadius:20}}>
                            <ImageBackground
                                source={require('../../assets/Gallery/member.jpg')}
                                style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'flex-start'}}
                                resizeMode='stretch'
                            >
                                <View style={{ flex: 1, width: '100%', position: 'absolute', justifyContent: 'center', alignItems: 'flex-start',padding:20 }}>
                                    <View style={{ padding: 10, paddingHorizontal: 20, backgroundColor: '#E9B82F', borderRadius: 50, marginHorizontal: 20 }}>
                                        <Text style={{ fontFamily: 14, color: Color.white, fontFamily: Mulish.Medium }}>Premium</Text>
                                    </View>
                                    <Text style={{ fontSize: 26, color: Color.white, fontFamily: Mulish.SemiBold, marginHorizontal: 20, paddingVertical: 10 }}>CIGNIX PRIME</Text>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20 }}>
                                        <Text style={{ textAlignVertical: 'top', textAlign: 'auto', fontSize: 30, color: Color.white, fontFamily: Mulish.SemiBold }}>$</Text>
                                        <Text style={{ textAlign: 'center', fontSize: 50, color: Color.white, fontFamily: Mulish.SemiBold }}>180
                                            <Text style={{ textAlign: 'auto', textAlignVertical: 'bottom', fontSize: 14, color: Color.white, fontFamily: Mulish.SemiBold, paddingHorizontal: 5 }}>/ per year</Text></Text>
                                    </View>
                                    <View style={{ width: '100%', paddingHorizontal: 10 }}>
                                        <View style={{ width: '100%', paddingHorizontal: 10, paddingVertical: 10, }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
                                                <View>
                                                    <Iconviewcomponent
                                                        viewstyle={{ alignItems: 'center', justifyContent: 'center' }}
                                                        Icontag="Octicons"
                                                        icon_size={25}
                                                        icon_color={'#E9B82F'}
                                                        iconname={'check-circle-fill'}
                                                    />
                                                </View>
                                                <View>
                                                    <Text style={{ fontSize: 18, color: Color.white, fontFamily: Mulish.SemiBold, paddingHorizontal: 10, letterSpacing: 0.5 }}>Limited access to videos </Text>
                                                </View>
                                            </View>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
                                                <View>
                                                    <Iconviewcomponent
                                                        viewstyle={{ alignItems: 'center', justifyContent: 'center' }}
                                                        Icontag="Octicons"
                                                        icon_size={25}
                                                        icon_color={'#E9B82F'}
                                                        iconname={'check-circle-fill'}
                                                    />
                                                </View>
                                                <View>
                                                    <Text style={{ fontSize: 18, color: Color.white, fontFamily: Mulish.SemiBold, paddingHorizontal: 10, letterSpacing: 0.5 }}>Basic progress metrics</Text>
                                                </View>
                                            </View>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
                                                <View>
                                                    <Iconviewcomponent
                                                        viewstyle={{ alignItems: 'center', justifyContent: 'center' }}
                                                        Icontag="Octicons"
                                                        icon_size={25}
                                                        icon_color={'#E9B82F'}
                                                        iconname={'check-circle-fill'}
                                                    />
                                                </View>
                                                <View>
                                                    <Text style={{ fontSize: 18, color: Color.white, fontFamily: Mulish.SemiBold, paddingHorizontal: 10, letterSpacing: 0.5 }}>Daily reminders and notifications </Text>
                                                </View>
                                            </View>
                                        </View>

                                        <TouchableOpacity style={{ width: '97%', height: 55, justifyContent: 'center', alignItems: 'center', backgroundColor: Color.white,borderRadius:5, marginVertical: 10 }}>
                                            <Text style={{ fontSize: 18, color:'#4E90F0', fontFamily: Mulish.Bold }}>Buy Now</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>
                    </View>

                </View>
            </View> */}
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: Color.white,
  },
  listContainer: {
    padding: 10,
  },
  separator: {
    padding: 7,
  },
});

//make this component available to the app
export default Membership;
