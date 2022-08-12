import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { images } from "../../constants";

import "./Navbar.scss";

const Navbar = () => {
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
						<li className="app__flex p-text" key={`link-${i}`}>
							<div />
							<a href={`#${item}`}>{item}</a>
						</li>
					);
				})}
			</ul>

			<div className="app__navbar-menu">
				<HiMenuAlt4 onClick={() => setToggle(true)} />
				{toggle && (
					<motion.div whileInView={{ x: [300, 0] }} transition={{ duration: 0.85, ease: "easeOut" }}>
						<HiX onClick={() => setToggle(false)} />
						<ul>
							{menu.map((item, i) => {
								return (
									<li key={`app__navbar-menu-${i}`}>
										<a href={`#${item}`} onClick={() => setToggle(false)}>
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

export default Navbar;
