import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View } from "react-native";
import { Link, Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerStyle={{ height: '100%'}}>
        <View className="w-full justify-center items-center h-full px-4">
          <Text className="text-4xl font-rcomfortaa">XBank</Text>
          {/* <CustomButton title="Continue" handlePress={() => router.push('auth/sign-in')} containerStyles="w-full mt-7 bg-[#232325]"/> */}
          <CustomButton title="Continue" handlePress={() => router.push('dashboard/homepage')} containerStyles="w-full mt-7 bg-[#232325]"/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
