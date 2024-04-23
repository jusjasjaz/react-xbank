import { ScrollView, View, Text, TouchableOpacity } from 'react-native'
import React,{ useState } from 'react'
import { useRouter, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import VerificationField from '../../components/VerificationField';

const verificatioCode = () => {
  const [code, setCode] = useState('');
  const [pinReady, setPinReady] = useState(false);
  const MAX_CODE_LENGTH = 6;

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="w-full h-full px-4 my-6">
          <Text className="text-4xl font-bcomfortaa pt-20">XBank</Text>
          <Text className="text-[#413C3CCC] font-sbInter pb-20">Verification Code</Text>
          <VerificationField 
            setPinReady={setPinReady}
            code={code}
            setCode={setCode}
            maxLength={MAX_CODE_LENGTH}
          />
          <CustomButton title="Reset Password"  handlePress={() => router.push('auth/verification-success')}  containerStyles="w-full bg-[#232325] mt-7"/>
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

export default verificatioCode