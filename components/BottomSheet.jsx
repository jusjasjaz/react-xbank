import { StyleSheet, Text, View, Image, TouchableOpacity, Animated, Pressable} from 'react-native'
import React, {useRef} from 'react'
import {images} from '../constants'
import {icons} from '../constants'

const BottomSheet = ({ setStatus}) => {
  const slide = React.useRef(new Animated.Value(300)).current;

  const slideUp = () => {
    Animated.timing(slide, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const slideDown = () => {
    Animated.timing(slide, {
      toValue: 300,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  React.useEffect(() => {
    slideUp()
  }, [])

  //close modal in backdrop
  const closeModal = () => {
    slideDown();
    setTimeout(() => {
      setStatus(false);
    }, 500)
  }

  return (
    <Pressable onPress={ closeModal } style={styles.backdrop}>
      <Pressable style={{ width:'100%', height: '30%'}}>
        <Animated.View style={[styles.bottomSheet, {transform: [{translateY: slide}]}]} className="px-6 py-10">
          <TouchableOpacity activeOpacity={0.5} className="flex-row items-center">
            <Image source={images.friends} className="w-14 h-14 mr-4"/>
            <Text className="font-chivo font-normal">My Friends</Text>
          </TouchableOpacity>
          <View className="border-t border-[#F2F2F2] my-4"></View>
          <TouchableOpacity activeOpacity={0.5} className="flex-row items-center">
            <Image source={images.cards} className="w-14 h-14 mr-4"/>
            <Text className="font-chivo font-normal">My Cards</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} onPress={ closeModal } >
            <View className="flex-row items-center mt-12 justify-center">
              <Image className="w-3 h-3 mr-2" source={icons.close}/>
              <Text className="font-chivo">Close</Text>
            </View>
          </TouchableOpacity>
        </Animated.View>
      </Pressable>
      
    </Pressable>
  )
}

export default BottomSheet

const styles = StyleSheet.create({
    backdrop: {
      position: 'absolute',
      flex: 1,
      top: 0,
      left: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      width: '100%',
      height: '100%',
      justifyContent: 'flex-end'
    },

    bottomSheet: {
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20
    }
})