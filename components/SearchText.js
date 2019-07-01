import React, { Component } from 'react'
import {View,} from 'react-native'
import {Input} from 'native-base'

class SearchText extends Component {
  render() {
    return (
      <View>
        <Input
          placeholder="Search"
          placeholderTextColor="white"
          style={{color:"white"}}
        />
      </View>
    );
  }
}
export default SearchText