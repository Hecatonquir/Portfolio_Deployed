import React from 'react';
import { BsLinkedin, BsGithub, BsWhatsapp } from 'react-icons/bs';
import { motion } from 'framer-motion';

const div1Variants = {
	whileInView: {
		end: {},
		transition: {
			delayChildren: 1,
			staggerChildren: 15,
		},
	},
};
const child1Variants = {
	whileInView: {
		scale: [1, 2, 0, 2, 1],

		boxShadow: [
			'0px 0px 5px rgba(0,0,0,0)',
			'10px 10px 5px rgb(255, 0, 170)',
			'-20px -20px 10px rgb(0, 149, 255)',
			'10px 10px 5px rgb(255, 0, 170)',
			'0px 0px 0px rgba(0, 106, 255, 0)',
		],
		transition: {
			duration: 5,
			ease: 'easeInOut',
			times: [0, 0.2, 0.5, 0.7, 1],
			repeat: Infinity,
			repeatDelay: 45,
		},
	},
};

function SocialMedia() {
	return (
		<motion.div
			className='app__social'
			variants={div1Variants}
			initial='start'
			animate='end'
			whileInView='whileInView'
			transitions={{ delay: 1.5, duration: 1.5 }}>
			<motion.a
				target='_blank'
				variants={child1Variants}
				href='https://www.linkedin.com/in/springer-max/'>
				<BsLinkedin />
			</motion.a>

			<motion.a target='_blank' href='https://github.com/Hecatonquir' variants={child1Variants}>
				<BsGithub />
			</motion.a>

			<motion.a target='_blank' href='https://wa.me/5493874135467' variants={child1Variants}>
				<BsWhatsapp />
			</motion.a>
		</motion.div>
	);
}

export default SocialMedia;
