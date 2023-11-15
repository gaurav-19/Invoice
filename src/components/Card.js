import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Colors } from "../utils/Colors";

const Card = ({name, date, sno, status, amount}) => {
     
    return (<View style={styles.container}>
            <View>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.date}>{date}</Text>
                <Text style={styles.serial}>S No: {sno}</Text>
            </View>
            <View>
                <Text style={[styles.status, status === 'Unpaid' ? {color: Colors.red} : {}]}>{status}</Text>
                <Text style={styles.price}>₹{amount}</Text>
            </View>
    </View> )
    
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.white,
        borderLeftWidth: 4,
        borderLeftColor: Colors.black,
        borderWidth: 0.2,
        borderRadius: 16,
        borderColor: Colors.darkGrey,
        padding: 12,
        marginHorizontal: 10,
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title:{
        color: Colors.black,
        fontSize: 16,
        fontWeight: 'bold',
        padding: 4,
    },
    date:{
        fontSize: 12,
        color: Colors.darkGrey,
        padding: 4,
    },
    serial:{
        fontSize: 12,
        color: Colors.darkGrey,
        padding: 4,
    },
    status:{
        padding:6,
        fontSize: 10,
        fontWeight: 'bold',
        borderWidth: 0.5,
        borderColor: Colors.lightGrey,
        borderRadius: 15,
        color: Colors.darkGrey,
        alignSelf: 'flex-end',
        backgroundColor: Colors.bggrey,
        overflow: 'hidden'
    },
    price:{
        color: Colors.black,
        fontSize: 16,
        fontWeight: '800',
        padding: 4,
    },
});    

export default Card;