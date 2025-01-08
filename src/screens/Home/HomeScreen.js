//import liraries
import React, {useState, useEffect, useCallback, useRef} from 'react';
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
  ActivityIndicator,
} from 'react-native';
import Color from '../../Global/Color';
import {Iconviewcomponent} from '../../Components/Icontag';
import {Mulish} from '../../Global/FontFamily';
import {Badge} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {scr_height, scr_width} from '../../Components/Dimensions';
import Video, {VideoRef} from 'react-native-video';
import FastImage from 'react-native-fast-image';
import Videoplayercomponent from '../../Components/Videoplayercomponent';
import fetchData from '../../Config/fetchData';
import VideoPlayerWithThumbnail from '../../Components/Video';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RBSheet from 'react-native-raw-bottom-sheet';
import common_fn from '../../Components/common_fn';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Orientation from 'react-native-orientation-locker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

// create a component
const HomeScreen = () => {
  const navigation = useNavigation();
  const [height, setHeight] = useState(undefined);
  const [homeSection, setHomeSection] = useState([
  ]);
  // const [homeSection] = useState([
  //   {id: 1, title: 'Profile', data: ['Profile']},
  //   {id: 2, title: 'Score', data: ['Score']},
  //   {id: 2, title: 'SimTest', data: ['SimTest']},
  //   {id: 3, title: 'Recommended Videos', data: ['Recommended Videos']},
  //   {id: 4, title: 'Upcoming Videos', data: ['Upcoming Videos']},
  // ]);

  const [loading, setLoading] = useState(false);

  // const videoRef = useRef(null);
  const refRBSheet = useRef();
  const [isPlaying, setIsPlaying] = useState(true); // Video play/pause state
  // const [currentTime, setCurrentTime] = useState(0); // Current time in seconds
  // const [duration, setDuration] = useState(0); // Total video duration
  const [modalVisible, setModalVisible] = useState(false);
  const [getvideo, setgetvideo] = useState([]);
  const [Currentvideo, setCurrentvideo] = useState(null);
  const [userdata, setuserdata] = useState(null);
  const [scoredata, setscoredata] = useState(null);
  const [Feedback, setFeedback] = useState('');
  const [getQuestion, setgetQuestion] = React.useState([]);
  const [selctedAnswer, setSelctedAnswer] = React.useState([]);
  const [videoloader, setvideoloader] = useState(false);

  // Optional: Define callbacks for buffering and errors.
  const onBuffer = bufferInfo => {
    console.log('Video is buffering:', bufferInfo);
  };

  const onError = error => {
    console.error('Video playback error:', error);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Callback for video progress
  const handleProgress = progress => {
    console.log("progress",progress.currentTime);
    
    setCurrentTime(progress.currentTime);
  };

  const handleLoad = (data) => {
    const videoDuration = data.duration; // Duration in seconds
    setDuration(videoDuration);
    setvideoloader(true);
    console.log(`Video duration: ${videoDuration} seconds`);
  };

  // Callback for video load to get duration
  const onLoad = data => {
    setDuration(data.duration); // Set total duration
  };
  const restartVideo = () => {
    if (videoRef.current) {
      videoRef.current.seek(0); // Seek to the beginning (0 seconds)
    }
  };
  // GET QUESTION :
  const GetQustion = async () => {
    try {
      const Getquestion = await fetchData.GetQusetion(0);
      console.log('SSSSSS', Getquestion);
      if (Getquestion?.success == true) {
        setgetQuestion(Getquestion?.data);
        setHomeSection([{id: 2, title: 'SimTest', data: ['SimTest']}]);
        setLoading(false);
        console.log('checked', Getquestion?.data);
      } else {
        setgetQuestion([]);
      }
    } catch (error) {
      console.log('Catch in GetQuestion', error);
    }
  };

  const handleSelectAnswer = (questionId, optionValue) => {
    setSelctedAnswer(prev => ({...prev, [questionId]: optionValue}));
  };
  // Format time as mm:ss
  const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  const formatDate = (isoDate) => {
    console.log("data",isoDate);
    
    const date = new Date(isoDate);
  
    // Options for formatting the date
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
  
    return `Updated on ${date.toLocaleDateString('en-US', options)}`;
  };

  useEffect(() => {
    setLoading(true);
    Getvideo();
    Userdata();
    Get_Score();
  }, []);
  //  FEEDBACK :
  const FeedbackApi = async value => {
    try {
      const data = {
        feedback: Feedback,
      };
      const FeedbackApi = await fetchData?.PUT_END_VIDEO(value?._id, data);
      if (FeedbackApi?.success == true) {
        common_fn?.showToast('Feedback submitted successfully');
        setFeedback('');
        refRBSheet?.current?.close();
      } else {
        common_fn?.showToast(FeedbackApi?.message);
        refRBSheet?.current?.close();
      }
      console.log('FeedbackApi', FeedbackApi);
    } catch (error) {
      console.log('Catch in FeedbackApi', error);
    }
  };
  // GET VIDEO :
  const Getvideo = async () => {
    try {
      const Getvideo = await fetchData?.UserLesson();
      const filterdata = Getvideo?.data?.sort(
        (a, b) =>
          a?.lesson_details?.video_order - b?.lesson_details?.video_order,
      );
      setgetvideo(filterdata);

      console.log('Getvideo?.data', Getvideo?.data);
    } catch (error) {
      console.log('Catch in Getvideo', error);
    }
  };
  // USERDATA :
  const Userdata = async () => {
    try {
      const Userdata = await fetchData?.Getuserdata();
      console.log('vhjb', Userdata?.data);
      if (Userdata?.success == true) {
        setuserdata(Userdata?.data);
        if (Userdata?.data?.step == 0) {
          GetQustion();
        } else {
          console.log(
            '<=========================>USER DATA<==========================>',
          );
          console.log('userdata', Userdata);
          await Get_Score();
          setHomeSection([
            {id: 1, title: 'Profile', data: ['Profile']},
            {id: 2, title: 'Score', data: ['Score']},
            {id: 3, title: 'Recommended Videos', data: ['Recommended Videos']},
            {id: 4, title: 'Upcoming Videos', data: ['Upcoming Videos']},
          ]);
          setLoading(false);
        }
      }
    } catch (error) {
      console.log('Catch in Userdata', error);
    }
  };
  // GET SCORE :
  const Get_Score = async () => {
    try {
      const Get_Score = await fetchData?.Get_Score();
      console.log('GET SCORE', Get_Score);
      console.log('<===================>GET SCORE<===================>');
      if (Get_Score?.success == true) {
        setscoredata(Get_Score?.data);
        console.log('<===================>GET SCORE<=======ffff============>');
        console.log('get Success the Score');
      } else {
        console.log('Get_Score?.data', Get_Score?.data);
      }
    } catch (error) {
      console.log('Catch in Score', error);
    }
  };
  useEffect(() => {
    restartVideo();
  }, [Currentvideo]);

  // PUT_END_VIDEO :
  const Videoend = async value => {
    try {
      const enddata = {
        is_viewed: true,
      };
      console.log('enddata', enddata);
      console.log('Currentvideo', value?._id);
      const Endvideo = await fetchData?.PUT_END_VIDEO(value?._id, enddata);
      console.log('PUT_END_VIDEO', Endvideo);

      if (Endvideo?.success == true) {
        if (getvideo[getvideo?.length - 1]?._id == Currentvideo?._id) {
          const formData = new FormData();
          formData.append('step', 2);
          console.log('dddddddd', formData);
          const Stepupdate = await fetchData?.UpdateProfile(formData);
          if (Stepupdate?.success == true) {
            refRBSheet.current.open();
            await Get_Score();
            await Userdata();
            console.log('Stepupdate', Stepupdate);
          } else {
            console.log('Stepupdate', Stepupdate);
          }
        }
        console.log('PUT_END_VIDEOPUT_END_VIDEOPUT_END_VIDEOPUT_END_VIDEO');
        // refRBSheet.current.open();
        console.log("jdnjkdvbjvbvjb");
        
        Getvideo();
        console.log('Success in video end');
      } else {
        console.log('Fail in video end');
      }
      // refRBSheet.current.open();
    } catch (error) {
      console.log('Catch in PUT_END_VIDEO', error);
    }
  };
  // RENDER :
  const renderItem = ({item, index}) => {
    return (
      <View style={{gap: 20, width: scr_width - 40}}>
        <View style={{gap: 10, marginTop: 20}}>
          <Text
            style={{
              fontSize: 12,
              color: '#4254B6',
              fontFamily: Mulish.Regular,
            }}>
            {`Question ${index + 1} of ${getQuestion?.length}`}
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: Color?.black,
              fontFamily: Mulish.Medium,
            }}>
            {item?.question} ?
          </Text>
        </View>
        <View style={{gap: 25, paddingLeft: 5}}>
          <FlatList
            data={item?.options}
            renderItem={({item: option}) => {
              return (
                <Pressable
                  style={{
                    gap: 10,
                    flexDirection: 'row',
                    width: scr_width,
                    alignItems: 'center',
                    marginBottom: 20,
                  }}
                  onPress={() => {
                    handleSelectAnswer(item._id, option.value);
                  }}>
                  <Iconviewcomponent
                    Icontag="Fontisto"
                    icon_size={24}
                    icon_color={
                      selctedAnswer[item._id] === option.value
                        ? '#4254B6'
                        : 'gray'
                    }
                    iconname={
                      selctedAnswer[item._id] === option.value
                        ? 'radio-btn-active'
                        : 'radio-btn-passive'
                    }
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      color: Color?.black,
                      fontFamily: Mulish.Regular,
                    }}>
                    {option?.value}
                  </Text>
                </Pressable>
              );
            }}
            keyExtractor={(option, idx) => `${item._id}-${idx}`}
          />
          {index + 1 == getQuestion?.length ? null : (
            <View
              style={{
                width: '100%',
                alignItems: 'center',
                height: 5,
                backgroundColor: '#F9F9F9',
              }}
            />
          )}
          {index + 1 == getQuestion?.length && (
            <TouchableOpacity
              style={{
                padding: 20,
                backgroundColor: '#4254B6',
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
                width: scr_width - 70,
                // marginBottom: 70,
              }}
              onPress={() => {
                if (Object.keys(selctedAnswer)?.length == getQuestion?.length) {
                  const total = Object.values(selctedAnswer).reduce(
                    (sum, value) => sum + Number(value),
                    0,
                  );
                  SIMTEST_UPDATE_SCORE(total);
                } else {
                  console.log('selctedAnswer', selctedAnswer);
                  common_fn.showToast('Please Answer All Questions');
                }
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: Color?.white,
                  fontFamily: Mulish?.SemiBold,
                }}>
                Discover Your Score
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };
  // SIMTEST_UPDATE_SCORE :
  const SIMTEST_UPDATE_SCORE = async val => {
    try {
      const data = {
        total_points: val,
      };
      const SIMTEST_UPDATE_SCORE = await fetchData?.POST_USER_LESSON(data);
      console.log('SIMTEST_UPDATE_SCORE', SIMTEST_UPDATE_SCORE);
      if (SIMTEST_UPDATE_SCORE?.success == true) {
        console.log("=============>");
        console.log("=============>");
        console.log("=============>");
        console.log("=============>");
        console.log("=============>");
        console.log("=============>");
        console.log("=============>");
        
       await UserStep();
        common_fn.showToast('Answer Submited Successfully');
      } else {
        console.log('SIMTEST_UPDATE_SCORE', SIMTEST_UPDATE_SCORE);
      }
    } catch (error) {
      console.log('Catch in SIMTEST_UPDATE_SCORE', error);
    }
  };
  // UserStep :
  const UserStep = async () => {
    try {
      const formData = new FormData();
      formData.append('step', 1);
      const Stepupdate = await fetchData?.UpdateProfile(formData);
      if (Stepupdate?.success == true) {
        // Userdata();
        console.log("jkcbkv",Stepupdate,"jkbjhbvjh");
        
        await Get_Score();
        setHomeSection([
          {id: 1, title: 'Profile', data: ['Profile']},
          {id: 2, title: 'Score', data: ['Score']},
          {id: 3, title: 'Recommended Videos', data: ['Recommended Videos']},
          // {id: 4, title: 'Upcoming Videos', data: ['Upcoming Videos']},
        ]);

        console.log('Stepupdate', Stepupdate);
      } else {
        console.log('Stepupdate', Stepupdate);
      }
    } catch (error) {
      console.log('Catch in UserStep', error);
    }
  };
  if (loading == true) {
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" color="#4254B6" />
    </View>;
  }

  //  Datafunction :
  const Datafunction = async timestamp => {
    const date = new Date(timestamp);
    const options = {year: 'numeric', month: 'long', day: 'numeric'};
    const formattedDate = `Updated on ${date.toLocaleDateString(
      'en-US',
      options,
    )}`;
    return formattedDate;
  };

  // ======>VIDEOS FUNCTION <====== //

   const [currentTime, setCurrentTime] = useState(0);
      const [duration, setDuration] = useState(0.1);
      const [paused, setPaused] = useState(false);
      const [overlay, setOverlay] = useState(false);
      // const [loader, setLoader] = useState(true);
      const [fullscreen, setFullscreen] = useState(false);
  
      const videoRef = useRef(null);
    const overlayTimer = useRef(null);
      const lastTap = useRef(null);
  const handleFullscreen = () => {
    const newFullscreen = !fullscreen;
    console.log("newFullscreen", newFullscreen);
    
    if (newFullscreen) {
        Orientation.lockToLandscape();
    } else {
        Orientation.lockToPortrait();
    }
    setFullscreen(newFullscreen);
};
const handleDoubleTap = (doubleTapCallback, singleTapCallback) => {
  const now = Date.now();
  const DOUBLE_PRESS_DELAY = 300;
  if (lastTap.current && now - lastTap.current < DOUBLE_PRESS_DELAY) {
      clearTimeout(30);
      doubleTapCallback();
  } else {
      lastTap.current = now;
      const timer = setTimeout(() => {
          singleTapCallback();
      }, DOUBLE_PRESS_DELAY);
  }
};

const getTime = t => {
  const digit = n => (n < 10 ? `0${n}` : `${n}`);
  const sec = digit(Math.floor(t % 60));
  const min = digit(Math.floor((t / 60) % 60));
  const hr = digit(Math.floor((t / 3600) % 60));
  return hr + ':' + min + ':' + sec;
};

const load = ({ duration }) => {
  setDuration(duration), setLoader(false), console.log('loaded', duration);
};
const progress = ({ currentTime }) => {
  console.log('currentTime', currentTime);
  console.log('duration', duration);
  setCurrentTime(currentTime);
  if (Math.round(currentTime) === Math.round(duration - 0.025)) {
      console.log('Video has ended');
      setPaused(!paused);
      setCurrentTime(0);
      videoRef.current.seek(0);
  }
};

const backward = () => {
  if(Math.round(currentTime) >= 5 )
  {
      videoRef.current.seek(currentTime - 5);
      clearTimeout(timer);
      overlayTimer = setTimeout(() => setOverlay(false), 3000);
  }else{
       common_fn?.showToast("You can't go backward");
  }
  
};

const forward = () => {
  common_fn?.showToast("You can't go forward");
};
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        hidden={false} // Hides the status bar
        backgroundColor={'#D9DDF0'} // Matches background color
        translucent={true}
        barStyle={'dark-content'}
      />
      <LinearGradient
        style={{
          flex: 1,
          height: scr_height,
          // justifyContent: 'center',
          alignItems: 'center',
        }}
        start={{x: 0, y: 1}}
        end={{x: 0, y: 0}}
        colors={['#ffffff', '#D9DDF0']}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 10,
            paddingHorizontal: 15,
            marginVertical: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [
                  {name: 'Tab', params: {screen: 'ProfileTab'}},
                ],
              });
            }}
            style={{
              flex: 0,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
              backgroundColor: Color.softGrey,
            }}>
            <Image
              source={require('../../assets/Gallery/profile.png')}
              style={{
                width: 50,
                height: 50,
                resizeMode: 'contain',
                borderRadius: 100,
              }}
            />
          </TouchableOpacity>
          <View
            style={{
              flex: 4,
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              paddingHorizontal: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 5,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: Color.black,
                  fontFamily: Mulish.Bold,
                  letterSpacing: 0.5,
                }}>
                Hello,
              </Text>
              {userdata?.name && (
                <Text
                  style={{
                    fontSize: 18,
                    color: Color.black,
                    fontFamily: Mulish.Bold,
                    paddingHorizontal: 5,
                    letterSpacing: 0.2,
                  }}
                  numberOfLines={1}>
                  {userdata?.name}
                </Text>
              )}
            </View>
            <Text
              style={{
                fontSize: 14,
                color: Color.cloudyGrey,
                fontFamily: Mulish.Medium,
                letterSpacing: 0.2,
              }}
              numberOfLines={1}>
              Here is Your SIM Test Score
            </Text>
          </View>
          <TouchableOpacity
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
            onPress={() => navigation.navigate('NotificationsList')}>
            <View
              style={{position: 'absolute', zIndex: 999, top: -5, right: 15}}>
              <Badge
                badgeStyle={{
                  position: 'absolute',
                  zIndex: 999,
                  backgroundColor: Color.notify,
                  color: Color.white,
                  // fontFamily: Manrope.Bold,
                  fontSize: 12,
                }}
                maxLength={3}>
                10
              </Badge>
            </View>
            <Iconviewcomponent
              viewstyle={{alignItems: 'center', justifyContent: 'center'}}
              Icontag="Ionicons"
              icon_size={30}
              icon_color={Color.black}
              iconname="notifications-outline"
            />
          </TouchableOpacity>
        </View>
        <View
          style={{width: scr_width - 50, height: height, alignItems: 'center'}}>
          <Animated.SectionList
            sections={homeSection}
            scrollEnabled={true}
            keyExtractor={(item, index) => item + index}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={1}
            nestedScrollEnabled
            initialNumToRender={5}
            renderItem={({item}) => {
              switch (item) {
                case 'Profile':
                  return userdata?.step == 3 ? (
                    <View>
                      <View style={{marginBottom: 20}}>
                        <Text
                          style={{
                            fontFamily: Mulish?.SemiBold,
                            fontSize: 24,
                            color: '#000',
                            fontWeight: '600',
                          }}>
                          Your Test Results
                        </Text>
                      </View>
                      <View>
                        <FlatList
                          data={scoredata}
                          renderItem={({item}) => {
                            console.log('item', item);

                            return (
                              <View
                                style={{
                                  padding: 29,
                                  backgroundColor: '#fff',
                                  gap: 10,
                                  marginBottom: 10,
                                  borderRadius: 20,
                                }}>
                                <View
                                  style={{
                                    flexDirection: 'row',
                                    gap: 15,
                                    alignItems: 'center',
                                  }}>
                                  <Image
                                    source={require('../../assets/Images/Simtest.png')}
                                    width={30}
                                    height={30}
                                  />
                                  <Text
                                    style={{
                                      fontSize: 16,
                                      color: '#666666',
                                      fontFamily: Mulish?.SemiBold,
                                    }}>
                                    {`SIM ${item?.attempt} Test Score`}
                                  </Text>
                                </View>
                                <View>
                                  <View style={{flexDirection: 'row'}}>
                                    <Text
                                      style={{
                                        fontSize: 50,
                                        fontFamily: Mulish?.Medium,
                                        color: '#4254B6',
                                      }}>
                                      {`${item?.total_points}` + '/' + `250`}
                                    </Text>
                                   {
                                    item?.attempt == 2  ?
                                    (
<View
                                      style={{
                                        padding: 5,
                                        backgroundColor: '#D9DDF0',
                                        borderRadius: 100,
                                        width: 70,
                                        height: 30,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                      }}>
                                      <Text>{scoredata[0]?.total_points  - scoredata[1]?.total_points} Pts</Text>
                                    </View>
                                    ):null
                                   } 
                                  </View>
                                  <View>
                                    <Text
                                      style={{
                                        color: '#333333',
                                        fontFamily: Mulish?.Regular,
                                        fontSize: 14,
                                        textTransform: 'capitalize',
                                      }}>
                                      {/* updated on October 23, 2024. */}{
                                        formatDate(item?.createdAt)}
                                    </Text>
                                  </View>
                                </View>
                              </View>
                            );
                          }}
                        />
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 16,
                          }}>
                          <Image
                            source={require('../../assets/Images/accepts.png')}
                            style={{width: 50, height: 50}}
                          />
                          <View>
                            <Text
                              style={{
                                color: '#53B98F',
                                fontSize: 14,
                                fontFamily: Mulish?.Bold,
                              }}>
                              Great attempt !
                            </Text>
                            <Text
                              style={{
                                color: '#333333',
                                fontSize: 12,
                                fontFamily: Mulish?.Regular,
                                textTransform: 'capitalize',
                              }}>
                              A few tweaks can make a big difference.
                            </Text>
                          </View>
                        </View>
                        <View
                          style={{
                            width: '100%',
                            height: 5,
                            backgroundColor: Color.softGrey,
                            marginTop: 20,
                          }}
                        />
                      </View>
                    </View>
                  ) : scoredata !== null ? (
                    <View
                      style={{
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 20,
                      }}>
                      <ImageBackground
                        source={require('../../assets/Gallery/back.png')}
                        style={{
                          width: scr_width - 50,
                          height: scr_height / 2.455,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                        resizeMode="stretch">
                        <View
                          style={{
                            width: scr_width,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 20,
                            marginBottom: 20,
                          }}>
                          <Text
                            style={{
                              fontSize: 55,
                              color: Color.white,
                              fontFamily: Mulish.SemiBold,
                              letterSpacing: 0.5,
                            }}>
                            {`${
                              scoredata[0]?.total_points
                                ? scoredata[0]?.total_points
                                : 0
                            }` +
                              '/' +
                              `250`}
                    
                          </Text>
                          <Text
                            style={{
                              fontSize: 16,
                              color: Color.white,
                              fontFamily: Mulish.Medium,
                            }}>
                            {/* {Datafunction(
                              scoredata[0]?.updatedAt
                                ? scoredata[0]?.updatedAt
                                : '',
                            )} */}
                            updated on October 23, 2024.
                          </Text>

                          <TouchableOpacity
                            style={{
                              padding: 10,
                              paddingHorizontal: 30,
                              backgroundColor: Color.white,
                              borderRadius: 30,
                              marginVertical: 20,
                            }}
                            onPress={() => {
                              refRBSheet.current.open();
                            }}>
                            <Text
                              style={{
                                fontSize: 16,
                                color: Color.notify,
                                fontFamily: Mulish.SemiBold,
                              }}>
                              Low Score
                            </Text>
                          </TouchableOpacity>

                          <Text
                            style={{
                              width: '60%',
                              textAlign: 'center',
                              fontSize: 16,
                              color: Color.white,
                              fontFamily: Mulish.SemiBold,
                              lineHeight: 25,
                              letterSpacing: 0.5,
                            }}>
                            {getvideo[0]?.is_viewed == false
                              ? '* Complete Our Free Video Course To Improve Score '
                              : '* Complete the video course to retake the test'}
                          </Text>

                          {userdata?.step !== 2 ? (
                            <View
                              style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: scr_width / 1.6,
                                height: scr_height / 14.5,
                                backgroundColor: '#5F6AA5',
                                borderColor: Color.white,
                                borderWidth: 0.2,
                                borderRadius: 30,
                                shadowOpacity: 0.5,
                                marginVertical: 20,
                              }}>
                              <View
                                style={{
                                  flex: 1,
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                }}>
                                <Text
                                  style={{
                                    fontSize: 16,
                                    color: Color.white,
                                    fontFamily: Mulish.SemiBold,
                                  }}>
                                  Start Video Course
                                </Text>
                              </View>
                              <TouchableOpacity
                                onPress={() => {
                                  // navigation.navigate('SimTestScreen');
                                  refRBSheet.current.open();
                                }}>
                                <Iconviewcomponent
                                  viewstyle={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                  }}
                                  Icontag="Ionicons"
                                  icon_size={55}
                                  icon_color={Color.white}
                                  iconname="play-circle"
                                />
                              </TouchableOpacity>
                            </View>
                          ) : (
                            <TouchableOpacity
                              style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: scr_width / 1.6,
                                height: scr_height / 14.5,
                                backgroundColor: '#5F6AA5',
                                borderColor: Color.white,
                                borderWidth: 0.2,
                                borderRadius: 30,
                                shadowOpacity: 0.5,
                                marginVertical: 20,
                              }}
                              onPress={() => {
                                if (userdata?.step == 2) {
                                  navigation.navigate('SimTestScreen');
                                } else {
                                  if (
                                    userdata?.step == 1 ||
                                    userdata?.step == 0
                                  ) {
                                    common_fn?.showToast(
                                      'Please Watch All Videos and take the test.',
                                    );
                                  }
                                }
                              }}>
                              <View
                                style={{
                                  flex: 1,
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                }}>
                                <Text
                                  style={{
                                    fontSize: 16,
                                    color: Color.white,
                                    fontFamily: Mulish.SemiBold,
                                  }}>
                                  Test Yourself Again
                                </Text>
                              </View>
                              <View
                                style={{
                                  paddingRight: 15,
                                }}>
                                <Iconviewcomponent
                                  viewstyle={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                  }}
                                  Icontag="Ionicons"
                                  icon_size={30}
                                  icon_color={Color.white}
                                  iconname="lock-closed"
                                />
                              </View>
                            </TouchableOpacity>
                          )}
                        </View>
                        <TouchableOpacity
                          style={{
                            position: 'absolute',
                            top: 10,
                            right: 10,
                            marginHorizontal: 5,
                          }}
                          onPress={() => {
                            setModalVisible(true);
                          }}>
                          <Iconviewcomponent
                            viewstyle={{
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                            Icontag="MaterialCommunityIcons"
                            icon_size={24}
                            icon_color={Color.white}
                            iconname="information-outline"
                          />
                        </TouchableOpacity>
                      </ImageBackground>
                    </View>
                  ) : null;
                case 'SimTest':
                  return (
                    <ScrollView
                      style={{width: scr_width, marginBottom: scr_height / 4}}>
                      <Text
                        style={{
                          fontFamily: Mulish?.SemiBold,
                          fontSize: 24,
                          color: '#000',
                          fontWeight: '600',
                        }}>
                        Complete your SIM Test
                      </Text>
                      <FlatList
                        data={getQuestion}
                        renderItem={renderItem}
                        keyExtractor={item => item._id}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{gap: 20}}
                      />
                    </ScrollView>
                  );
                case 'Score':
                  return Currentvideo != null ? (
                    <View
                      style={{
                        width: '100%',
                        height: scr_height / 2.9,
                        alignItems: 'center',
                        marginTop: 20,
                      }}>
                      <Text
                        style={{
                          width: '100%',
                          textAlign: 'left',
                          fontSize: 20,
                          color: Color.black,
                          fontFamily: Mulish.Bold,
                          letterSpacing: 0.5,
                        }}>
                        Continue Watching
                      </Text>
                      <View
                        style={{
                          width: '100%',
                          height: 250,
                          borderRadius: 10,
                          marginVertical: 10,
                        }}>

                        {/* <Video
                          ref={videoRef}
                          source={{
                            uri: Currentvideo?.lesson_details?.source,
                          }}
                          style={[styles.video, {borderRadius: 50}]}
                          controls={false}
                          resizeMode="contain"
                          paused={!isPlaying}
                          onProgress={handleProgress}
                          onLoad={handleLoad}
                          onBuffer={buffer => console.log('nnnnnnnnnnnnnnnn', buffer)}
                          onError={error => console.log('Error:', error)} // Callback for errors
                          onEnd={text => {
                            if (Currentvideo?.status !== 'completed') {
                              Videoend(Currentvideo);
                            }
                          }}
                        /> */}
                        
                        {/* <View style={{width:'100%'}}> */}

                        <Videoplayercomponent source={Currentvideo?.lesson_details?.source} 
                        Videoendfun={Videoend}
                         currentdata={Currentvideo}
     />
                          {/* </View> */}
                        {/* <View style={styles.controls}>
                          <TouchableOpacity onPress={togglePlayPause}>
                            <Icon
                              name={isPlaying ? 'pause' : 'play'}
                              size={30}
                              color="#FFF"
                            />
                          </TouchableOpacity>

                          <Text style={styles.time}>
                            {formatTime(currentTime)} / {formatTime(duration)}
                          </Text>
                        </View> */}
                        <View style={{gap: 5}}>
                          <Text
                            style={{
                              fontFamily: Mulish?.Medium,
                              fontSize: 18,
                              color: '#333333',
                            }}>
                            {Currentvideo?.lesson_details?.title}
                          </Text>
                          <Text
                            style={{
                              color: '#666666',
                              fontFamily: Mulish?.Regular,
                              fontSize: 14,
                            }}>
                            {Currentvideo?.lesson_details?.content}
                          </Text>
                        </View>
                      </View>
                    </View>
                  ) : null;
                case 'Recommended Videos':
                  return (
                    <View
                      style={{
                        width: '100%',
                        alignItems: 'center',
                        marginVertical: 20,
                      }}>
                      <Text
                        style={{
                          width: '100%',
                          textAlign: 'left',
                          fontSize: 20,
                          color: Color.black,
                          fontFamily: Mulish.Bold,
                          letterSpacing: 0.5,
                        }}>
                        Upcoming Videos
                      </Text>
                      <View
                        style={{width: '100%', marginBottom: scr_height / 5}}>
                        <FlatList
                          data={getvideo?.sort(
                            (a, b) =>
                              a?.lesson_details?.video_order -
                              b?.lesson_details?.video_order,
                          )}
                          horizontal
                          showsHorizontalScrollIndicator={false}
                          renderItem={({item, index}) => {
                            return (
                              <View
                                style={{
                                  width: scr_width / 1.4,
                                  height: scr_height / 3.9,
                                  paddingTop: 15,
                                }}>
                                <View
                                  style={{
                                    width: 250,
                                    borderRadius: 5,
                                    marginHorizontal: 10,
                                    height: 137,
                                  }}>
                                  <VideoPlayerWithThumbnail
                                    thumbnailUri={
                                      item?.lesson_details?.thumbnail_img
                                    }
                                    videoUri={item?.lesson_details?.source}
                                    data={item}
                                    currentdata={Currentvideo}
                                    setCurrentdata={setCurrentvideo}
                                  />
                                </View>
                                <View
                                  style={{
                                    paddingTop: 15,
                                    paddingLeft: 15,
                                    gap: 5,
                                    marginBottom: 10,
                                  }}>
                                  <Text
                                    style={{
                                      fontFamily: Mulish?.Medium,
                                      fontSize: 18,
                                      color: '#333333',
                                    }}>
                                    {item?.lesson_details?.title}
                                  </Text>
                                  <Text
                                    style={{
                                      color: '#666666',
                                      fontFamily: Mulish?.Regular,
                                      fontSize: 14,
                                    }}>
                                    {item?.lesson_details?.content}
                                  </Text>
                                </View>
                              </View>
                            );
                          }}
                        />
                      </View>
                    </View>
                  );
              }
            }}
          />
        </View>
      </LinearGradient>
      {/* BOTTOM SHEET */}
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={600}
        customStyles={{
          wrapper: {
            backgroundColor: '#00000088',
          },
          container: {
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: 'white',
          },
        }}>
        {/* <View style={{backgroundColor: '#fff', flex: 1, padding: 10}}>
          <View style={{flex: 1}}>
            <Text
              style={{
                fontSize: 20,
                color: Color.black,
                fontFamily: Mulish.Bold,
              }}>
              Feedback Form
            </Text>
            <View style={{marginVertical: 10, gap: 20}}>
              <Text
                style={{
                  fontSize: 18,
                  color: Color.black,
                  fontFamily: Mulish.Bold,
                }}>
                question dkjvfsubfsuibnjfsbnfkjbnfkjb ?
              </Text>
              <View
                style={{
                  width: scr_width,
                  height: scr_height / 5,
                }}>
                <TextInput
                  value={Feedback}
                  onChangeText={text => setFeedback(text)}
                  placeholder="Write your feedback"
                  placeholderTextColor={Color.cloudyGrey}
                  style={{
                    width: '100%',
                    height: '50%',
                    backgroundColor: '#00000008',
                    borderRadius: 10,
                  }}
                  numberOfLines={2}
                />
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', gap: 10}}>
            <TouchableOpacity
              style={{
                width: scr_width / 2.3,
                backgroundColor: '#4254B6',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 10,
                borderRadius: 10,
              }}
              onPress={() => {
                refRBSheet.current.close();
              }}>
              <Text
                style={{
                  color: Color.white,
                  fontFamily: Mulish.Bold,
                  fontSize: 14,
                }}>
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: scr_width / 2.3,
                backgroundColor: '#4254B6',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 10,
                borderRadius: 10,
              }}
              onPress={() => {
                Feedback == ''
                  ? common_fn.showToast('Please Enter Feedback')
                  : FeedbackApi(Currentvideo);
              }}>
              <Text
                style={{
                  color: Color.white,
                  fontFamily: Mulish.Bold,
                  fontSize: 14,
                }}>
                Get Feedback
              </Text>
            </TouchableOpacity>
          </View>
        </View> */}
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            padding: 23,
            alignItems: 'center',
          }}>
          <View style={{alignItems: 'center', gap: 15, flex: 1}}>
            <View
              style={{
                width: 100,
                height: 100,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../assets/Images/feedbackimg.png')}
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'contain',
                  alignItems: 'center',
                }}
              />
            </View>
            <Text
              style={{
                color: '#000',
                fontFamily: Mulish?.SemiBold,
                fontSize: 30,
              }}>
              Any Questions?
            </Text>
            <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  alignItems: 'center',
                  color: '#666666',
                  fontSize: 14,
                  fontFamily: Mulish?.Regular,
                }}>
                Do you need help or have any questions about
              </Text>
              <Text
                style={{
                  alignItems: 'center',
                  color: '#666666',
                  fontSize: 14,
                  fontFamily: Mulish?.Regular,
                }}>
                what you just learned? Let us know below!
              </Text>
            </View>
            <View
              style={{
                borderRadius: 5,
                borderColor: '#CCCCCC',
                borderWidth: 1,
                alignItems: 'flex-start',
                width: scr_width - 50,
                height: scr_height / 7,
                padding: 10,
              }}>
              <TextInput
                placeholder="Type your question here..."
                numberOfLines={4}
                multiline
                value={Feedback}
                onChangeText={text => setFeedback(text)}
                scrollEnabled={true}
                style={{
                  width: '100%',
                  height: '100%',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  borderRadius: 5,
                  padding: 5,
                }}
              />
            </View>
          </View>
          <View style={{gap: 15, width: '100%'}}>
            <TouchableOpacity
              style={{
                padding: 23,
                backgroundColor: '#4254B6',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
              }}
              onPress={() => {
                Feedback == ''
                  ? common_fn.showToast('Please Enter Feedback')
                  : FeedbackApi(Currentvideo);
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 18,
                  fontFamily: Mulish?.Medium,
                }}>
                Submit Question
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 23,
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#000',
              }}
              onPress={() => {
                refRBSheet.current.close();
              }}>
              <Text
                style={{
                  color: '#000',
                  fontSize: 18,
                  fontFamily: Mulish?.Medium,
                }}>
                No Questions, I Understand
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </RBSheet>
      {/* INITIAL  SCORE */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#00000088',
          }}>
          <View
            style={{
              alignItems: 'center',
              backgroundColor: '#fff',
              width: scr_width / 1.1,
              height: scr_height / 1.8,
              borderRadius: 20,
            }}>
            <View
              style={{
                width: scr_width / 1.1,
                height: scr_height / 2.2,
                backgroundColor: 'white',
                position: 'relative',
                alignItems: 'center',
                gap: 20,
                zIndex: 2,
                borderRadius: 15,
              }}>
              <Image
                source={require('../../assets/Images/score.png')}
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'stretch',
                  borderRadius: 15,
                }}
              />
              <Pressable
                onPress={() => {
                  setModalVisible(false);
                }}
                style={{
                  position: 'absolute',
                  top: 10,
                  right: 10,
                  width: 30,
                  height: 30,
                  backgroundColor: '#fff',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 50,
                }}>
                <Text style={{color: '#000'}}>x</Text>
              </Pressable>
              <TouchableOpacity
                style={{
                  backgroundColor: '#4254B6',
                  padding: 15,
                  width: scr_width / 2,
                  borderRadius: 5,
                }}
                onPress={() => {
                  setModalVisible(false);
                }}>
                <Text
                  style={{
                    color: '#fff',
                    textAlign: 'center',
                    fontSize: 20,
                    fontFamily: Mulish?.Medium,
                  }}>
                  Got It !
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    paddingTop: 10,
    alignItems: 'center',
    backgroundColor: Color.white,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius: 10,
  },
  video: {
    width: '100%',
    height: '100%', // Adjust height as needed
    resizeMode: 'contain',
    borderRadius: 60,
  },
  controls: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 5,
  },
  time: {
    color: '#FFF',
    fontSize: 14,
  },
  button: {
    padding: 10,
    backgroundColor: '#1E90FF',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  timing: {
    color: '#FFF',
    fontSize: 14,
  },
  video: {  ...StyleSheet.absoluteFillObject},
  fullscreenVideo: {
      backgroundColor: 'black',
      ...StyleSheet.absoluteFill,
      elevation: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
},
overlaySet: {
  flex: 1,
  flexDirection: 'row',
},
icon: {
  color: 'white',
  flex: 1,
  textAlign: 'center',
  textAlignVertical: 'center',
  fontSize: 30,
},
timer: {
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 5,
},
overlaySet: {
  flex: 1,
  flexDirection: 'row',
},
});

//make this component available to the app
export default HomeScreen;
