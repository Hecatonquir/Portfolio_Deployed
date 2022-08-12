import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Projects.scss";

const Projects = () => {
	const [activeFilter, setActiveFilter] = useState("All");
	const [animateCart, setAnimateCart] = useState({ y: 0, opacity: 1 });
	const [projects, setProject] = useState([]);
	const [filterProject, setFilterProject] = useState([]);
	let appCategories = ["Single Page Application", "E-Commerce", "Small Apps", "All"];
	useEffect(() => {
		const query = '*[_type == "projects"]';
		client.fetch(query).then((data) => {
			setProject(data);
			setFilterProject(data);
		});
	}, []);

	const handleProjectFilter = (item) => {};
	return (
		<>
			<h2 className="head-text">
				My Creative
				<span> Portfolio </span>
				<br />
				Section
			</h2>
			<div className="app__project-filter">
				{appCategories.map((cat, i) => {
					return (
						<div
							key={i}
							onClick={() => handleProjectFilter(cat)}
							className={`app__project-filter-item app__flex p-text ${activeFilter === cat ? "item-active" : ""}`}>
							{cat}
						</div>
					);
				})}
			</div>
			<motion.div
				animate={animateCart}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className="app__project-portfolio">
				{filterProject.map((project, i) => {
					return (
						<div className="app__project-item app__flex" key={i}>
							<div className="app__project-img app__flex">
								<img src={urlFor(project.imgUrl)} alt={project.name} />
								<motion.div
									whileHover={{ opacity: [0, 1] }}
									transition={{ duration: 0.25, ease: "easeInOut", staggerChildren: 0.5 }}
									className={"app__project-hover app__flex"}>
									<a href={project.projectLink} target="_blank" rel="noreferrer">
										<motion.div
											whileInView={{ scale: [0, 1] }}
											whileHover={{ scale: [1, 0.9] }}
											transition={{ duration: 0.25 }}
											className={"app__flex"}>
											<AiFillEye />
										</motion.div>
									</a>
									<a href={project.codeLink} target="_blank" rel="noreferrer">
										<motion.div
											whileInView={{ scale: [0, 1] }}
											whileHover={{ scale: [1, 0.9] }}
											transition={{ duration: 0.25 }}
											className={"app__flex"}>
											<AiFillGithub />
										</motion.div>
									</a>
								</motion.div>
							</div>
							<div className="app__project-content app__flex">
								<h4 className="bold-text">{project.title}</h4>
								<p className="p-text" style={{ marginTop: 10 }}>
									{project.description}
								</p>
								<div className="app__project-tag app__flex">
									<p className="p-text">{project.tags[0]}</p>
								</div>
							</div>
						</div>
					);
				})}
			</motion.div>
		</>
	);
};

export default AppWrap(Projects, "projects");
