import Icon from "react-native-vector-icons/Octicons";
import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const RepoIconBtn = (props) => {
  return (
    <TouchableOpacity onPress={() => Linking.openURL(props.url)}>
      <View>
        {props.type === "stars" && (
          <Icon name="star" size={30} color="#4f46e5" style={styles.icon} />
        )}
        {props.type === "forks" && (
          <Icon
            name="repo-forked"
            size={30}
            color="#4f46e5"
            style={styles.icon}
          />
        )}
        {props.type === "watchers" && (
          <Icon name="eye" size={30} color="#4f46e5" style={styles.icon} />
        )}
        {props.type === "language" && (
          <Icon name="book" size={30} color="#4f46e5" style={styles.icon} />
        )}
        <Text style={styles.text}>{props.type_count}</Text>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    textAlign: "center",
    color: "#4f46e5",
  },
  text: {
    fontWeight: "light",
    textAlign: "center",
    color: "black",
    fontSize: 16,
  },
});

export default RepoIconBtn;
