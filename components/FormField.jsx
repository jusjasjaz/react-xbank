import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React,{ useState } from 'react'
import { icons } from "../constants";

const FormField = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-primary font-ebInter text-xs">{title}</Text>
      <View className="w-full min-h-[54px] px-4 border-[1px] border-[#cfcfcf] rounded-md focus:border-black flex flex-row items-center">
        <TextInput className="flex-1 font-rInter"
        // value={value}
        placeholder={placeholder}
        placeholderTextColor="#cfcfcf"
        onChangeText={handleChangeText}
        emailIcon = {title === 'EMAIL'}placeholderValue="Michael"
        secureTextEntry = {title === 'PASSWORD' && !showPassword}
        {...props}
        />
        {title === "PASSWORD" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} activeOpacity={0.8}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeSlash}
              className="w-5 h-5"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
        {title === "EMAIL" && (
          <Image source={icons.envelope}
          className="w-5 h-5"
          resizeMode="contain"
          />
        )}
      </View>
    </View>
  )
}

export default FormField