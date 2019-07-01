import React, { Component } from 'react';
import { Image , View, StyleSheet, ScrollView, ImageBackground } from 'react-native'
import { Container, Header,    Title,  Content,
         Footer,    FooterTab, Button, Left,
         Right,     Body,      Icon,   Text, 
         Input,     Thumbnail, Card,   CardItem} from 'native-base';
import BlueBar from './components/BlueBar'

class ProfileScreen extends Component {

  static navigationOptions ={header:null}

  render() {
    return (
      <Container>
        <BlueBar/>
        
        <Header style={{backgroundColor:"white"}}>
          <Body>
            <Button transparent onPress={()=>this.props.navigation.navigate("Feeds")}>
              <Icon name='newspaper' type='FontAwesome5' style={{color:"blue"}}/>
            </Button>
          </Body>
          <Body>
            <Button transparent>
              <Icon name='users' type='FontAwesome5' style={{color:"blue"}}/>
            </Button>
          </Body>
          <Body>
            <Button transparent>
              <Icon name='store' type='FontAwesome5' style={{color:"blue"}}/>
            </Button>
          </Body>
          <Body>
            <Button transparent>
              <Icon name='user' type='FontAwesome5' style={{color:"blue"}}/>
            </Button>
          </Body>
          <Body>
            <Button transparent>
              <Icon name='bell' type='FontAwesome5' style={{color:"blue"}}/>
            </Button>
          </Body>
          <Body>
            <Button transparent>
              <Icon name='menu' style={{color:"blue"}}/>
            </Button>
          </Body>
        </Header>

        <Content>
          <Image source={require('./assets/junji-ito3.jpg')} style={{height: 200, width: null,}}/>
            <Button light style={{alignSelf:"center", marginTop:-60, marginLeft:310}}>
              <Icon type="FontAwesome5" name='camera' />
            </Button>
          <Image
            source={require('./assets/junji-ito4.jpg')}
            style={{height:200, width:200, borderRadius:100, alignSelf:"center", marginTop:-100, borderWidth:8, borderColor:"white"}}
          />
          <Button light rounded style={{alignSelf:"center", marginTop:-50, marginLeft:110}}>
            <Icon type="FontAwesome5" name='camera' />
          </Button>
          <Text style={{alignSelf:"center", marginTop:20, fontSize: 30}}>Ariandy</Text>
          <Text style={{alignSelf:"center", marginTop:5, fontSize: 15}}>Hmmm..</Text>
          <View style={{flex:1, flexDirection:'row', marginTop:20}}>
            <View style={{flex:1, alignItems:'center'}}>
              <Thumbnail source={require('./assets/grey.jpg')} />
              <Icon type="FontAwesome5" name='plus' style={{marginTop:-42}} />
              <Text style={{marginTop:15, fontSize:14}}>Add to Story</Text>
            </View>
            <View style={{flex:1, alignItems:'center'}}>
              <Thumbnail source={require('./assets/grey.jpg')} />
              <Icon type='MaterialIcons' name='visibility'style={{marginTop:-42}} />
              <Text style={{marginTop:15, fontSize:14}}>View As</Text>
            </View>
            <View style={{flex:1, alignItems:'center'}}>
              <Thumbnail source={require('./assets/grey.jpg')} />
              <Icon type="MaterialCommunityIcons" name='account-edit' style={{marginTop:-45,}} />
              <Text style={{marginTop:18, fontSize:14}}>Edit Profile</Text>
            </View>
            <View style={{flex:1, alignItems:'center'}}>
              <Thumbnail source={require('./assets/grey.jpg')} />
              <Icon type='MaterialIcons' name='more' style={{marginTop:-42}} />
              <Text style={{marginTop:15, fontSize:14}}>More</Text>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

export default ProfileScreen

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