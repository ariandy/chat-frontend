import React, { Component } from 'react'
import {Icon, Button} from 'native-base'

class ChatButton extends Component {
	render(){
		return(
			<Button transparent>
        <Icon type="FontAwesome5" name='comment-dots' />
      </Button>
		)
	}
}

export default ChatButton

