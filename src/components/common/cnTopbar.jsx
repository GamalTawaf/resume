import React from "react";
import { Link } from "react-router-dom";

const NAV_ITEMS = [
	{ key: "home", label: "Home", to: "/" },
	{ key: "about", label: "About", to: "/about" },
	{ key: "projects", label: "Projects", to: "/projects" },
	{ key: "games", label: "Games", to: "/games" },
	{ key: "vibe-coding", label: "AI Playbook", to: "/vibe-coding" },
	{ key: "contact", label: "Contact", to: "/contact" },
];

const CnTopbar = ({ active }) => {
	return (
		<div className="cn-topbar">
			<a className="cn-skip" href="#content">
				Skip to content
			</a>
			<div className="cn-wrap cn-topbar-inner">
				<Link to="/" className="cn-brand">
					<strong>gamaltawaf</strong> / resume
				</Link>
				<nav aria-label="Primary">
					<ul className="cn-nav-links">
						{NAV_ITEMS.map((item) => (
							<li key={item.key}>
								<Link
									to={item.to}
									className={
										active === item.key ? "cn-current" : ""
									}
									aria-current={
										active === item.key ? "page" : undefined
									}
								>
									{item.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default CnTopbar;
