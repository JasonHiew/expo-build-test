import React, { useState } from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function HelloWorld1() {
  return (
    <>
      <StatusBar style="dark" />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#3498db",
        }}
      >
        {/* https://reactnative.dev/docs/text */}
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "#fff",
            textTransform: "uppercase",
          }}
        >
          Hello world!
        </Text>
      </View>
    </>
  );
}
