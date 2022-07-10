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
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { getData } from "../services/services";
import OrgList from "../components/orglist/OrgList";
import RepoList from "../components/repolist/RepoList";

export const GithubBrowserMainScreen = () => {
  const { repos, org, searchRepos } = useSelector((state) => state);
  // const [data, setData] = useState("Empty");

  const dispatch = useDispatch();

  // get data when page is loading
  useEffect(() => {
    dispatch(getRepos());
    dispatch(getOrg());
    // console.log(org);
    // console.log(repos);
    // const resetOnUnmount = () => dispatch(clearSearchRepo()); //Trying to fix the double mounting bug
    // return resetOnUnmount;
  }, [dispatch]);

  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        paddingBottom: 10,
        backgroundColor: "#4ade80",
      }}
    >
      <StatusBar style="dark" />

      <OrgList org={org} />
      <RepoList repos={repos} />
    </View>
  );
};

const styles = StyleSheet.create({
  article: {
    flexDirection: "row",
    paddingVertical: 15,
  },
  articleImage: {
    width: 150,
    height: 85,
    resizeMode: "contain",
    marginRight: 15,
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  articleDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  articlePublishedAt: {
    fontSize: 14,
  },
});
