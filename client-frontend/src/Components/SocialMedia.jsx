import React from 'react';
import { BsLinkedin, BsGithub, BsWhatsapp } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { motion } from 'framer-motion';
/* 
 animate={{ rotate: 360 }}
                transition={{ ease: "linear", duration: 2, repeat: Infinity }}
*/

function SocialMedia() {
	return (
		<div className='app__social'>
			<motion.div
				style={{ borderRadius: '50%' }}
				animate={{
					scale: [1, 2, 1, 2, 1],
					rotate: [0, 0, 360, 360, 0],
					backgroundColor: [
						'rgba(0,0,0,0)',
						'rgba(49, 59, 172,1)',
						'rgba(0,0,0,0)',
						'rgba(49, 59, 172,1)',
						'rgba(0,0,0,0)',
					],
				}}
				transition={{
					duration: 2,
					ease: 'easeInOut',
					times: [0, 0.2, 0.5, 0.8, 1],
					repeat: Infinity,
					repeatDelay: 15,
					delay: 5,
				}}>
				<a target='_blank' href='https://www.linkedin.com/in/SpringerMax-ElectricDeveloper'>
					<BsLinkedin />
				</a>
			</motion.div>
			<motion.div
				style={{ borderRadius: '50%' }}
				animate={{
					scale: [1, 2, 1, 2, 1],
					rotate: [0, 0, 360, 360, 0],

					backgroundColor: [
						'rgba(0,0,0,0)',
						'rgba(49, 59, 172,1)',
						'rgba(0,0,0,0)',
						'rgba(49, 59, 172,1)',
						'rgba(0,0,0,0)',
					],
				}}
				transition={{
					duration: 2,
					ease: 'easeInOut',
					times: [0, 0.2, 0.5, 0.8, 1],
					repeat: Infinity,
					repeatDelay: 15,
					delay: 10,
				}}>
				<a target='_blank' href='https://github.com/Hecatonquir'>
					<BsGithub />
				</a>
			</motion.div>
			<motion.div
				style={{ borderRadius: '50%' }}
				animate={{
					scale: [1, 2, 1, 2, 1],
					rotate: [0, 0, 360, 360, 0],
					backgroundColor: [
						'rgba(0,0,0,0)',
						'rgba(49, 59, 172,1)',
						'rgba(0,0,0,0)',
						'rgba(49, 59, 172,1)',
						'rgba(0,0,0,0)',
					],
				}}
				transition={{
					duration: 2,
					ease: 'easeInOut',
					times: [0, 0.2, 0.5, 0.8, 1],
					repeat: Infinity,
					repeatDelay: 15,
					delay: 15,
				}}>
				<a target='_blank' href='https://wa.me/5493874135467'>
					<BsWhatsapp />
				</a>
			</motion.div>

			{/*<a href="https://www.youtube.com/watch?v=3HNyXCPDQ7Q&ab_channel=JavaScriptMastery">
				<FaFacebookF />
			</a> */}
		</div>
	);
}

export default SocialMedia;
