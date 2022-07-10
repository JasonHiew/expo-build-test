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

const OrgList = ({ org }) => {
  return org.items.length > 0 && !org.isFetching ? (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "white",
        height: 100,
        borderRadius: 10,
        padding: 10,
      }}
    >
      <View
        style={[
          styles.innerContainer,
          {
            flex: 2,
            marginRight: 10,
          },
        ]}
      >
        <Image source={{ uri: org.items[0].avatar_url }} style={styles.image} />
      </View>
      <View
        style={[
          styles.innerContainer,
          {
            flex: 7,
          },
        ]}
      >
        <Text style={styles.title}>{org.items[0].name} Repos</Text>
      </View>
    </View>
  ) : org.isFetching ? (
    <ActivityIndicator size="large" />
  ) : org.hasErrored ? (
    <Text>Error loading org details...</Text>
  ) : null;
};

export default OrgList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  innerContainer: {
    padding: 10,
    overflow: "hidden",
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
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
    fontSize: 24,
    fontFamily: "monospace",
    textShadowColor: "rgba(0, 0, 0, 0.4)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 15,
  },
});
