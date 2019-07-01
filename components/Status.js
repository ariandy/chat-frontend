import React, { Component } from 'react'
import {View,} from 'react-native'
import {Text} from 'native-base'

class Status extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.notes}</Text>
      </View>
    );
  }
}
export default Status