import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView, FlatList, Pressable, Alert, Modal } from 'react-native';
import React, { useEffect } from 'react';
import { Image } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import fetchData from '../../Config/fetchData';
import { Iconviewcomponent } from '../../Components/Icontag';
import { Mulish } from '../../Global/FontFamily';
import { scr_height, scr_width } from '../../Components/Dimensions';
import FastImage from 'react-native-fast-image';
import common_fn from '../../Components/common_fn';

const { width, height } = Dimensions.get('window');
const SimTest = ({ navigation }) => {

  const [DisplayQuestion, setDisplayQuestion] = React.useState(1);
  const [selectedAnswer, setSelectedAnswer] = React.useState([]);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [getQuestion, setgetQuestion] = React.useState([]);
  const [loader, setLoader] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  //  const ValueData =  [
  //     {
  //       "_id": "6749658eabb2b685f0bb1179",
  //       "question": "Question ",
  //       "question_type": "radio",
  //       "options": [
  //         {
  //           "value": "1",
  //           "point": "1"
  //         },
  //         {
  //           "value": "2",
  //           "point": "2"
  //         },
  //         {
  //           "value": "3",
  //           "point": "3"
  //         },
  //         {
  //           "value": "4",
  //           "point": "4"
  //         },
  //         {
  //           "value": "5",
  //           "point": "5"
  //         },
  //         {
  //           "value": "6",
  //           "point": "6"
  //         },
  //         {
  //           "value": "7",
  //           "point": "7"
  //         },
  //         {
  //           "value": "8",
  //           "point": "8"
  //         },
  //         {
  //           "value": "9",
  //           "point": "9"
  //         },
  //         {
  //           "value": "10",
  //           "point": "10"
  //         }
  //       ],
  //       "order": 5,
  //       "event": "0",
  //       "createdAt": "2024-11-29T06:56:14.828Z",
  //       "updatedAt": "2024-11-29T06:56:14.828Z"
  //     },
  //     {
  //       "_id": "673837059c6fcbba05fe6fd1",
  //       "question": "E-cigarettes and vaping help in quitting smoking",
  //       "question_type": "radio",
  //       "options": [
  //         {
  //           "value": "1",
  //           "point": "1"
  //         },
  //         {
  //           "value": "2",
  //           "point": "2"
  //         },
  //         {
  //           "value": "3",
  //           "point": "3"
  //         },
  //         {
  //           "value": "4",
  //           "point": "4"
  //         },
  //         {
  //           "value": "00000000",
  //           "point": "5"
  //         },
  //         {
  //           "value": "6",
  //           "point": "6"
  //         },
  //         {
  //           "value": "7",
  //           "point": "7"
  //         },
  //         {
  //           "value": "8",
  //           "point": "8"
  //         },
  //         {
  //           "value": "9",
  //           "point": "9"
  //         },
  //         {
  //           "value": "10",
  //           "point": "10"
  //         }
  //       ],
  //       "order": 24,
  //       "event": "2",
  //       "createdAt": "2024-11-16T06:09:09.877Z",
  //       "updatedAt": "2024-11-16T06:09:09.877Z"
  //     },
  //     {
  //       "_id": "673836fa9c6fcbba05fe6fc7",
  //       "question": "Smokers had more immunity against Corona Virus",
  //       "question_type": "radio",
  //       "options": [
  //         {
  //           "value": "1",
  //           "point": "1"
  //         },
  //         {
  //           "value": "2",
  //           "point": "2"
  //         },
  //         {
  //           "value": "3",
  //           "point": "3"
  //         },
  //         {
  //           "value": "4",
  //           "point": "4"
  //         },
  //         {
  //           "value": "5",
  //           "point": "5"
  //         },
  //         {
  //           "value": "66666666",
  //           "point": "6"
  //         },
  //         {
  //           "value": "7",
  //           "point": "7"
  //         },
  //         {
  //           "value": "8",
  //           "point": "8"
  //         },
  //         {
  //           "value": "9",
  //           "point": "9"
  //         },
  //         {
  //           "value": "10",
  //           "point": "10"
  //         }
  //       ],
  //       "order": 23,
  //       "event": "2",
  //       "createdAt": "2024-11-16T06:08:58.733Z",
  //       "updatedAt": "2024-11-16T06:08:58.733Z"
  //     },
  //     {
  //       "_id": "673836ef9c6fcbba05fe6fc5",
  //       "question": "Most of the smokers live longer and health complications are rare",
  //       "question_type": "radio",
  //       "options": [
  //         {
  //           "value": "15555555555",
  //           "point": "1"
  //         },
  //         {
  //           "value": "2",
  //           "point": "2"
  //         },
  //         {
  //           "value": "3",
  //           "point": "3"
  //         },
  //         {
  //           "value": "4",
  //           "point": "4"
  //         },
  //         {
  //           "value": "5",
  //           "point": "5"
  //         },
  //         {
  //           "value": "6",
  //           "point": "6"
  //         },
  //         {
  //           "value": "7",
  //           "point": "7"
  //         },
  //         {
  //           "value": "8888888888888",
  //           "point": "8"
  //         },
  //         {
  //           "value": "9",
  //           "point": "9"
  //         },
  //         {
  //           "value": "10",
  //           "point": "10"
  //         }
  //       ],
  //       "order": 22,
  //       "event": "2",
  //       "createdAt": "2024-11-16T06:08:47.632Z",
  //       "updatedAt": "2024-11-16T06:08:47.632Z"
  //     },
  //     {
  //       "_id": "673836e49c6fcbba05fe6fae",
  //       "question": "Smoking turns my partner on1",
  //       "question_type": "radio",
  //       "options": [
  //         {
  //           "value": "1",
  //           "point": "1"
  //         },
  //         {
  //           "value": "2",
  //           "point": "2"
  //         },
  //         {
  //           "value": "3",
  //           "point": "3"
  //         },
  //         {
  //           "value": "4",
  //           "point": "4"
  //         },
  //         {
  //           "value": "5",
  //           "point": "5"
  //         },
  //         {
  //           "value": "6",
  //           "point": "6"
  //         },
  //         {
  //           "value": "7",
  //           "point": "7"
  //         },
  //         {
  //           "value": "8",
  //           "point": "8"
  //         },
  //         {
  //           "value": "9",
  //           "point": "9"
  //         },
  //         {
  //           "value": "10",
  //           "point": "10"
  //         }
  //       ],
  //       "order": 21,
  //       "event": "2",
  //       "createdAt": "2024-11-16T06:08:36.721Z",
  //       "updatedAt": "2024-11-16T10:10:05.078Z"
  //     },
  //     {
  //       "_id": "673836d79c6fcbba05fe6fa5",
  //       "question": "Smoking is cool and stylish",
  //       "question_type": "radio",
  //       "options": [
  //         {
  //           "value": "1",
  //           "point": "1"
  //         },
  //         {
  //           "value": "2",
  //           "point": "2"
  //         },
  //         {
  //           "value": "3",
  //           "point": "3"
  //         },
  //         {
  //           "value": "4",
  //           "point": "4"
  //         },
  //         {
  //           "value": "5",
  //           "point": "5"
  //         },
  //         {
  //           "value": "6",
  //           "point": "6"
  //         },
  //         {
  //           "value": "7",
  //           "point": "7"
  //         },
  //         {
  //           "value": "8",
  //           "point": "8"
  //         },
  //         {
  //           "value": "9",
  //           "point": "9"
  //         },
  //         {
  //           "value": "10",
  //           "point": "10"
  //         }
  //       ],
  //       "order": 20,
  //       "event": "2",
  //       "createdAt": "2024-11-16T06:08:23.405Z",
  //       "updatedAt": "2024-11-16T06:08:23.405Z"
  //     },
  //     {
  //       "_id": "673836ca9c6fcbba05fe6f8f",
  //       "question": "Cigarette helps me bond well with others",
  //       "question_type": "radio",
  //       "options": [
  //         {
  //           "value": "1",
  //           "point": "1"
  //         },
  //         {
  //           "value": "2",
  //           "point": "2"
  //         },
  //         {
  //           "value": "3",
  //           "point": "3"
  //         },
  //         {
  //           "value": "4",
  //           "point": "4"
  //         },
  //         {
  //           "value": "5",
  //           "point": "5"
  //         },
  //         {
  //           "value": "6",
  //           "point": "6"
  //         },
  //         {
  //           "value": "7",
  //           "point": "7"
  //         },
  //         {
  //           "value": "8",
  //           "point": "8"
  //         },
  //         {
  //           "value": "9",
  //           "point": "9"
  //         },
  //         {
  //           "value": "10",
  //           "point": "10"
  //         }
  //       ],
  //       "order": 19,
  //       "event": "2",
  //       "createdAt": "2024-11-16T06:08:10.575Z",
  //       "updatedAt": "2024-11-16T06:08:10.575Z"
  //     },
  //     {
  //       "_id": "673835ce9c6fcbba05fe6f3c",
  //       "question": "Cigarette helps me cope better with life",
  //       "question_type": "radio",
  //       "options": [
  //         {
  //           "value": "1",
  //           "point": "1"
  //         },
  //         {
  //           "value": "2",
  //           "point": "2"
  //         },
  //         {
  //           "value": "3",
  //           "point": "3"
  //         },
  //         {
  //           "value": "4",
  //           "point": "4"
  //         },
  //         {
  //           "value": "5",
  //           "point": "5"
  //         },
  //         {
  //           "value": "6",
  //           "point": "6"
  //         },
  //         {
  //           "value": "7",
  //           "point": "7"
  //         },
  //         {
  //           "value": "8",
  //           "point": "8"
  //         },
  //         {
  //           "value": "9",
  //           "point": "9"
  //         },
  //         {
  //           "value": "10",
  //           "point": "10"
  //         }
  //       ],
  //       "order": 18,
  //       "event": "1",
  //       "createdAt": "2024-11-16T06:03:58.661Z",
  //       "updatedAt": "2024-11-16T06:03:58.661Z"
  //     },
  //     {
  //       "_id": "673835c19c6fcbba05fe6f3a",
  //       "question": "Cigarette is my best friend",
  //       "question_type": "radio",
  //       "options": [
  //         {
  //           "value": "1",
  //           "point": "1"
  //         },
  //         {
  //           "value": "2",
  //           "point": "2"
  //         },
  //         {
  //           "value": "3",
  //           "point": "3"
  //         },
  //         {
  //           "value": "4",
  //           "point": "4"
  //         },
  //         {
  //           "value": "5",
  //           "point": "5"
  //         },
  //         {
  //           "value": "6",
  //           "point": "6"
  //         },
  //         {
  //           "value": "7",
  //           "point": "7"
  //         },
  //         {
  //           "value": "8",
  //           "point": "8"
  //         },
  //         {
  //           "value": "9",
  //           "point": "9"
  //         },
  //         {
  //           "value": "10",
  //           "point": "10"
  //         }
  //       ],
  //       "order": 17,
  //       "event": "1",
  //       "createdAt": "2024-11-16T06:03:45.943Z",
  //       "updatedAt": "2024-11-16T06:03:45.943Z"
  //     },
  //     {
  //       "_id": "673835b69c6fcbba05fe6f38",
  //       "question": "Even if I quit smoking for some days, I will surely relapse",
  //       "question_type": "radio",
  //       "options": [
  //         {
  //           "value": "1",
  //           "point": "1"
  //         },
  //         {
  //           "value": "2",
  //           "point": "2"
  //         },
  //         {
  //           "value": "3",
  //           "point": "3"
  //         },
  //         {
  //           "value": "4",
  //           "point": "4"
  //         },
  //         {
  //           "value": "5",
  //           "point": "5"
  //         },
  //         {
  //           "value": "6",
  //           "point": "6"
  //         },
  //         {
  //           "value": "7",
  //           "point": "7"
  //         },
  //         {
  //           "value": "8",
  //           "point": "8"
  //         },
  //         {
  //           "value": "9",
  //           "point": "9"
  //         },
  //         {
  //           "value": "10",
  //           "point": "10"
  //         }
  //       ],
  //       "order": 16,
  //       "event": "1",
  //       "createdAt": "2024-11-16T06:03:34.508Z",
  //       "updatedAt": "2024-11-16T06:03:34.508Z"
  //     }
  //   ]
  const Option = ({ title, index }) => {
    const isSelected = selectedAnswer.some(
      (item) =>
        item.Questionnumber === DisplayQuestion &&
        item.Answeroption.value === title.value
    );
    return (
      <TouchableOpacity
        style={{
          padding: 20,
          backgroundColor: isSelected ? '#0B1215' : '#EBEBEB',
          alignItems: 'center',
          borderRadius: 100,
        }}
        onPress={() => {
          setSelectedAnswer((prevAnswers) => {
            const updatedAnswers = [...prevAnswers];
            const existingIndex = updatedAnswers.findIndex(
              (item) => item.Questionnumber === DisplayQuestion
            );
            if (existingIndex === -1) {
              updatedAnswers.push({
                Questionnumber: DisplayQuestion,
                Answeroption: {
                  value: title.value,
                  point: title.point,
                },
              });
            } else {
              updatedAnswers[existingIndex] = {
                Questionnumber: DisplayQuestion,
                Answeroption: {
                  value: title.value,
                  point: title.point,
                },
              };
            }
            return updatedAnswers;
          });
        }}
      >
        <Text style={{ color: isSelected ? '#fff' : '#666666', fontSize: 20 }}>{title.value}</Text>
      </TouchableOpacity>
    );
  };
  useEffect(() => {
    GetQustion();
  }, [])
  const GetQustion = async () => {
    try {
      setLoader(true);
      const GetQustion = await fetchData.GetQusetion();
      console.log("SSSSSS", GetQustion);
      if (GetQustion?.success == true) {
        setgetQuestion(GetQustion?.data);
        if (GetQustion?.data.length !== 0) {
          const value = GetQustion?.data?.length / 2;
          console.log("value", value);
          const indexvv = Math.floor(value);
          setIndex(indexvv);
        }
        setLoader(false);
      } else {
        setgetQuestion([]);
        setLoader(false);
      }

    } catch (error) {
      console.log("Catch in GetQuestion", error);
      setLoader(false);
    }
  }
  // return(
  //   <View style={{backgroundColor: '#fff',flex:1,padding:20,paddingTop:31}}>
  //   <SkeletonPlaceholder >
  //     <View style={{height:scr_height,width:scr_width}}>
  //     <View style={{
  //             backgroundColor:'red',
  //             flexDirection:'row',
  //             justifyContent:'space-between',
  //             width:scr_width,
  //           }}>
  //             <View style={styles.placeholderCircle} />
  //             <View style={styles.placeholderText} />
  //           </View>
  //         <View style={{
  //             backgroundColor:'red',
  //             flexDirection:'row',
  //             justifyContent:'space-between',
  //             width:scr_width,
  //           }}>
  //             <View style={styles.placeholderCircle} />
  //             <View style={styles.placeholderText} />
  //           </View>
  //         <View style={{
  //             backgroundColor:'red',
  //             flexDirection:'row',
  //             justifyContent:'space-between',
  //             width:scr_width,
  //           }}>
  //             <View style={styles.placeholderCircle} />
  //             <View style={styles.placeholderText} />
  //           </View>
  //         <View style={{
  //             backgroundColor:'red',
  //             flexDirection:'row',
  //             justifyContent:'space-between',
  //             width:scr_width,
  //           }}>
  //             <View style={styles.placeholderCircle} />
  //             <View style={styles.placeholderText} />
  //           </View>
  //         <View style={{
  //             backgroundColor:'red',
  //             flexDirection:'row',
  //             justifyContent:'space-between',
  //             width:scr_width,
  //           }}>
  //             <View style={styles.placeholderCircle} />
  //             <View style={styles.placeholderText} />
  //           </View>
  //         <View style={{
  //             backgroundColor:'red',
  //             flexDirection:'row',
  //             justifyContent:'space-between',
  //             width:scr_width,
  //           }}>
  //             <View style={styles.placeholderCircle} />
  //             <View style={styles.placeholderText} />
  //           </View>
  //         <View style={{
  //             backgroundColor:'red',
  //             flexDirection:'row',
  //             justifyContent:'space-between',
  //             width:scr_width,
  //           }}>
  //             <View style={styles.placeholderCircle} />
  //             <View style={styles.placeholderText} />
  //           </View>
  //         <View style={{
  //             backgroundColor:'red',
  //             flexDirection:'row',
  //             justifyContent:'space-between',
  //             width:scr_width,
  //           }}>
  //             <View style={styles.placeholderCircle} />
  //             <View style={styles.placeholderText} />
  //           </View>
  //           </View>
  //         </SkeletonPlaceholder>
  //    </View>
  // )
  return (
    <View style={{ backgroundColor: '#fff', flex: 1, padding: 20, paddingTop: 31 }}>
      {
        loader ?
          (
            <SkeletonPlaceholder>
              <View style={{
                backgroundColor: 'red',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: scr_width,
              }}>
                <View style={styles.placeholderCircle} />
                <View style={styles.placeholderText} />
              </View>
            </SkeletonPlaceholder>
          ) : (
            <View style={{ flex: 1, gap: 40 }}>
              {/* ****************HEADER*********** */}
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Pressable style={{ width: width / 2.4 }} onPress={() => {
                  if (DisplayQuestion == 1) {
                    navigation.goBack()
                  } else {
                    setDisplayQuestion(DisplayQuestion - 1)
                  }
                }}>
                  <Iconviewcomponent
                    Icontag="AntDesign"
                    icon_size={24}
                    icon_color={"#000"}
                    iconname="left"
                  />
                </Pressable>
                <View>
                  <Text style={{ color: '#666666', fontSize: 20, fontFamily: Mulish?.Regular }}> {`${DisplayQuestion} / ${getQuestion?.length}`}</Text>
                </View>
              </View>
              {/* ****************QUESTION************ */}
              <View style={{ flex: 1 }}>
                <View style={{ padding: 20, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: '#000', fontSize: 30, fontFamily: Mulish?.SemiBold }}>{getQuestion[DisplayQuestion - 1]?.question}</Text>
                </View>getQuestion
                <FlatList
                  data={getQuestion[DisplayQuestion - 1]?.options}
                  renderItem={({ item, index }) => <Option title={item} index={index} />}
                  keyExtractor={item => item.id}
                  ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                  showsVerticalScrollIndicator={false}
                />
                <TouchableOpacity style={{ backgroundColor: '#0B1215', borderRadius: 100, padding: 20, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}
                  onPress={() => {
                    if (DisplayQuestion == getQuestion?.length) {
                      if (selectedAnswer.length == getQuestion?.length) {
                        common_fn.showToast('Answer Submited Successfully');
                        navigation.navigate('TabNavigator');
                        console.log("Answer", selectedAnswer);
                      } else {
                        common_fn.showToast('Please Answer All Questions');
                      }

                    } else {
                      if (index == selectedAnswer?.length) {
                        setModalVisible(true)
                        setDisplayQuestion(DisplayQuestion + 1)
                      } else {

                        setDisplayQuestion(DisplayQuestion + 1)
                      }
                    }
                  }}
                >
                  <Text style={{ color: "#FFFFFF", fontSize: 20, fontFamily: Mulish?.SemiBold }}>{`${DisplayQuestion == getQuestion?.length ? 'Submit' : 'Next'}`}</Text>
                </TouchableOpacity>
              </View>
            </View>
          )
      }

      {/* ****************Modal*********** */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <ScrollView style={{ flex: 1, backgroundColor: '#0B1215' }} showsVerticalScrollIndicator={false}>
          <View style={{
            width: scr_width,
            height: scr_height / 1.61,
            // height:scr_height/1,
            backgroundColor: '#0B1215',
            marginBottom: 12
          }}>
            <Image source={require('../../assets/Images/Donescreenimage.jpg')} style={{ width: '100%', height: '100%', resizeMode: 'cover', borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }} />
          </View>
          <View style={{ width: scr_width, height: 100, justifyContent: 'center', alignItems: 'center' }}>
            <FastImage source={require('../../assets/Gallery/star.gif')} style={{ width: 296, height: '100%', resizeMode: 'cover' }} />
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', gap: 15 }}>
            <Text style={{ color: '#FDE2D3', fontSize: 30, fontFamily: Mulish?.Bold }}>Just a Little More to Go!</Text>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: '#F5F5F5', fontSize: 16, fontFamily: Mulish?.Regular }}>You’re halfway through. Just a few more</Text>
              <Text style={{ color: '#F5F5F5', fontSize: 16, fontFamily: Mulish?.Regular }}> steps to complete your setup.</Text>
            </View>
          </View>
          <TouchableOpacity style={{
            backgroundColor: '#D8DFE9',
            justifyContent: 'center', alignItems: 'center', padding: 20, borderRadius: 100, margin: 20
          }}
            onPress={() => {
              setModalVisible(false);
            }}
          >
            <Text style={{ color: '#0B1215', fontSize: 16, fontFamily: Mulish?.SemiBold }}>Let’s Get This Done</Text>
          </TouchableOpacity>
        </ScrollView>

      </Modal>
    </View>
  );
};

export default SimTest;

const styles = StyleSheet.create({
  placeholderCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  placeholderText: {
    height: 50,
    width: '80%',
    borderRadius: 4,
  },
});
