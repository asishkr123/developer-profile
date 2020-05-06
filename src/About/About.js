import React from 'react';
import { Animated } from 'react-animated-css';

import LeftPhoto from './LeftPhoto';
import RightText from './RightText';

const About = () => {
	return (
		<div className="flex justify-center flex-wrap">
			<div className="ph3 pt3 ml5-l">
				<Animated animationIn="slideInLeft" isVisible={true}>
					<LeftPhoto />
				</Animated>
			</div>
			<div className="mw7-l center br3 pb4">
				<Animated animationIn="slideInDown" isVisible={true}>
					<RightText />
				</Animated>
			</div>
		</div>
	);
};

export default About;
