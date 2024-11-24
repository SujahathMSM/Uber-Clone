import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";

const OnBoarding = () => {
  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/sign-up");
        }}
        style={Styles.skipButton}
        // className={"w-full flex justify-end items-end p-5"}
      >
        <Text className="text-black text-md font-JakartaBold">Skip</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OnBoarding;

const Styles = StyleSheet.create({
  skipButton: {
    position: "absolute",
    top: 20, // Distance from the top
    right: 20, // Distance from the right edge
  },
});
