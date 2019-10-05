import React,{useState,useEffect} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,Dimensions,
    View,Image,FlatList,
    Text,TouchableOpacity,
    StatusBar,Button
  } from 'react-native';
  
  import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';
  import CategoriesNavbar from '../Components/CategoriesNavbar';
//import console = require('console');
  
const Products = (props)=> {
    const {navigate} = props.navigation;
    //let pro = props.navigation.state.params.products
    const[title,setTitle]=useState()
    const[cat,setCat]=useState()
    const [name,setName] = useState()
    const[products,setProducts]=useState([])
    const [numColumns,setNumColums] = useState(2)
    const[test,setTest]=useState('ZEBYYYYYYYYYYYY')
    const [pos,setPos] = useState(props.position)
    const [sort,setSort] = useState("Sort By")
    const [filter,setFilter] = useState("Filter")
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
      const backFunction = ()=>{
        navigate('Categories')

      }
      const printProducts =() =>{
        console.log(products)
      }

      useEffect(()=>{
        setTitle(props.navigation.state.params.title)
        setCat(props.navigation.state.params.cat)
        setProducts(props.navigation.state.params.products)
        console.log(products)
        setName(props.navigation.state.params.na)
        console.log(name)
        setTest("zeeeeeeeeeeeeby")
      })
  
      return (
    <View style={{flex:1}}>
      <View >
        {/* <Text style={{color:'white'}}>{test}</Text> */}
        <CategoriesNavbar navbarStyle={styles.navbarStyle} iconType="FontAwesome" 
        iconName="arrow-left" title={title} backFun={()=>backFunction()}/>
      </View>
      {/* <View style={{flex:1}}> */}
        <View style={{flex:0.3,backgroundColor:'blue'}}>
          <Image
            style={{height:'100%',width:'100%'}}
            source={{uri:cat}}
            alignSelf='center' resizeMode='cover'
            />
            {/* <Text style={{backgroundColor:'green'}}>hiiiiiiiiiiiiiiiiiiiiiii</Text> */}
        </View>
        <View style={{ flex:0.65,backgroundColor:'white'}}>
            <FlatList

              data={products}
              renderItem={({item}) =>
              <TouchableOpacity style={{flex:1,justifyContent: 'center',alignItems: 'center',padding:20,backgroundColor:'white'
                          ,width:Dimensions.get('window').width / 2,height:Dimensions.get('window').width / 2}}>
                <Image
                  style={{width:Dimensions.get('window').width / 2.1,height:Dimensions.get('window').width / 2.1
                        ,margin:1,resizeMode:'cover'}}
                  source={{uri:item.product_img}}

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
        <View style={{flex:0.05,flexDirection:'row'}}>
          <View style={{backgroundColor:'red', width:Dimensions.get('window').width/2,
                justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:20,color:'white'}}>{sort}</Text>
          </View>
          <View style={{backgroundColor:'red',width:Dimensions.get('window').width/2,
                justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:20,color:'white'}}>{filter}</Text>
          </View>
        </View>
      {/* </View> */}
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
      // position:'absolute',
      // top:60,
      backgroundColor:'white',

    }
});

export default Products;