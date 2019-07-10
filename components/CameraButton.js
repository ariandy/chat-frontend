import React, { Component } from 'react'
import {Icon, Button} from 'native-base'

class CameraButton extends Component {
	render(){
		return(
			<Button transparent>
				<Icon type="FontAwesome5" name='camera-retro' />
			</Button>
		)
	}
}

export default CameraButton