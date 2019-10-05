import React,{useState,useEffect} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';
  
  import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';
const SplashScreen = (props)=> {
    
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
//const [loading,setLoading] = useState(true)

useEffect( ()=>{
  // Preload data from an external API
  // Preload data using AsyncStorage
  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout( 
        () => { resolve('result') },
        2000
      )
    );
  }
  ls = async()=>{
      const data = await this.performTimeConsumingTask();
      const ll = false;
      if (data !== null) {
      //this.setState({ loading: false });
      //setLoading(ll);
      navigate('Categories',{name:'splash'})
    }
  }
  this.ls();
  
})
  
      return (
        <View style={viewStyles}>
          <Text style={textStyles}>
            Splash Screen
          </Text>
        </View>
      );
    
  }

export default SplashScreen;