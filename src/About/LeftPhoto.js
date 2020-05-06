import React from 'react';
import Tilt from 'react-tilt';

import ContactIcon from './ContactIcon';
import Me from './me.jpg';
import instagram from './instagram.png';
import whatsapp from './whatsapp.png';
import gmail from './gmail.png';

const LeftPhoto = () => {
	return (
		<div className="ph3 pt3 ml5-l">
			<div className="tc">
				<div className="hide-child relative b--black-20 mw5 center">
					<Tilt className="Tilt" options={{ max: 25 }}>
						<div className="Tilt-inner">
							<img
								className="br4 shadow-5"
								style={{
									height: '345px'
								}}
								alt="Siddhant Bajoria"
								src={Me}
							/>
						</div>
					</Tilt>
					<div className="bt b--black-20">
						<p className="f4 fw7 ttu animated pulse infinite">Siddhant Bajoria</p>
					</div>
					<small>Contact Me</small>
					<hr className="mw3 bb bw1 b--black-10" />
					<div className="flex flex-wrap justify-center">
						<ContactIcon
							icon={whatsapp}
							size="40"
							link="https://wa.me/07338766426/?text=Hello%20there%20!"
						/>
						<ContactIcon
							icon={instagram}
							istyle="mt2"
							size="30"
							link="https://www.instagram.com/sid1n_only/?hl=en"
						/>
						<ContactIcon icon={gmail} size="40" link="mailto:siddhanthbajoria@gmail.com?Subject=Hello%20" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default LeftPhoto;
