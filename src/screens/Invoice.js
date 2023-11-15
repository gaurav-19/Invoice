import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../utils/Colors";
import Button from "../components/Button";

const Invoice = ({detail, onCloseClick}) => {
    const [subtotal, Setsubtotal] = useState();
    const [total, Settotal] = useState();

    useEffect(() => {
        var t = 0;
        detail.items.map((it, i) => {t += it.price});
        Setsubtotal(t);
        var tax = 0.10 * subtotal;
        Settotal(tax+subtotal)
    },[detail, subtotal, total]);

    return(<View>
        <Text style={styles.title}>Invoice</Text>
        <View style={styles.container}>

            <Text style={[styles.subtext,{marginBottom:10}]}>{detail.date} / {detail.sno}</Text>

            <Text style={styles.subtext}>To: {detail.name}</Text>
            <Text style={styles.subtext}>Add: {detail.address}</Text>
            <Text style={styles.subtext}>Email: {detail.email}</Text>

            <View style={styles.line}></View>
            
            {detail.items.map((it, i) => <View style={styles.horizontal}  key={i.toString()} >
            <Text style={styles.list}>{it.name}</Text><Text style={styles.list}>₹{it.price}</Text>
            </View>
            )}
            
            <View style={styles.line}></View> 

            <View style={styles.horizontal}>
            <Text style={styles.subtotal}>Subtotal</Text><Text style={styles.subtotal}>₹{subtotal}</Text>
            </View>
            <View style={styles.horizontal}>
            <Text style={styles.subtotal}>Tax</Text><Text style={styles.subtotal}>10%</Text>
            </View>

            <View style={styles.horizontal}>
                <Text style={styles.total}>Invoice</Text><Text style={styles.total}>₹{total}</Text>
            </View>
        </View>
        <View style={styles.btnContainer}>
            <Button text='Close' onPress={onCloseClick}/>
            <Button text={detail.status === 'Paid' ? 'Send Email' : 'Retry'} onPress={() => Alert.alert('We are currently working on that!')}/>
        </View>
    </View>)
};

const styles = StyleSheet.create({
    container:{
        flexGrow:1,
        padding: 20,
        // margin: 10,
        // borderRadius: 12,
        backgroundColor: Colors.white
    },
    title:{
        color: Colors.black,
        fontSize: 42,
        fontWeight: '900',
        margin:20
    },
    subtext:{
        color: Colors.black,
        fontSize: 14,
        fontWeight: 'bold',
        padding: 4,
    },
    line:{
        borderBottomWidth: 4,
        marginVertical: 10
    },
    subtotal:{
        color: Colors.black,
        fontSize: 22,
        fontWeight: 'bold',
        margin: 10,
    },
    total:{
        color: Colors.black,
        fontSize: 35,
        fontWeight: '900',
        margin: 10,
    },
    list:{
        color: Colors.black,
        fontSize: 22,
        margin: 10,
    },
    horizontal:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btnContainer:{
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
}); 

export default Invoice;