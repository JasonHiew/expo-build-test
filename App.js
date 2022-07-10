import "react-native-gesture-handler";

import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, Text, View, StatusBar, Button } from "react-native";

import { Provider } from "react-redux";
import store from "./src/redux/store";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HelloWorld1 from "./src/examples/1-hello-world/1.HelloWorld1";
import HelloWorld2 from "./src/examples/1-hello-world/2.HelloWorld2";
import TheLight from "./src/examples/2-the-light/TheLight";
import MomoLogin from "./src/examples/3-login-page/1.MomoLogin";
import FacebookLogin from "./src/examples/3-login-page/2.FacebookLogin";
import RegisterForm from "./src/examples/4-register-form/RegisterForm";
import InstagramFeed from "./src/examples/5-instagram-feed/InstagramFeed";
import RockPaperScissors from "./src/examples/6-rock-paper-scissors/RockPaperScissors";
import StopWatch from "./src/examples/7-stopwatch/StopWatch";
import BMICalculator from "./src/examples/8-bmi-calculator/BMICalculator";
import WorldwideNews from "./src/examples/9-news/WorldwideNews";
import CarouselCards from "./src/examples/10-carousel/CarouselCards";
import { GithubBrowserMainScreen } from "./src/screens/GithubBrowserMainScreen";
import { RepoDetailsScreen } from "./src/screens/RepoDetailsScreen";

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const TestComp = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Test</Text>
    </View>
  );
};

const DrawerComp = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Github Browser"
        component={GithubBrowserMainScreen}
      />
      <Drawer.Screen name="Carousel Snap Grid" component={CarouselCards} />
      <Drawer.Screen name="Hello 1" component={HelloWorld1} />
      <Drawer.Screen name="Hello 2" component={HelloWorld2} />
      <Drawer.Screen name="The Light" component={TheLight} />
      <Drawer.Screen name="Momo Login" component={MomoLogin} />
      <Drawer.Screen name="FB Login" component={FacebookLogin} />
      <Drawer.Screen name="Register Form" component={RegisterForm} />
      <Drawer.Screen name="Instagram Feed" component={InstagramFeed} />
      <Drawer.Screen name="Rock Paper Scissors" component={RockPaperScissors} />
      <Drawer.Screen name="Stopwatch" component={TabsComp} />
      <Drawer.Screen name="BMI Calculator" component={BMICalculator} />
      <Drawer.Screen name="Worldwide News" component={WorldwideNews} />
    </Drawer.Navigator>
  );
};

const TabsComp = () => {
  return (
    <Tab.Navigator
    // initialRouteName="HelloWorld1"
    // tabBar={() => null}
    // screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Stop Watch" component={StopWatch} />
      <Tab.Screen name="TEST" component={TestComp} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider style={styles.AndroidSafeArea}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
            headerBackVisible={true}
          >
            <Stack.Screen name="Home" component={DrawerComp} />
            <Stack.Screen
              name="RepoDetails"
              component={RepoDetailsScreen}
              options={{ title: "", headerShown: true }}
            />
            {/* <Stack.Screen name="StopWatch" component={TabsComp} /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
