import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'

const Header = ({leftImage, rightImage, title, textStyles, handlePress, imageStyles}) => {
  return (
   <SafeAreaView className="bg-white px-4">
    <View className="flex-row justify-between align-center items-center">
      <TouchableOpacity activeOpacity={0.8}>
        <Image source={leftImage}/>
      </TouchableOpacity>
      <View className=" ">
        <Text className={`${textStyles}`}>{title}</Text>
      </View>
      <TouchableOpacity activeOpacity={0.8}
      onPress={handlePress}>
        <Image source={rightImage} className={`${imageStyles}`}/>
      </TouchableOpacity>
    </View>
    
   </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({})
