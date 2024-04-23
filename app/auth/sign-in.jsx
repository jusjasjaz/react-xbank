import { ScrollView, View, Text, TouchableOpacity } from 'react-native'
import React,{ useState } from 'react'
import Checkbox from 'expo-checkbox';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'

const SignIn = () => {
  // const [form, setForm] = useState({
  //   email: '',
  //   password: ''
  // })
  const [isChecked, setChecked] = useState(false);
  const router = useRouter()
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="w-full h-full px-4 my-6">
          <Text className="text-4xl font-bcomfortaa pt-20">XBank</Text>
          <Text className="text-[#413C3CCC] font-sbInter pb-20">Sign in to your account.</Text>
          <FormField 
          title="EMAIL"
          // value={form.email}
          placeholder="enter email"
          handleChangeTExt={(e) => setForm({ ...form,
            email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField 
          title="PASSWORD"
          // value={form.password}
          placeholder="enter password"
          handleChangeTExt={(e) => setForm({ ...form,
            password: e })}
            otherStyles="mt-7"
          />
          <View className="my-7 flex-row justify-between">
            <View className="flex-row align-center">
              <Checkbox value={isChecked} onValueChange={setChecked} color={isChecked ? '#232325' : undefined} />
              <Text className="ml-2 font-ebInter uppercase">Remember me</Text>
            </View>
            <TouchableOpacity onPress={() => router.push('./reset-password')} >
              <Text className="font-ebInter uppercase">Forgot password</Text>
            </TouchableOpacity>
          </View>
          <CustomButton title="Login" handlePress={() => router.push('dashboard/homepage')} containerStyles="w-full bg-[#232325]"/>
        </View>
      </ScrollView>
      <View>
        <View className="px-4 my-6">
          <View className="flex-row gap-2 justify-center">
            <Text className="font-ebInter uppercase">don’t have an account?</Text>
          </View>
          <CustomButton title="Create account" containerStyles="w-full mt-3 border border-[#232325]" textStyles="text-black"/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SignIn