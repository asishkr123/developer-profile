import React from 'react';

import ProjectList from './ProjectList';
import Image from './Image';

const Project = () => {
	const projects = ProjectList.map((project, i) => {
		return (
			<div key={i} className="dib br4 ba b--light-gray ma4-l ma3 shadow-1 w-40-l">
				<Image src={project.image} />
				<div className="pa1">
					<div className="f3 fw5 tc ttu">{project.title}</div>
					<div className="f4 fw4 tc ttu pv2">{project.skill}</div>
					<div className="f5 fw3 tc pa1">{project.description}</div>
				</div>
				<div className="flex flex-wrap justify-center">
					{project.git ? (
						<a
							className="ba br-pill shadow-1 pa2 ma1 grow bg-animate bg-black-80 no-underline white ttu pointer"
							href={project.git}
						>
							Github
						</a>
					) : (
						<div />
					)}
					{project.live ? (
						<a
							className="ba br-pill shadow-1 pa2 ma1 grow bg-animate bg-light-red no-underline white ttu pointer"
							href={project.live}
						>
							show Live
						</a>
					) : (
						<div />
					)}
					{project.download ? (
						<a
							className="ba br-pill shadow-1 pa2 ma1 grow bg-animate bg-green no-underline white ttu pointer"
							href={project.download}
							download
						>
							Download
						</a>
					) : (
						<div />
					)}
				</div>
			</div>
		);
	});

	return <div className="flex flex-wrap justify-center pa2">{projects}</div>;
};

export default Project;
