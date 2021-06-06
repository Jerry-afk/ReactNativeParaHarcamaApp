import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View, Button,ScrollView,RefreshControl} from 'react-native';
import Product from './components/Product'
import Products from './products.json'

export default function App() {
  const[money , SetMoney] = useState(100);
  const [refreshing, Setrefreshing]= useState(false)
  const onRefresh = () =>{
    Setrefreshing(true);
    setTimeout(()=>{
      Setrefreshing(false)
    },2000)
  }
  return (
    <ScrollView refreshControl={
      <RefreshControl
        tintColor={"red"}
        refreshing={refreshing}
        title={"Yükleniyor..."}
        titleColor={"#fff"}
        onRefresh={onRefresh}
      />
    } style={styles.container}>
    {Products.map(item =>(
      <View key={item.id} style={styles.product}>
      <Product key={item.id} product={item}/>
      </View>
    ))}
    </ScrollView> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding:20,
    marginTop:23
  },

 product:{
  backgroundColor:"#222",
  padding:10,
  marginBottom:10,
 },
});
