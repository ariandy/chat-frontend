import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native';
import { Container, Header, Title,     Content,
         Footer,    Form,   View,      Item,
         Label,     Input,  FooterTab, Button,
         Left,      Right,  Body,      Icon,    Text } from 'native-base';
import axios from 'axios'
import {localhost} from './variable'

class Login extends Component {

  constructor () {
    super()
    this.state = {
      email : '',
      pass : '',
      buttonLogin: 'Login',
      inputUser: 'Email',
      inputPass: 'Password',
    }
  }

  static navigationOptions ={header:null}

  inaLanguage = () => {
    this.setState({
      buttonLogin : 'Masuk',
      inputUser : 'Surel',
      inputPass : 'Kata Sandi',
    })
  }

  engLanguage = () => {
    this.setState({
      buttonLogin: 'Login',
      inputUser: 'Username',
      inputPass: 'Password',
    })
  }
  
  handleSubmit= () => {
    axios.post(`${localhost.url}/auth/login`, {
      email: this.state.email,
      password: this.state.pass
    })
      .then( (response) => {
        let that=this
        let token = response.data.data.token
        console.log("ini token >>>>" + token);

        if (token == null){
          alert.alert("Loginlah yang benar, Yang Mulia")
        } else {
          AsyncStorage.setItem('token',token);
          that.props.navigation.navigate('Feeds')
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  // handleChangeEmail= () => this.setState({email:text});
  //handleChangePassword= () => this.setState({password:text});

  render() {
    return (
      <Container>
        <Content>
          <View style={{alignItems:"center", paddingTop:20}}>
            <View style={{width:300, height:175, paddingTop:50}}>
              <Form>

                <Item regular style={{borderColor:"transparent", borderWidth:0,}}>
                  <Input placeholder={this.state.inputUser}
                    onChangeText={(email) =>{this.setState({email:email})}} style={{borderBottomWidth:1,}}
                    value={this.state.email}/>
                </Item>
                
                <Item regular style={{borderColor:"transparent", borderWidth:0,}}>
                  <Input
                    placeholder={this.state.inputPass}
                    // secureTextEntry={true}
                    style={{borderBottomWidth:1}}
                    onChangeText={(pass) =>{this.setState({pass:pass})}} 
                    value={this.state.pass}
                  />
                </Item>
                
                <Button
                  block
                  style={{alignContent:"center", marginTop:10 }}
                  onPress={()=> {this.handleSubmit()}}
                >
                  <Text>{this.state.buttonLogin}</Text>
                </Button>

              </Form>
            </View>
          </View>

          <View style={{width:300, paddingTop:95, alignSelf:"center"}}>
            
          </View>

        </Content>
      </Container>
    );
  }
}

export default Login