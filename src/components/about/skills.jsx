import React from "react";

const CATEGORIES = [
	{ key: "backend", label: "Backend" },
	{ key: "cloud", label: "Cloud & Architecture" },
	{ key: "data", label: "Data & Real-Time" },
	{ key: "delivery", label: "Observability & Delivery" },
	{ key: "ai", label: "AI Engineering" },
];

const Skills = ({ skills }) => {
	return (
		<div className="cn-panel">
			<div className="cn-panel-title">Tech Stack</div>
			{CATEGORIES.map((category) => (
				<div className="cn-tag-group" key={category.key}>
					<div className="cn-tag-group-label">{category.label}</div>
					<div className="cn-tag-list">
						{skills[category.key].map((item) => (
							<span className="cn-tag" key={item}>
								{item}
							</span>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default Skills;
