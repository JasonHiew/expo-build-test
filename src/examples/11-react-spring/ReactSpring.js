import React, { Component, useState } from "react";
import { Text, View, TouchableWithoutFeedback, StyleSheet } from "react-native";
import { Spring, animated, easings } from "@react-spring/native";

const AnimatedView = animated(View);
const AnimatedText = animated(Text);

export default function ReactSpring() {
  const [flag, setFlag] = useState(true);

  const toggle = () => {
    setFlag(!flag);
  };

  return (
    <>
      <Spring
        native
        from={{ margin: 0, backgroundColor: "aqua" }}
        to={{
          margin: flag ? 100 : 0,
          backgroundColor: flag ? "aqua" : "magenta",
          borderRadius: flag ? 10 : 100,
        }}
      >
        {(props) => (
          <TouchableWithoutFeedback onPressIn={() => toggle()}>
            <AnimatedView style={{ ...styles.container, ...props }}>
              <Text style={styles.text}>{flag ? "TRUE" : "FALSE"}</Text>
            </AnimatedView>
          </TouchableWithoutFeedback>
        )}
      </Spring>
      <Spring
        native
        from={{
          backgroundColor: "#46e891",
          fontSize: 30,
        }}
        to={{
          backgroundColor: "#277ef4",
          fontSize: 50,
        }}
        config={{
          duration: 2000,
          easing: easings.easeInOutQuart,
        }}
        loop={{ reverse: true }}
      >
        {(props) => (
          <TouchableWithoutFeedback onPressIn={() => toggle()}>
            <AnimatedView style={{ ...styles.container, ...props }}>
              <AnimatedText style={{ ...styles.text, ...props }}>
                {flag ? "TRUE" : "FALSE"}
              </AnimatedText>
            </AnimatedView>
          </TouchableWithoutFeedback>
        )}
      </Spring>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },

  text: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
    textShadowColor: "white",
  },

  loopedContainer: {
    flex: 1,
    margin: 0,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});
