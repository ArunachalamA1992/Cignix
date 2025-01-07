import React, { useState, useRef } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { Text } from 'react-native';
import { Mulish } from '../Global/FontFamily';
import common_fn from './common_fn';

const VideoPlayerWithThumbnail = ({ videoUri, thumbnailUri,data,setCurrentdata,currentdata }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoPlayerRef = useRef(null);
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleProgress = (progress) => {
    setCurrentTime(progress.currentTime);
  };

  const handleLoad = (meta) => {
    setDuration(meta.duration);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  return (
    <View style={styles.container}>
      {!isPlaying && (
        <Pressable style={styles.thumbnailContainer} onPress={()=>{
            if(data?.status == "active" || data?.status == "completed")
            {
                setCurrentdata(data)
            }else{
              common_fn.showToast("This video is locked");
            }

        }}>
          <Image source={{ uri: thumbnailUri }} style={styles.thumbnail} />
         {
            data?.status == "inactive" ? 
            (
<View style={{position:'absolute',left:'40%',top:'35%',backgroundColor:'#fff',padding:10,alignItems:'center',borderRadius:20}}>
           <FontAwesome name="lock" size={25} color="#000" />
          </View>
            ):(
              data?.status == "completed" ?
              (
<View style={{position:'absolute',left:'30%',top:'35%',backgroundColor:'#fff',padding:10,alignItems:'center',borderRadius:20}}>
            <Text style={{fontSize:15,fontFamily:Mulish.Bold}}>Completed</Text>
          </View>
              ):(
<View style={{position:'absolute',left:'20%',top:'35%',backgroundColor:'#fff',padding:10,alignItems:'center',borderRadius:20}}>
            <Text style={{fontSize:15,fontFamily:Mulish.Bold}}>Recently Unlocked</Text>
          </View>
              )

            )
         } 
        </Pressable>
      )}
      {isPlaying && (
        <>
        <Video
        ref={videoPlayerRef}
          source={{ uri: videoUri }}
          style={styles.video}
          controls={false}
          paused={!isPlaying}
          onProgress={handleProgress}
          onLoad={handleLoad}
          resizeMode="contain"
        />
         <View style={styles.controls}>
        <TouchableOpacity onPress={togglePlayPause}>
          <Icon
            name={isPlaying ? 'pause' : 'play'}
            size={30}
            color="#FFF"
          />
        </TouchableOpacity>

        <Text style={styles.time}>{formatTime(currentTime)} / {formatTime(duration)}</Text>
      </View>
        </>
        
      )}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  thumbnailContainer: {
    width: '100%',
    height: '100%',
    position:'relative'
  },
  thumbnail: {
    width: '100%',
    height: '100%',
  },
  video: {
    width: '100%',
    height: '100%',
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
});

export default VideoPlayerWithThumbnail;
