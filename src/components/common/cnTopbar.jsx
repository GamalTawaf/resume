import React from "react";
import { Link } from "react-router-dom";

const NAV_ITEMS = [
	{ key: "home", label: "Home", to: "/" },
	{ key: "about", label: "About", to: "/about" },
	{ key: "projects", label: "Projects", to: "/projects" },
	{ key: "games", label: "Games", to: "/games" },
	{ key: "contact", label: "Contact", to: "/contact" },
];

const CnTopbar = ({ active }) => {
	return (
		<div className="cn-topbar">
			<div className="cn-wrap cn-topbar-inner">
				<div className="cn-brand">
					<strong>gamaltawaf</strong> / resume
				</div>
				<ul className="cn-nav-links">
					{NAV_ITEMS.map((item) => (
						<li key={item.key}>
							<Link
								to={item.to}
								className={
									active === item.key ? "cn-current" : ""
								}
							>
								{item.label}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default CnTopbar;
