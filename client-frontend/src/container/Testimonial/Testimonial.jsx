import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";

import "./Testimonial.scss";

const Testimonial = () => {
	const [brands, setBrands] = useState([]);
	const [testimonials, seTestimonials] = useState([]);

	const [currentIndex, setcurrentIndex] = useState(0);

	const handleClick = (index) => {
		setcurrentIndex(index);
	};

	useEffect(() => {
		const query = '*[_type == "brands"]';
		const testimonialsQuery = '*[_type == "testimonials"]';
		client.fetch(query).then((data) => setBrands(data));
		client.fetch(testimonialsQuery).then((data) => seTestimonials(data));
	}, []);

	return (
		<>
			{testimonials.length && (
				<>
					<div className="app__testimonial-item app__flex">
						<img src={urlFor(testimonials[currentIndex].imgurl)} alt="testimonial" />
						<div className="app__testimonial-content">
							<p className="p-text">{testimonials[currentIndex].feedback}</p>
							<div>
								<h4 className="bold-text">{testimonials[currentIndex].name}</h4>
								<h5 className="p-text">{testimonials[currentIndex].company}</h5>
							</div>
						</div>
					</div>
					<div className="app__testimonial-btns app__flex">
						<div
							className="app__flex"
							onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
							<HiChevronLeft />
						</div>
						<div
							className="app__flex"
							onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
							<HiChevronRight />
						</div>
					</div>
				</>
			)}

			<div className="app__testimonials-brands app__flex">
				{brands.map((brand) => (
					<motion.div
						whileInView={{ opacity: [0, 1] }}
						transition={{ duration: 0.5, type: "tween" }}
						className="app__testimonials"
						key={brand._id}>
						<img src={urlFor(brand.imgUrl)} alt="brand" />
					</motion.div>
				))}
			</div>
		</>
	);
};

export default AppWrap(MotionWrap(Testimonial, "app__testimonial"), "testimonials", "app__primarybg");
