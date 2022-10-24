import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
import './Header.scss';

/* Este div-1 es el padre de los demás divs. Gracias a esto, va a transmitir a sus hijos las propiedades: (initial="start") y (animation="end"). Por lo que el resto de hijos, van a buscar esas propiedades PERO con los valores proios de su variante específica, es decir que si el hijo div-2 tiene una variante propia que dentro suyo también tiene objetos llamados "start" y "end", van a buscar esos valores automáticamente sin necesidad de escribirlos en el código */

const div1Variants = {
	start: {
		opacity: 0,
	},
	end: {
		opacity: 1,
		transition: {
			when: 'beforeChildren',
			delay: 0.5,
		},
	},
	whileInView: {
		transition: { staggerChildren: 0.5 },
	},
};

const child1Variants = {
	whileInView: {
		x: [-300, 0],
		/* boxShadow: '0px 10px 10px #ff9500', */
		opacity: [0, 1],
		transition: {
			duration: 0.5,
		},
	},
};

const div2Variants = {
	start: {},
	end: {},
	whileInView: {
		transition: { staggerChildren: 0.5 },
	},
};
const child2Variants = {
	whileInView: {
		/* boxShadow: '0px 10px 10px #00ff2a', */
		scale: [0, 1],
		transition: {
			duration: 1,
		},
	},
};
const childLVariants = {
	whileInView: {
		/* boxShadow: '0px 10px 10px #00ff2a', */
		x: [500, 0],
		transition: {
			duration: 1,
		},
	},
};

const Header = () => {
	const skills = [
		{ image: images.javascript6, color: 'yellow' },
		{ image: images.html, color: 'red' },
		{ image: images.css, color: 'blue' },
		{ image: images.react, color: 'cyan' },
		{ image: images.postgresql, color: '#007bff' },
	];
	return (
		<motion.div
			className='app__header app__flex'
			variants={div1Variants}
			initial='start'
			animate='end'
			whileInView='whileInView'>
			<div variants={child1Variants} className='app__header-info'>
				<div className='app__header-badge'>
					<motion.div variants={child1Variants} className='badge-cmp app__flex'>
						<img
							src='https://raw.githubusercontent.com/parth-27/parth-27/master/Hi.gif'
							alt='hi'
							width='80rem'
							style={{ marginLeft: -20 }}
						/>

						<div style={{ marginLeft: 15 }}>
							<p className='p-text'>Hello, I am</p>
							<h1 className='head-text'>Maximilian Springer</h1>
						</div>
					</motion.div>

					<motion.div variants={child1Variants} className='tag-cmp app__flex'>
						<p className='p-text'>Junior Full Stack Web Developer</p>
						<p className='p-text'>Electrical Engineering Student</p>
					</motion.div>
					<motion.div variants={child1Variants} className='tag-cmp app__flex' style={{ zIndex: 1 }}>
						<motion.button
							type='button'
							className='p-text'
							whileTap={{ scale: 0.9, boxShadow: '0px 0px 100px rgb(204,255,229)' }}>
							<a
								href={require('../../assets/Springer-CV-Developer.pdf')}
								download='Springer-CV-Developer.pdf'>
								Download Resume
							</a>
						</motion.button>
						<br />
						<motion.button
							type='button'
							className='p-text'
							whileTap={{ scale: 0.9, boxShadow: '0px 0px 100px rgb(204,255,229)' }}>
							<a
								href={require('../../assets/SpringerMax-CV-Developer.pdf')}
								download='SpringerMax-CV-Developer.pdf'>
								Descargar CV
							</a>
						</motion.button>
					</motion.div>
				</div>
			</div>

			<motion.div
				variants={div2Variants}
				initial='start'
				animate='end'
				whileInView='whileInView'
				className='app__header-circles'>
				{skills.map((circle, i) => (
					<motion.div
						variants={child2Variants}
						className='circle-cmp app__flex'
						key={`circle-${i}`}
						drag
						dragConstraints={{
							top: -50,
							left: -50,
							right: 50,
							bottom: 50,
						}}
						whileHover={{ scale: 1.1, boxShadow: `0px 0px 100px ${circle.color}` }}
						whileTap={{ scale: 0.9, boxShadow: `0px 0px 100px  ${circle.color}` }}>
						<img src={circle.image} alt='profile_bg' />
					</motion.div>
				))}
			</motion.div>
			<motion.div variants={childLVariants} className='app__header-img'>
				<img
					src={images.profile}
					alt='profile_bg'
					style={{ maxHeight: '80vh', position: 'relative', bottom: 0, left: 50, paddingTop: '2rem' }}
				/>
				<motion.img
					whileInView={{ scale: [0, 1] }}
					transition={{ duration: 1, ease: 'easeInOut' }}
					src={images.circle}
					alt='profile_circle'
					className='overlay_circle'
				/>
			</motion.div>
		</motion.div>
	);
};

export default AppWrap(Header, 'home');
