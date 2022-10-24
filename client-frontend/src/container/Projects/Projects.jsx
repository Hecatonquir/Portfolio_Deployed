import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Projects.scss';

const Projects = () => {
	const [activeFilter, setActiveFilter] = useState('All');
	const [animateCart, setAnimateCart] = useState({ y: 0, opacity: 1 });
	const [projects, setProjects] = useState([]);
	const [filterProjects, setFilterProjects] = useState([]);
	let appCategories = ['Single Page Application', 'E-Commerce', 'Small Apps', 'All'];

	useEffect(() => {
		const query = '*[_type == "projects"]';
		client.fetch(query).then((data) => {
			setProjects(data);
			setFilterProjects(data);
		});
	}, []);

	const handleProjectFilter = (item) => {
		setActiveFilter(item);
		setAnimateCart([{ y: 100, opacity: 0 }]);
		setTimeout(() => {
			setAnimateCart([{ y: 0, opacity: 1 }]);
			if (item === 'All') setFilterProjects(projects);
			else setFilterProjects(projects.filter((project) => project.tags.includes(item)));
		}, 500);
	};

	const div1Variants = {
		start: {},
		end: {
			/* boxShadow: '0px 10px 10px #00ffaa', */
		},
		whileInView: {
			transition: {
				delayChildren: 0.5,
				staggerChildren: 0.6,
				staggerDirection: 1, //de adelante para atras
				when: 'beforeChildren',
			},
		},
	};
	const child1Variants = {
		start: { opacity: 0 },
		end: {},
		whileInView: {
			x: [-300, 0],
			/* 			boxShadow: ['0px 10px 10px #2600ff', '0px 0px 0px #ffffff'],
			 */ opacity: [0, 1],
			transition: {
				duration: 0.3,
				//delay: 0.5,
			},
		},
	};

	return (
		<>
			<h2 className='head-text'>
				My Creative
				<span> Portfolio </span>
				<br />
				Section
			</h2>
			<div className='app__project-filter'>
				{appCategories.map((cat, i) => {
					return (
						<div
							key={i}
							onClick={() => handleProjectFilter(cat)}
							className={`app__project-filter-item app__flex p-text ${
								activeFilter === cat ? 'item-active' : ''
							}`}>
							{cat}
						</div>
					);
				})}
			</div>
			<motion.div
				variants={div1Variants}
				initial='start'
				animate='end'
				whileInView='whileInView'
				className='app__project-portfolio'>
				{filterProjects.map((project, i) => {
					return (
						<motion.div
							className='app__project-item app__flex'
							key={i}
							variants={child1Variants}
							/* initial='start'
							animate='end' */
							whileInView='whileInView'>
							<div className='app__project-img app__flex'>
								<img src={urlFor(project.imgUrl)} alt={project.name} />
								<div className={'app__project-hover app__flex'}>
									<a href={project.projectLink} target='_blank' rel='noreferrer'>
										<div className={'app__flex'}>
											<AiFillEye />
										</div>
									</a>
									<a href={project.codeLink} target='_blank' rel='noreferrer'>
										<motion.div className={'app__flex'}>
											<AiFillGithub />
										</motion.div>
									</a>
								</div>
							</div>
							<div className='app__project-content app__flex'>
								<h4 className='bold-text'>{project.title}</h4>
								<p className='p-text' style={{ marginTop: 10 }}>
									{project.description}
								</p>
								<div className='app__project-tag app__flex'>
									<p className='p-text'>{project.tags && project.tags[0]}</p>
								</div>
							</div>
						</motion.div>
					);
				})}
			</motion.div>
		</>
	);
};

export default AppWrap(MotionWrap(Projects, 'app__project'), 'projects', 'app__whitebg');
