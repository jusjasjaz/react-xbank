import { StyleSheet, Text, View } from 'react-native'
import { Slot, Stack } from 'expo-router';
import React from 'react'

const DashboardLayout = () => {
  return (
    <Stack>
      <Stack.Screen 
        name="homepage"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="settings"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="profile"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  )
}

export default DashboardLayout

const styles = StyleSheet.create({})