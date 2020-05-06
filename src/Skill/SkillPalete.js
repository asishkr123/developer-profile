import React from 'react';
import { Animated } from 'react-animated-css';

const SkillPalete = ({ title, skillList, skillStyle, skillAnimation, skillImage }) => {
	const skillSet = skillList.map((skill) => (
		<p key={skill} className={skillStyle}>
			{skill}
		</p>
	));

	return (
		<Animated animationIn={skillAnimation} isVisible={true}>
			<div className="ma2 dib pa4 bw1 ba b--light-gray bg-light-gray br4">
				<div className="f3 fw7">
					<img
						className="br-100 w3 bg-light-gray"
						src={skillImage}
						alt="LOGO"
					/>

					<p className="dib v-top">{title}</p>
				</div>
				<hr className="mw3 bb bw1 b--black-10" />
				{skillSet}
			</div>
		</Animated>
	);
};

export default SkillPalete;
