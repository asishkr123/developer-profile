import React from 'react';

import EducationTabs from './EducationTab';

const Education = () => {
	const eduTabs = EducationTabs.map((tab,i) => {
		return (
			<li key={i} className="flex dim items-center lh-copy pa3 ph0-l bb b--black-10">
				<img className="w2 h2 w3-ns h3-ns br-100" src={tab.type} alt="mons" />
				<div className="pl3 flex-auto">
					<span className="f4 db black-70">{tab.name}</span>
					<span className="f5 db black-70">
						{tab.done}, <span className="blue">{tab.year}</span>
					</span>
				</div>
			</li>
		);
	});

	return (
		<div className="bb b--light-gray">
			<p className="f2 fw5 tl-l tc ph3">Education & Work</p>
			<div style={{ height: '220px', overflowY: 'scroll' }}>
				<ul className="list measure left">{eduTabs}</ul>
			</div>
		</div>
	);
};

export default Education;
