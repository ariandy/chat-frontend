import React, { Component } from 'react';
import { Image , View, StyleSheet, ScrollView, 
         ImageBackground, AsyncStorage, FlatList, TouchableOpacity } from 'react-native'
import { Container, Header,    Title,  Content, 
         Footer,    FooterTab, Button, Left,
         Right,     Body,      Icon,   Text, 
         Input,     Thumbnail, Card,   CardItem,
         List,      ListItem} from 'native-base';
import Status from '../components/Status'
import BlueBar from '../components/BlueBar'
import {localhost} from './variable'
import axios from 'axios'
import {withNavigation} from 'react-navigation'

class FeedsScreen extends Component {

  constructor(){
    super()
    this.state={
      rooms:[],
      isLoading:true
    }
  }

  static navigationOptions = {header:null}

  // const tokenValue = await AsyncStorage.getItem('token')
  // this.setState({
  //   token:tokenValue
  // })
  // let config = {
  //   headers:{
  //     'Authorization': 'jwt '+ that.state.token
  //   }
  // }

  componentDidMount = async () =>{
    that=this
    const token = await AsyncStorage.getItem('token')
    const config = {headers : {'Authorization': 'Bearer '+token }}
    axios.get(`${localhost.url}/api/v1/rooms`,config)
    .then(function (response) {
      that.setState({
        rooms : response.data,
        isLoading : false
      })
    })
    .catch(function (error) {
      console.error(error);
    })
  }

   handleMove = async(id) => {
    this.props.navigation.navigate('Chats')
    await AsyncStorage.setItem("roomId", id)
  }
  
  render() {
    return (
      <Container>
        <Content>
          <View>      
            <FlatList
              data={this.state.rooms}
              keyExtractor={(item,index) => index}
              renderItem={({item}) => ( 
                <List >
                  <ListItem avatar  onPress={() => this.handleMove(item.id.toString())}>
                    {/* <Left>
                      <Thumbnail source={{ uri: 'Image URL' }} />
                    </Left> */}
                    <Body>
                      <Text>{item.roomName}</Text>
                      <Text note>Doing what you like will always keep you happy . .</Text>
                    </Body>
                    <Right>
                      <Text note>3:43 pm</Text>
                    </Right>
                  </ListItem>
                </List>
              )}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

export default withNavigation(FeedsScreen)

const styles = StyleSheet.create({
  storyStyle : {
    width:130,
    height:230,
    backgroundColor:"grey",
    borderRadius:20,
    marginTop: 10,
    marginLeft: 10,
  },
    storyProfile : {
    width:130,
    height:230,
    backgroundColor:"grey",
    borderRadius:20,
  },
});