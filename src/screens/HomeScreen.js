import { Alert, ScrollView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Card from "../components/Card";
import { DATA } from "../utils/Data";
import { Colors } from "../utils/Colors";
import InvoiceForm from "./InvoiceForm";
import Invoice from "./Invoice";
import Items from "../components/Items";

const HomeScreen = () => {
    const [showInvoice, SetshowInvoice] = useState('create');
    const [invoicedetail, Setinvoicedetail] = useState();

    const onItemClick = (detail) => {
        Setinvoicedetail(detail);
        SetshowInvoice('invoice');
    }

    const onCloseClick = () => {
        Setinvoicedetail();
        SetshowInvoice('create');
    }
     
    return (<ScrollView style={styles.container}>

        { showInvoice === 'invoice' &&
            <Invoice detail={invoicedetail} onCloseClick={onCloseClick}/> }

            { showInvoice === 'create' &&  
            <><Text style={styles.title}>Create Invoice</Text>
            <InvoiceForm Setinvoicedetail={Setinvoicedetail} SetshowInvoice={SetshowInvoice}/></>}
            
           { showInvoice === 'display' && 
           <><Text style={styles.title}>List</Text>
            {DATA.map((obj, index) => (<TouchableOpacity  key={index.toString()}  onPress={() => onItemClick(obj)}>
                <Card 
                    name={obj.name}  
                    date={obj.date} 
                    status={obj.status} 
                    sno={obj.sno} 
                    amount={obj.amount}/>
            </TouchableOpacity>))}
            </>}
            
    </ScrollView> )
    
};

const styles = StyleSheet.create({
    container:{
        flexGrow:1,
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        margin: 20,
        color: Colors.black,
    },
});    

export default HomeScreen;