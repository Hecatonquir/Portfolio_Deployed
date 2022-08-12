import React from "react";
import { NavigationDots, SocialMedia } from "../Components";
import { BiCopyright } from "react-icons/bi";
const AppWrap = (Component, idName, classNames) =>
	function HOC() {
		return (
			<div id={idName} className={`app__container ${classNames}`}>
				<SocialMedia />
				<div className="app__wrapper app__flex">
					<Component />

					<div className="copyright">
						<p className="p-text">
							<BiCopyright /> 2022 Springer
						</p>
						<p className="p-text">All rights reserved.</p>
					</div>
				</div>
				<NavigationDots active={idName} />
			</div>
		);
	};

export default AppWrap;
