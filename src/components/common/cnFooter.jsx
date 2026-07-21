import React from "react";
import { Link } from "react-router-dom";

import INFO from "../../data/user";

const CnFooter = () => {
	return (
		<footer className="cn-footer">
			<div className="cn-wrap cn-foot-inner">
				<ul className="cn-foot-links">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/projects">Projects</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
				<span>
					© {new Date().getFullYear()} {INFO.main.name}. All Rights
					Reserved.
				</span>
			</div>
		</footer>
	);
};

export default CnFooter;
