import React, { Component } from 'react';

import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';
import About from './About/About';
import Skill from './Skill/Skill';
import Project from './Project/Project';
import Home from './Home/Home';

class App extends Component {
	constructor() {
		super();
		this.state = {
			navPage: 'home'
		};
	}

	onNavigationChange = (page) => this.setState({ navPage: page });

	render() {
		const { navPage } = this.state;
		const Body =
			navPage === 'home' ? (
				<Home />
			) : navPage === 'about' ? (
				<About />
			) : navPage === 'skill' ? (
				<Skill />
			) : (
				<Project />
			);
		return (
			<div>
				<Navigation page={navPage} onNavigationChange={this.onNavigationChange} />
				{Body}
				<Footer />
			</div>
		);
	}
}

export default App;
