import React from 'react';

const ContactIcon = ({ link, icon, size, istyle }) => {
	return (
		<a href={link} className="mh2" target="_top">
			<img
				className={`grow bg-white-10 ${istyle ? istyle : ''}`}
				src={icon}
				style={{
					width: size + 'px',
					height: size + 'px'
                }}
                alt="mons"
			/>
		</a>
	);
};

export default ContactIcon;
