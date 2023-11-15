import { Alert, ScrollView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Input from "../components/Input";
import Items from "../components/Items";
import Button from "../components/Button";

const InvoiceForm = ({Setinvoicedetail,SetshowInvoice}) => {
    const [name, Setname] = useState('');
    const [email, Setemail] = useState('');
    const [address, Setaddress] = useState('');
    // const [date, setDate] = useState(new Date());
    const [items, Setitems] = useState([{name: 'Item 1', price: 300}, ]); 

    const onCreate = () => {
        if(name && email && address){
            var obj = {
                name: name, date: new Date().toLocaleString(), sno: '1011',
                address: address, email: email, 
                items: items
            };
            Setinvoicedetail(obj);
            SetshowInvoice('invoice');
        } else{
            Alert.alert('Invalid')
        }
    };

    return (<ScrollView style={styles.container}>
            <Input title='Name' value={name} placeholder='Enter name' onChangeText={Setname}/>
            <Input title='Email' value={email} placeholder='Enter email' onChangeText={Setemail}/>
            <Input title='Address' value={address} placeholder='Enter address' onChangeText={Setaddress} line={3}/>
            <Items items={items} Setitems={Setitems}/> 

            <View style={{alignItems: 'center', marginTop: 40}}>
                <Button text='Create' onPress={onCreate}/>
            </View>
    </ScrollView> )
    
};

const styles = StyleSheet.create({
    
});    

export default InvoiceForm;