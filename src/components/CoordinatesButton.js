import React from 'react'

export default class CoordinatesButton extends React.Component {



	setArray = (event) => {
		this.props.onReceiveCoordinates([event.clientX, event.clientY])

	}

	render () {
		return(
		<div>
			<button onClick={this.setArray}></button>
		</div>
		)
	}
}
