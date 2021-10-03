import React, { Component } from 'react';

export default class DisplayNumber extends Component {
	render() {
		return (
			<div>
				<h1>Display Number</h1>
				<input text="text" value={this.props.number} readOnly></input>
			</div>
		)
	}
}