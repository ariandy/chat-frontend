import React, { Component } from 'react'
import {Header, Left, Body, Right} from 'native-base'
import CameraButton from "./CameraButton"
import SearchText from "./SearchText"
import ChatButton from "./ChatButton"

class BlueBar extends Component{
  render() {
    return(
      <Header>
        <Left>
          <CameraButton/>
        </Left>
        <Body>
          <SearchText/>
        </Body>
        <Right>
          <ChatButton/>
        </Right>
      </Header>
    )
  }
}

export default BlueBar