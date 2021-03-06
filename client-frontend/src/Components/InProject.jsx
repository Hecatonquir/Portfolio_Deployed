/* InProject stands for Individual Project */
import React from 'react';
import '../Styles/InProject.css';

export default function InProject(obj) {
	const { image, name, url, description } = obj;

	return (
		<main className='Project'>
			<a href={url}>
				<img src={image} alt='Project' width='400' height='200' />
				<h3>{name}</h3>
			</a>
			<h5>{description}</h5>
		</main>
	);
}
