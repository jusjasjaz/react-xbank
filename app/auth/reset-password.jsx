import { ScrollView, View, Text, TouchableOpacity } from 'react-native'
import React,{ useState } from 'react'
import { useRouter, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'

const resetPassword = () => {
  const [form, setForm] = useState({
    email: ''
  })

  return (
  <SafeAreaView className="bg-white h-full">
    <ScrollView>
      <View className="w-full h-full px-4 my-6">
        <Text className="text-4xl font-bcomfortaa pt-20">XBank</Text>
        <Text className="text-[#413C3CCC] font-sbInter pb-20">Reset Password</Text>
        <FormField 
          title="EMAIL"
          //value={form.email}
          placeholder="enter email"
          handleChangeText={(e) => setForm({ ...form,
            email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <CustomButton title="Reset Password" 
          containerStyles="w-full mt-7 bg-[#232325]" handlePress={() => router.push('auth/verification-code')} />
      </View>
    </ScrollView>
    <View>
      <View className="px-4 my-6">
        <View className="flex-row gap-2 justify-center">
          <Text className="font-ebInter uppercase">already have an account?</Text>
        </View>
        <CustomButton title="Login" 
        containerStyles="w-full mt-3 border border-[#232325]" 
        textStyles="text-black" 
        handlePress={() => router.push('auth/sign-in')} />
      </View>
    </View>
  </SafeAreaView>
  )
}

export default resetPassword

