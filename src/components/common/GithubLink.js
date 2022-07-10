import { Linking, StyleSheet, Text, TouchableOpacity } from "react-native";

const GithubLink = (props) => {
  return (
    //   <a
    //     className='github-redirect-link'
    //     href={props.url}
    //     target='_blank'
    //     rel='noopener noreferrer'
    //   >
    //     {props.text}
    //   </a>
    <TouchableOpacity onPress={() => Linking.openURL(props.url)}>
      <Text style={styles.link}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    fontWeight: "bold",
    color: "#4f46e5",
    fontSize: 24,
  },
});

export default GithubLink;
