import React, { Component } from 'react';

import background from './background.png';

export default class Image extends Component {
	constructor() {
		super();
		this.state = {
			isLoaded: false
		};
	}

	loaderImage = () => this.setState({ isLoaded: true });

	render() {
		const { src } = this.props;
		const { isLoaded } = this.state;

		return (
			<div>
				<img
					onLoad={this.loaderImage}
					src={isLoaded ? src : background}
					className="br2"
					style={{
						display: 'block',
						marginLeft: 'auto',
						marginRight: 'auto'
					}}
					alt="imageProjects"
				/>
			</div>
		);
	}
}
