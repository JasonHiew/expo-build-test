import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getRepos,
  addNextReposBatch,
  getOrg,
  getSpecificRepo,
  searchRepo,
  clearSearchRepo,
} from "../redux/actions";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  Alert,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { getData } from "../services/services";
import OrgList from "../components/orglist/OrgList";
import RepoList from "../components/repolist/RepoList";
import { useNavigation } from "@react-navigation/native";
import GithubLink from "../components/common/GithubLink";
import RepoIconBtn from "../components/common/RepoIconBtn";

export const RepoDetailsScreen = ({ route }) => {
  const navigation = useNavigation();
  const { repoDetails } = useSelector((state) => state);

  const dispatch = useDispatch();

  const repoName = route.params.repoName;

  // get data when page is loading
  useEffect(() => {
    // dispatch(getRepos());
    // dispatch(getOrg());
    dispatch(getSpecificRepo(repoName));
    navigation.setOptions({ title: repoName });
    // const resetOnUnmount = () => dispatch(clearSearchRepo()); //Trying to fix the double mounting bug
    // return resetOnUnmount;
  }, [dispatch]);

  return repoDetails.items.length > 0 && !repoDetails.isFetching ? (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <View
        style={{
          flexDirection: "column",
          backgroundColor: "white",
          height: "30%",
          borderRadius: 10,
          padding: 10,
        }}
      >
        <View
          style={[
            styles.innerContainer,
            {
              flex: 1,
              flexDirection: "row",
            },
          ]}
        >
          <GithubLink
            url={repoDetails.items[0].owner.html_url}
            text={repoDetails.items[0].owner.login}
          />
          <Text style={styles.title}>/</Text>
          <GithubLink
            url={repoDetails.items[0].html_url}
            text={repoDetails.items[0].name}
          />
        </View>
        <View
          style={[
            styles.innerContainer,
            {
              flex: 2,
            },
          ]}
        >
          <Text style={styles.description}>
            {repoDetails.items[0].description}
          </Text>
        </View>
        <View
          style={[
            styles.innerContainer,
            {
              flex: 3,
              flexDirection: "row",
              justifyContent: "space-around",
              paddingHorizontal: 30,
            },
          ]}
        >
          <RepoIconBtn
            url={repoDetails.items[0].html_url}
            type_count={repoDetails.items[0].stargazers_count}
            type="stars"
            text="Stars"
          />
          <RepoIconBtn
            url={repoDetails.items[0].html_url}
            type_count={repoDetails.items[0].forks_count}
            type="forks"
            text="Forks"
          />
          <RepoIconBtn
            url={repoDetails.items[0].html_url}
            type_count={repoDetails.items[0].watchers_count}
            type="watchers"
            text="Watchers"
          />
          <RepoIconBtn
            url={repoDetails.items[0].html_url}
            type_count={repoDetails.items[0].language}
            type="language"
            text="language"
          />
        </View>
      </View>
    </View>
  ) : repoDetails.isFetching ? (
    <ActivityIndicator size="large" />
  ) : repoDetails.hasErrored ? (
    <Text>Error loading repo details...</Text>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  innerContainer: {
    padding: 5,
    backgroundColor: "white",
  },
  image: {
    width: undefined,
    height: "100%",
    borderRadius: 10,
    alignSelf: "center",
    resizeMode: "cover",
    aspectRatio: 1,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    color: "#4f46e5",
    fontSize: 24,
  },
  description: {
    fontWeight: "light",
    textAlign: "left",
    color: "black",
    fontSize: 16,
  },
});
