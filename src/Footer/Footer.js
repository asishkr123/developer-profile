import React from 'react';
import Github from './FooterGithub';
import LinkedIn from './FooterLinkedIn';

const Footer = () => {
	return (
		<footer className="pa1 tc">
			<Github />
			<LinkedIn />
			<div className="pa1">
				<p>
					<span className="fw6 dib v-top">Created with </span>
					<a href="https://www.instagram.com/harshaamodi/?hl=en">
						<img
							style={{ width: '20px' }}
							className=" mh1 animated pulse infinite faster grow"
							src="https://img.icons8.com/color/48/000000/filled-like.png"
							alt="mons"
						/>
					</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
