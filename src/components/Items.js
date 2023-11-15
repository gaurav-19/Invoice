import React, { useState } from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import Input from './Input';
import { Colors } from '../utils/Colors';

const Items = ({items, Setitems}) => {
    const [itemnname, Setitemnname] = useState(); 
    const [itemprice, Setitemprice] = useState(); 

    const addItems = () => {
        if(itemnname && itemprice){
            var newItems = [...items];
            newItems.push({name: itemnname, price: +itemprice});
            Setitems(newItems);
        } else{
            Alert.alert('Enter details');
        }
        
    }

  return (
    <>
        <Text style={styles.title}>Add Item</Text>
        
        <Input value={itemnname} placeholder='Enter item name' onChangeText={Setitemnname}/>
        <Input value={itemprice} placeholder='Enter item price' onChangeText={Setitemprice}/>

        <View style={{flexDirection:'row', marginBottom: 40}}>
        {
        items.map((i,index) => {
            return <Text style={styles.items} key={index.toString()}>{i.name}</Text>
        })}
        </View>

        <Button title='Add item' onPress={addItems}/>
    </>
  )
}

const styles = StyleSheet.create({
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        margin: 20,
        color: Colors.black,
    },
    items:{
        borderWidth: 1,
        padding: 5,
        borderRadius: 10,
        borderColor: Colors.blue,
        fontSize: 14,
        fontWeight: '600',
        marginLeft: 20,
        color: Colors.blue
    }
}); 

export default Items;