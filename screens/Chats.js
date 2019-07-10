import React, { Component } from 'react';
import {
  Image, View, StyleSheet, ScrollView, TextInput,
  ImageBackground, AsyncStorage, FlatList, TouchableOpacity
} from 'react-native'
import {
  Container, Header, Title, Content,
  Footer, FooterTab, Button, Left,
  Right, Body, Icon, Text,
  Input, Thumbnail, Card, CardItem,
  List, ListItem
} from 'native-base';
import { withNavigation } from 'react-navigation'
import Status from '../components/Status'
import BlueBar from '../components/BlueBar'
import { localhost } from './variable'
import axios from 'axios'

class Chats extends Component {

  constructor(props) {
    super(props)
    this.state = {
      chats: [],
      isLoading: true
    }
    // this.setState({
    //   roomId: roomId
    // })

  }

  // getRoomId = async() =>{
  //   let roomId = await AsyncStorage.getItem('roomId')
  // }

  static navigationOptions = { header: null }

  // const tokenValue = await AsyncStorage.getItem('token')
  // this.setState({
  //   token:tokenValue
  // })
  // let config = {
  //   headers:{
  //     'Authorization': 'jwt '+ that.state.token
  //   }
  // }

  componentDidMount = async () => {
    that = this
    const token = await AsyncStorage.getItem('token')
    const roomId = await AsyncStorage.getItem('roomId')
    console.log(roomId)
    const config = { headers: { 'Authorization': 'Bearer ' + token } }
    axios.get(`${localhost.url}/api/v1/rooms/${roomId}/chats`, config)
      .then(function (response) {
        that.setState({
          chats: response.data[0],
          isLoading: false
        })
        console.log(response.data)
      })
      .catch(function (error) {
        console.error(error);
      })

  }

  render() {
    console.log(this.state.chats)
    return (

      <View style={{ flex: 1}}>
        {/* Chat Output */}
        <View style={{ flex: 8, backgroundColor: 'lavender' }}>
          <ScrollView>
            <FlatList
              data={this.state.chats}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <Bulbo data={item} />} />
          </ScrollView>
        </View>

        {/* Chat input */}
        <View style={{ flex: 1.5 }}>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10}}
          />
        </View>
      </View>
    );
  }
}

class Bulbo extends Component {
  render() {
    let data = this.props.data
    return (
      // <Text>{data.message}</Text>
      <View style={{ backgroundColor: 'lavender', flexDirection:'row', flex: 1, paddingVertical: 10 }}>
        <View style={{ backgroundColor: 'grey', padding:5, borderRadius: 10, marginLeft: 5 }}>
          <Text >{data.message}</Text>
        </View>
      </View>
    )
  }
}

export default withNavigation(Chats)



const styles = StyleSheet.create({
  storyStyle: {
    width: 130,
    height: 230,
    backgroundColor: "grey",
    borderRadius: 20,
    marginTop: 10,
    marginLeft: 10,
  },
  storyProfile: {
    width: 130,
    height: 230,
    backgroundColor: "grey",
    borderRadius: 20,
  },
});