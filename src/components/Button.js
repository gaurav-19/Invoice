import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors } from "../utils/Colors";

const Button = (props) => {
    return(
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button:{
        width: '40%',
        margin: 8,
        padding: 15,
        borderRadius: 10,
        backgroundColor: Colors.black,
        alignItems: 'center'
    },
    text:{
        color: Colors.white,
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export default Button;