import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import "./About.scss";
import { AppWrap, MotionWrap } from "../../wrapper";

const About = () => {
	const [abouts, setAbouts] = useState([]);

	useEffect(() => {
		const query = '*[_type == "abouts"]';
		client.fetch(query).then((data) => setAbouts(data));
	}, []);

	return (
		<>
			<h2 className="head-text">
				About
				<span> Me! </span>
				<br />
				<p className="p-text">
					I'm an Electrical Engineer student, about to start my thesis. However, studying the market I found out that
					working as Web Developer has a big potential. This made me curious, which led me to learn more about it and
					ended up liking it. Also, it suits my personality and preferences since I'm an introvert and I really enjoy
					solving problmes, thats why I decided to work as a full stack web Developer.
					<br /> In my free time I like to learn more about the programming skills I already know, learn new programming
					lengagues and study to finish my degree
				</p>
				<br />
				My <span> Roles: </span>
			</h2>
			<div className="app__profiles">
				{abouts.map((about, i) => {
					return (
						<motion.div
							whileInView={{ opacity: 1 }}
							whileHover={{ scale: 1.1 }}
							transition={{ duration: 0.5, type: "tween" }}
							className="app__profile-item"
							key={about.title + i}>
							<img src={urlFor(about.imgUrl)} alt={about.title} />
							<h2 className="bold-text" style={{ marginTop: "20px" }}>
								{about.title}
							</h2>
							<p className="p-text" style={{ marginTop: "10px" }}>
								{about.description}
							</p>
						</motion.div>
					);
				})}
			</div>
		</>
	);
};

export default AppWrap(MotionWrap(About, "app__about"), "about", "app__primarybg");
