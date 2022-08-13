import React from "react";
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

function SocialMedia() {
	return (
		<div className="app__social">
			<a href="https://www.linkedin.com/in/SpringerMax-ElectricDeveloper">
				<BsLinkedin />
			</a>
			<a href="https://github.com/Hecatonquir">
				<BsGithub />
			</a>
			{/* <a href="https://www.youtube.com/watch?v=3HNyXCPDQ7Q&ab_channel=JavaScriptMastery">
				<BsWhatsapp />
			</a>
			<a href="https://www.youtube.com/watch?v=3HNyXCPDQ7Q&ab_channel=JavaScriptMastery">
				<FaFacebookF />
			</a> */}
		</div>
	);
}

export default SocialMedia;
