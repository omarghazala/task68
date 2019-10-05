import React,{useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar
  } from 'react-native';
  
  import {
    
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';
  import { Container, Header, Left, Body, Right, Button,Icon, Title } from 'native-base';
  //import {Icon} from 'react-native-vector-icons/AntDesign';
const CategoriesNavbar = (props)=> {
    //const {navigate} = props.navigation;
    
      
    return (
        //<Container>
        <Header style={props.navbarStyle}>
          <Left>
            <Button onPress={()=>props.backFun()} transparent>
              <Icon type={ props.iconType} name={props.iconName} style={{color:'black'}} />
            </Button>
          </Left>
          <Body>
            <Title style={{color:'black'}}>{props.title} </Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon type="FontAwesome" name='search' style={{color:'black'}}/>
            </Button>
            <Button transparent>
              <Icon type="FontAwesome5" name='cart-plus' style={{color:'black'}}/>
            </Button>
            
          </Right>
        </Header>
      //</Container>
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
    }
});

export default CategoriesNavbar;