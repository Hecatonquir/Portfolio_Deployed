import React, { useState } from "react";
import "./Navbar.scss";
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

export const Navbar = () => {
	const menu = ["home", "projects", "about", "skills", "testimonials", "contact"];
	const [toggle, setToggle] = useState(false);

	return (
		<nav className="app__navbar">
			<div className="app__navbar-logo">
				<img src={images.logo} alt="logo" />
			</div>
			<ul className="app__navbar-links">
				{menu.map((item, i) => {
					return (
						<li className="app__flex p-text" key={`app__navbar-links-${i}`}>
							<div />
							<a href={`${item}`}>{item}</a>
						</li>
					);
				})}
			</ul>
			{/* Ahora viene la implementación de menu para celulares */}
			<div className="app__navbar-menu">
				<HiMenuAlt4 onClick={() => setToggle(true)} />
				{toggle && (
					<motion.div whileInView={{ x: [300, 0] }} transition={{ duration: 0.85, ease: "easeOut" }}>
						<HiX onClick={() => setToggle(false)} />
						<ul>
							{menu.map((item, i) => {
								return (
									<li key={`app__navbar-menu-${i}`}>
										<a href={`${item}`} onClick={() => setToggle(false)}>
											{item}
										</a>
									</li>
								);
							})}
						</ul>
					</motion.div>
				)}
			</div>
		</nav>
	);
};
