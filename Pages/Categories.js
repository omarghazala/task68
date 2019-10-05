import React,{useState,useEffect}from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,FlatList,
    StatusBar,Button,Image,Dimensions,TouchableOpacity
  } from 'react-native';
  
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SplashScreen from '../Pages/SplashScreen';
import CategoriesNavbar from '../Components/CategoriesNavbar';
import { tsPropertySignature } from '@babel/types';
import { NavigationEvents } from 'react-navigation';
const Categories = (props)=> {
    
    
const viewStyles = {
  backgroundColor: 'red',
  flex:1,
 // backgroundColor: Colors.lighter,
  flexDirection: 'column',
  justifyContent:'center',
  alignItems: 'center' };
const textStyles = {
  color: 'white',
  fontSize: 40,
  fontWeight: 'bold'
};
const {navigate} = props.navigation;
const [categories,setCategories] = useState()
const [numColumns,setNumColumns] = useState(2)
const productsFunction = ()=>{
  navigate('Products')

}

async function getCategoriesFromApi() {
  try {
    const abortController = new AbortController()
    const signal = abortController.signal
    let response = await fetch(
      // 'https://facebook.github.io/react-native/movies.json',
      'https://5bcce576cf2e850013874767.mockapi.io/task/categories',{signal:signal}
    );
    let responseJson = await response.json();
    //cat = responseJson
    setCategories(responseJson)
    return function cleanup(){
      abortController.abort()
    }
    // for(let x of responseJson){
    //   console.log(x["products"][0])
    // }
    //console.log(responseJson);
    //return responseJson;

  } catch (error) {
    console.error(error);
  }
  
}
useEffect(()=>{
  getCategoriesFromApi()
  //let cat = getCategoriesFromApi()
  //setCategories(cat);
  //console.log(cat); 
})

return (
  <View style={{flex:1}}>
    <View style={{flex:0.1,backgroundColor:'white'}}>
      <CategoriesNavbar navbarStyle={styles.navbarStyle} iconType="FontAwesome" 
      iconName="navicon" productsFun={()=>productsFunction()}/>
    </View>
    <View style={{flex:0.9}}>
      <View style={{flex:0.3,backgroundColor:'blue'}}>
        <Image
          style={{height:'100%',width:'100%'}}
          source={require('../Images/Fruits.jpg')}
          alignSelf='center' resizeMode='cover'
          />
          {/* <Text style={{backgroundColor:'green'}}>hiiiiiiiiiiiiiiiiiiiiiii</Text> */}
      </View>
      <View style={{ flex:0.7,backgroundColor:'white'}}>
          <FlatList

            data={categories}
            renderItem={({item}) =>
            <TouchableOpacity style={{flex:1,justifyContent: 'center',alignItems: 'center',padding:20,backgroundColor:'white'
                        ,width:Dimensions.get('window').width / 2,height:Dimensions.get('window').width / 2}}
                        onPress={()=>{navigate('Products',{title:item.name,cat:item.category_img, na:'oma',products:item.products})}}>
              <Image
                style={{width:Dimensions.get('window').width / 2.1,height:Dimensions.get('window').width / 2.1
                      ,margin:1,resizeMode:'cover'}}
                source={{uri:item.category_img}}

              />
              <Text style={{position:'absolute',bottom:10,left:10,fontSize:20,color:'white'}} >{item.name}</Text>
              {/* <Text>{item.id}</Text> */}
            </TouchableOpacity>

          }
            keyExtractor={({id}, index) => id}
            numColumns={numColumns}
            style={{flex:1,overflow:'hidden'}}
            scrollEnabled={false}
            
          />
      </View>
    </View>
  </View>
);
  }
  const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: Colors.lighter,
      flexDirection: 'column',
      justifyContent:'center',
      alignItems: 'center',
      },
    welcome:{
      fontSize:20
    },
    instructions:{
      fontSize:20
    },
    navbarStyle:{
      backgroundColor:'white'
    }
});

export default Categories;
// const [loading,setLoading] = useState(true)

// useEffect( ()=>{
//   // Preload data from an external API
//   // Preload data using AsyncStorage
//   performTimeConsumingTask = async () => {
//     return new Promise((resolve) =>
//       setTimeout( 
//         () => { resolve('result') },
//         2000
//       )
//     );
//   }
//   ls = async()=>{
//       const data = await this.performTimeConsumingTask();
//       const ll = false;
//       if (data !== null) {
//       //this.setState({ loading: false });
//       setLoading(ll);
//     }
//   }
//   this.ls();
  
// })
  
// if(loading){
//   return(<SplashScreen/>)
// }