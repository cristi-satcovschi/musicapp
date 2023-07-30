import React from "react";
import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { TRPCProvider } from "../utils/api";

const instruments = [
  { id: 0, name: "pian" },
  { id: 1, name: "tobe" },
];

const Synths = () => {
  return (
    <View className="flex flex-col items-center space-y-4 py-4">
      {instruments.map((instrument) => (
        <View
          key={instrument.id}
          className="bg-slate-100 border-slate-300 h-24 w-24 rounded-xl border-2 p-4"
        >
          <Text>{instrument.name}</Text>
        </View>
      ))}
    </View>
  );
};
const Menu = () => {
  return (
    <View className="p-4">
      <Text>meniu</Text>
    </View>
  );
};
const Timeline = () => {
  return (
    <View className="p-4">
      <Text>timeline</Text>
    </View>
  );
};

const RootLayout = () => {
  return (
    <TRPCProvider>
      <SafeAreaProvider>
        <View className="bg-slate-200 flex h-full flex-row">
          <View className="border-slate-400 w-32 border-r-2">
            <Synths />
          </View>
          <View className="flex flex-grow">
            <View className="border-slate-400 h-16 border-b-2">
              <Timeline />
            </View>
            <Stack
              screenOptions={{
                navigationBarHidden: true,
                statusBarHidden: true,
                headerShown: false,
              }}
            />
          </View>
          <View className="border-slate-400 w-32 border-l-2">
            <Menu />
          </View>
        </View>
        <StatusBar />
      </SafeAreaProvider>
    </TRPCProvider>
  );
};

export default RootLayout;
