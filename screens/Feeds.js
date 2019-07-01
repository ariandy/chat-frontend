import React, { Component } from 'react';
import { Image , View, StyleSheet, ScrollView, ImageBackground, AsyncStorage } from 'react-native'
import { Container, Header,    Title,  Content, 
         Footer,    FooterTab, Button, Left,
         Right,     Body,      Icon,   Text, 
         Input,     Thumbnail, Card,   CardItem} from 'native-base';
import Status from '../components/Status'
import BlueBar from '../components/BlueBar'
import axios from 'axios'

class FeedsScreen extends Component {

  constructor(){
    super()
    this.state={
      posts:[],
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

  componentDidMount(){
    that=this
    axios.get('http://192.168.0.16:3000/posts')
    .then(function (response) {
      that.setState({
        posts : response.data.data,
        isLoading : false
      })
    })
    .catch(function (error) {
      console.error(error);
    })
  
  }
  
  render() {
    return (
      <Container>
        <Header style={{height:60, backgroundColor:"white"}}>
          <Body>
            <Thumbnail small source={require('../assets/junji-ito4.jpg')}/>
          </Body>
          <Body>
            <Button bordered rounded style={{width:270}}>
              <Text>What's on your mind?</Text>
            </Button>
          </Body>
          <Right>
            <View style={{marginRight:10}}>
              <Icon name='paper-plane' type='FontAwesome5' style={{color:"blue",}}/>
            </View>
          </Right>
        </Header>

        <Content>

          {
            this.state.posts.map((item,index) => {
            return(
              <View key={index}>      
                <Card style={{flex: 0}}>
                  <CardItem>
                    <Left>
                      <Thumbnail source={{uri: item.User.avatar }} />
                      <Body>
                        <Text>{item.User.name}</Text>
                        <Text note>2 days ago</Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Image source={{uri: item.User.avatar }} style={{height: 280, width:360, flex: 1}}/>
                      <Status notes={item.posts}/>
                    </Body>
                  </CardItem>
                  <CardItem>
                    <Left>
                      <Button transparent>
                        <Icon active name="thumbs-up" />
                        <Text>43 Likes</Text>
                      </Button>
                    </Left>
                    <Body>
                      <Button transparent>
                        <Icon active name="chatbubbles" />
                        <Text>0 Comments</Text>
                      </Button>
                    </Body>
                    <Right>
                      <Button transparent>
                        <Icon active type="FontAwesome5" name="share" />
                        <Text>Share</Text>
                      </Button>
                    </Right>
                  </CardItem>
                  </Card>
                </View>
              )
            })
          }
        </Content>
      </Container>
    );
  }
}

export default FeedsScreen

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