import React from "react";
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

function SocialMedia() {
	return (
		<div className="app__social">
			<div>
				<BsLinkedin />
			</div>
			<div>
				<BsGithub />
			</div>
			<div>
				<BsWhatsapp />
			</div>
			<div>
				<FaFacebookF />
        <p></p>
			</div>
		</div>
	);
}

export default SocialMedia;
