import React from 'react';
import SkillPalete from './SkillPalete';
import { frontEnd, backEnd, other } from './SkillList';
import Pattern from './pattern.png';

const Skill = () => {
	return (
		<div className="tc mt4-l ">
			<div
				style={{
					backgroundImage: `url(${Pattern})`,
					backgroundSize: 'cover,contain'
				}}
				className="ma2 dib w-40-l w-75 pa4 tc br4 ba b--black-10"
			>
				<p className="f3 fw7 white">SKILLS</p>
				<hr className="mw3 bb bw1 b--black-10" />
			</div>
			<div className="flex justify-center flex-wrap">
				<SkillPalete
					title="Front-end"
					skillList={frontEnd}
					skillStyle="f4 db black link tl hover-green pointer"
					skillAnimation="slideInLeft"
					skillImage="https://img.icons8.com/color/480/000000/iron-man.png"
				/>
				<SkillPalete
					title="Back-end"
					skillList={backEnd}
					skillStyle="f4 db black link tl hover-light-red pointer"
					skillAnimation="slideInUp"
					skillImage="https://img.icons8.com/color/480/000000/superman.png"
				/>
				<SkillPalete
					title="Other"
					skillList={other}
					skillStyle="f4 db black link tl hover-pink pointer"
					skillAnimation="slideInRight"
					skillImage="https://img.icons8.com/color/480/000000/harley-quinn-dc.png"
				/>
			</div>
		</div>
	);
};

export default Skill;
