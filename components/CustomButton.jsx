import { TouchableOpacity, Text, Image } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress, containerStyles, textStyles, icons}) => {
  return (
    <TouchableOpacity
    onPress={handlePress}
    activeOpacity={0.8}
     className={`rounded-md min-h-[54px] justify-center items-center ${containerStyles}`}>
      <Text className={`text-white text-base font-mInter ${textStyles}`}>{title}</Text>
      {/* <Image source={icons} className={`w-8 pb-4`}/> */}
    </TouchableOpacity>
  )
}

export default CustomButton