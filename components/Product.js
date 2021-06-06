import React , {useState} from 'react';
import {View,Text,StyleSheet,ScrollView, Button, Image, SafeAreaView} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
 function Product({product}) {
     const [amount,setAmount] = useState(0)
     const addItem = () =>{
         const add = amount +1
         setAmount(add)
     }
     const removeItem = () =>{
         const remove = amount -1
         if(remove == -1)
         {}else{
         setAmount(remove)}
     }
    return(
        <View style={styles.container}>     
        <View style={styles.horizontal}>
        <Image style={styles.image} source={{uri:product.image}}/>
         <Text style={styles.title}>{product.title}</Text>
         </View>
         <Text style={styles.price}>{product.price}</Text> 
         <View style={styles.content}>
         <Button style={styles.tasarım} color="#6b946b" title="Satın Al" onPress={addItem}/>
         <Text style={styles.amount}>{amount}</Text>
         <Button disabled={amount==0} style={styles.tasarım} color="#380000" title="Sat" onPress={removeItem}/>
         </View>
        </View>
    )
}
const styles = StyleSheet.create({
 production:{
   backgroundColor:"#222",
   alignSelf:"center",
 },
 amount:{
     color:'rgba(255,255,255,.8)',
     alignContent:"center",
     alignSelf:"center",

 },
 price:{
    marginLeft:"auto",
    color: 'rgba(255,255,255,.6)',
 },
 title:{
     color: 'rgba(255,255,255,.8)',
     alignSelf:"center",

 },
 horizontal:{
     flexDirection:"row",
     
 },
 content:{
    backgroundColor:"#4caf501a",
    borderRadius:15,
    flexDirection:"row",
    borderWidth:1,
    borderColor:"#333",
    padding:10,
   
    
 },
 container:{
   padding:10,
 },
 tasarım:{   
    backgroundColor:"#333",
    marginRight:"auto",

 },
 image:{
    width: 50,
    height: 50,
    alignContent:"center",
    alignSelf:"center",
    borderRadius:50,
    paddingLeft:15,
    marginRight:"auto"
 },
})
export default Product
