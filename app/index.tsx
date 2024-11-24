import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Redirect } from "expo-router";

const Home = () => {
  // const developer: string = "Sujahath";
  return (
    // <View className={"flex-1 items-center justify-center bg-amber-100"}>
    //   <View style={styles.container}>
    //     <Text className={"text-2xl text-blue-800"}>HOME</Text>
    //     <Text className={"text-xs text-black-100"}>
    //       Developed by: {developer}
    //     </Text>
    //   </View>
    // </View>
    <Redirect href="/(auth)/welcome" />
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: "80%",
    padding: 10,
    margin: 10,
    backgroundColor: "white",
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
});
