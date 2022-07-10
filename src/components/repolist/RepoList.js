import { getRepos, getNextReposBatch } from "../../redux/actions";
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
  Pressable,
} from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const RepoList = ({ repos }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const renderItem = ({ item }) => (
    <Item title={item.name} description={item.description} />
  );

  const keyExtractor = (item) => item.id;

  const preparedData = repos.items.map((item) => {
    // only return the properties that need to be rendered and leave everything else
    return {
      id: item.id,
      name: item.name,
      description: item.description,
    };
  });

  const Item = ({ title, description }) => (
    <Pressable
      style={({ pressed }) => [
        {
          transform: [pressed ? { translateY: 5 } : { translateY: 0 }],
        },
        styles.item,
      ]}
      onPress={() => {
        navigation.push("RepoDetails", { repoName: title });
      }}
    >
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      <Text style={styles.description} numberOfLines={2}>
        {description}
      </Text>
    </Pressable>
  );

  return repos.items.length > 0 ? (
    <FlatList
      data={preparedData}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      onEndReached={() => dispatch(getRepos())}
    />
  ) : // repos.items.map((repo, idx) => (
  //   <div
  //     key={idx}
  //     className="repo-list-item-hover"
  //     onClick={(e) => handleClick(e, repo)}
  //   >
  //     <div>
  //       <h3 className="repo-list-item-title">{repo.name}</h3>
  //       <p className="repo-list-item-description">{repo.description}</p>
  //     </div>
  //   </div>
  // ))
  repos.isFetching && repos.items.length === 0 ? (
    <ActivityIndicator size="large" />
  ) : repos.hasErrored ? (
    <Text>Error loading repos...</Text>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  item: {
    flexDirection: "column",
    backgroundColor: "white",
    height: 100,
    padding: 20,
    marginHorizontal: 10,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.43,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    fontSize: 15,
  },
});

export default RepoList;
