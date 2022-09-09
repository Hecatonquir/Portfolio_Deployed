import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
import './Header.scss';

const scaleVariants = {
	whileInView: {
		scale: [0, 1],
		opacity: [0, 1],
		transition: {
			duration: 1,
			ease: 'easeInOut',
		},
	},
};

const Header = () => {
	const skills = [
		images.javascript6,
		images.html,
		images.react,
		images.redux,
		images.css,
		images.postgresql,
		images.express,
	];
	return (
		<div className='app__header app__flex'>
			<motion.div
				whileInView={{ x: [-100, 0], opacity: [0, 1] }}
				transition={{ duration: 1 }}
				className='app__header-info'>
				<div className='app__header-badge'>
					<div className='badge-cmp app__flex'>
						<motion.div
							className='handle'
							initial={{ x: -10 }}
							animate={{ x: 10 }}
							whileInView={{
								transition: { type: 'spring', repeat: Infinity, repeatType: 'mirror', duration: 1 },
							}}
							onMouseEnter={() => 1}>
							<span>👋</span>
						</motion.div>

						<div style={{ marginLeft: 20 }}>
							<p className='p-text'>Hello, I am</p>
							<h1 className='head-text'>Maximilian Springer</h1>
						</div>
					</div>

					<div className='tag-cmp app__flex'>
						<p className='p-text'>Junior Full Stack Web Developer</p>
						<p className='p-text'>Electrical Engineering Student</p>
					</div>
					<div className='tag-cmp app__flex' style={{ zIndex: 50 }}>
						<button type='button' className='p-text'>
							<a
								href={require('../../assets/Springer-CV-Developer.pdf')}
								download='Springer-CV-Developer.pdf'>
								Download Resume
							</a>
						</button>
						<br />
						<button type='button' className='p-text'>
							<a
								href={require('../../assets/SpringerMax-CV-Developer.pdf')}
								download='Springer-CV-Developer.pdf'>
								Descargar CV
							</a>
						</button>
					</div>
				</div>
			</motion.div>

			<motion.div
				whileInView={{ opacity: [0, 1] }}
				transition={{ duration: 2, delayChildren: 2 }}
				className='app__header-img'>
				<img src={images.profile} alt='profile_bg' />
				<motion.img
					whileInView={{ scale: [0, 1] }}
					transition={{ duration: 1, ease: 'easeInOut' }}
					src={images.circle}
					alt='profile_circle'
					className='overlay_circle'
				/>
			</motion.div>

			<motion.div
				variants={scaleVariants}
				whileInView={scaleVariants.whileInView}
				className='app__header-circles'>
				{skills.map((circle, i) => (
					<div className='circle-cmp app__flex' key={`circle-${i}`}>
						<img src={circle} alt='profile_bg' />
					</div>
				))}
			</motion.div>
		</div>
	);
};

export default AppWrap(Header, 'home');
