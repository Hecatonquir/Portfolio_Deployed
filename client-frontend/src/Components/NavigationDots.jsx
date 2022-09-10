import React from 'react';

const NavigationDots = ({ active }) => {
	const menu = ['home', 'projects', 'about', 'skills' /* "testimonials" */, , 'contact'];
	return (
		<div className='app__navigation'>
			{menu.map((item, i) => {
				return (
					<a
						href={`#${item}`}
						key={item + i}
						className='app__navigation-dot'
						style={active === item ? { backgroundColor: '#313BAC' } : {}}
					/>
				);
			})}
		</div>
	);
};

export default NavigationDots;
