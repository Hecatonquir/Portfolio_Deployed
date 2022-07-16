import React from 'react';
import '../Styles/Projects.css';
import InProject from './InProject';

export default function Projects(obj) {
	const { projects } = obj;

	return projects.length ? (
		<div>
			{projects.map((p) => {
				return (
					<InProject
						key={p.ID}
						id={p.ID}
						image={p.Image}
						name={p.Name}
						url={p.Url}
						description={p.Description}
					/>
				);
			})}
		</div>
	) : (
		<div className='loading'>
			<img className='loading' src='cargando.url' alt='Uups, loading img not found...' />
			<h2 className='loading'> Loading...</h2>
		</div>
	);
}
