import React from 'react';
import './Navigation.css';

const Navigation = ({ page, onNavigationChange }) => {
	const knowMe =
		page === 'about'
			? 'navItem f5 ph2 pv3 pointer bg-lightest-blue dib bl ba mr1'
			: 'navItem black f5 ph2 pv3 pointer bg-animate hover-bg-lightest-blue dib bl ba mr1';
	const skill =
		page === 'skill'
			? 'f5 ph2 pv3 pointer bg-light-pink dib ba mr1'
			: 'black f5 ph2 pv3 pointer bg-animate hover-bg-light-pink dib ba mr1';
	const project =
		page === 'project'
			? 'f5 ph2 pv3 pointer bg-light-yellow dib ba'
			: 'black f5 ph2 pv3 pointer bg-animate hover-bg-light-yellow dib ba';

	return (
		<div className="navBarStyle">
			<img
				className="br-100 mt2 h3 w3 bg-light-gray animated pulse infinite"
				onClick={() => onNavigationChange('home')}
				// src="https://robohash.org/mony/?size=50x50&set=set2"
				src="https://img.icons8.com/cotton/1024/halloween-cyclop-monster.png"
				alt="LOGO"
			/>

			<p onClick={() => onNavigationChange('about')} className={knowMe}>
				About Me
			</p>
			<p onClick={() => onNavigationChange('skill')} className={skill}>
				My Skills
			</p>
			<p onClick={() => onNavigationChange('project')} className={project}>
				Projects
			</p>
		</div>
	);
};

export default Navigation;
