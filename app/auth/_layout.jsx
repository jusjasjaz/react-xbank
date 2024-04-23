import { StyleSheet, Text, View } from 'react-native'
import { Slot, Stack } from 'expo-router';
import React from 'react'

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="sign-in"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="reset-password"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="verification-code"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="verification-success"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
   )
 }

export default AuthLayout

const styles = StyleSheet.create({})