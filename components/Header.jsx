import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'

const Header = ({leftImage, rightImage, title, textStyles, handlePressRight, handlePressLeft, rightImageStyles, leftImageStyles}) => {
  return (
    <View className="flex-row justify-between align-center items-center bg-white px-4 py-2">
      <TouchableOpacity activeOpacity={0.8} onPress={handlePressLeft}>
        <Image source={leftImage} className={`${leftImageStyles}`}/>
      </TouchableOpacity>
      <View className=" ">
        <Text className={`${textStyles}`}>{title}</Text>
      </View>
      <TouchableOpacity activeOpacity={0.5} onPress={handlePressRight}>
        <Image source={rightImage} className={`${rightImageStyles}`}/>
      </TouchableOpacity>
    </View>

  )
}

export default Header

const styles = StyleSheet.create({})
