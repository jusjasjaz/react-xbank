import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {images} from '../constants'
import {icons} from '../constants'

const BottomSheet = () => {
  return (
    <View style={styles.backdrop}>
      <View style={styles.bottomSheet} className="px-6 py-10">
        <View className="flex-row items-center">
          <Image source={images.friends} className="w-14 h-14 mr-4"/>
          <Text className="font-chivo font-normal">My Friends</Text>
        </View>
        <View className="border-t border-[#F2F2F2] my-4"></View>
        <View className="flex-row items-center">
          <Image source={images.cards} className="w-14 h-14 mr-4"/>
          <Text className="font-chivo font-normal">My Cards</Text>
        </View>
        <TouchableOpacity activeOpacity={0.5}>
          <View className="flex-row items-center mt-12 justify-center">
            <Image className="w-3 h-3 mr-2" source={icons.close}/>
            <Text className="font-chivo">Close</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
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
      height: '30%',
      backgroundColor: 'white',
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20
    }
})