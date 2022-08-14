import React from "react";
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

function SocialMedia() {
	return (
		<div className="app__social">
			<a target="_blank" href="https://www.linkedin.com/in/SpringerMax-ElectricDeveloper">
				<BsLinkedin />
			</a>
			<a target="_blank" href="https://github.com/Hecatonquir">
				<BsGithub />
			</a>
			<a target="_blank" href="https://wa.me/5493874135467">
				<BsWhatsapp />
			</a>
			{/*<a href="https://www.youtube.com/watch?v=3HNyXCPDQ7Q&ab_channel=JavaScriptMastery">
				<FaFacebookF />
			</a> */}
		</div>
	);
}

export default SocialMedia;
