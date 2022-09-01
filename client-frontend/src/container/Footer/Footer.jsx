import React, { useState } from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';
import { BsWhatsapp } from 'react-icons/bs';

const Footer = () => {
	const [formData, setFormData] = useState({ name: '', email: '', message: '' });
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	const { name, email, message } = formData;

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = () => {
		setLoading(true);

		const contact = {
			_type: 'contact',
			name: name,
			email: email,
			message: message,
		};

		client
			.create(contact)
			.then(() => {
				setLoading(false);
				setIsFormSubmitted(true);
			})
			.catch((err) => console.log(err));
	};

	return (
		<>
			<h2 className='head-text'>Take a coffe & chat with me</h2>
			<div className='app__footer-cards'>
				<div className='app__footer-card'>
					<img src={images.email} alt='email' />
					<a target='_blank' href='mailto:maxicuentas92@hotmail.com' className='p-text'>
						<span>&nbsp; Click to send me an E-mail!</span>
					</a>
				</div>
				<div className='app__footer-card'>
					<img src={images.mobile} alt='mobile' />
					<a target='_blank' href='https://wa.me/5493874135467' className='p-text'>
						<span> Click to chat with me!&nbsp;</span> <BsWhatsapp />
					</a>
				</div>
			</div>

			{!isFormSubmitted ? (
				<div className='app__footer-form app__flex'>
					<div className='app__flex'>
						<input
							className='p-text'
							type='text'
							name='name'
							value={name}
							placeholder='Your Name'
							onChange={handleInputChange}
						/>
					</div>
					<div className='app__flex'>
						<input
							className='p-text'
							type='email'
							name='email'
							value={email}
							placeholder='Your E-mail'
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<textarea
							className='p-text'
							placeholder='Your Message'
							value={message}
							name='message'
							onChange={handleInputChange}></textarea>
					</div>
					<button type='button' className='p-text' onClick={handleSubmit}>
						{loading ? 'Sending...' : 'Send Message'}
					</button>
				</div>
			) : (
				<div>
					<h3 className='head-text'>Thank you for getting in touch!</h3>
				</div>
			)}
		</>
	);
};

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__whitebg');
