import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'

const Header = ({rightImage, leftImage, title, textStyles}) => {
  return (
   <SafeAreaView className="bg-white px-4">
    <View className="flex-row justify-between align-center">
      <TouchableOpacity activeOpacity={0.8}>
        <Image source={rightImage}/>
      </TouchableOpacity>
      <View>
        <Text className={`${textStyles}`}>{title}</Text>
      </View>
      <TouchableOpacity activeOpacity={0.8}>
        <Image source={leftImage}/>
      </TouchableOpacity>
    </View>
    
   </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({})
