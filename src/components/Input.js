import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../utils/Colors";
import React from "react";

const Input = ({title, value, placeholder, onChangeText, lines}) => {
     
    return (<View style={styles.container}>
        <View style={styles.titleContainer}>
            {title && <Text style={styles.title}>{title}</Text>}
        </View>
           
        <TextInput
            style={styles.input}
            onChangeText={(text) => onChangeText(text)}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={Colors.lightGrey}
            multiline={true}
            numberOfLines={lines}
        />
    </View> )
    
};

const styles = StyleSheet.create({
    container:{
        width: '100%',
        // alignItems: 'flex-start',
        marginVertical: 10,
    },
    titleContainer:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    title:{
        fontSize: 14,
        marginLeft: 18,
        padding: 8,
    },
    input:{
        justifyContent: 'center',
        backgroundColor: Colors.white,
        borderColor: Colors.grey,
        borderRadius: 10,
        padding: 8,
        fontSize: 20,
        marginHorizontal: 19,
    },
});    

export default Input;