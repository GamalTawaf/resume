import React from "react";

const Education = ({ education }) => {
	if (!education) return null;

	const items = Array.isArray(education) ? education : [education];

	return (
		<div className="cn-panel">
			<div className="cn-panel-title">Education</div>
			{items.map((edu) => (
				<div className="cn-simple-item" key={edu.degree}>
					<div className="cn-simple-item-title">{edu.degree}</div>
					<div className="cn-simple-item-sub">{edu.institution}</div>
					<div className="cn-simple-item-meta">
						<span>{edu.location}</span>
					</div>
				</div>
			))}
		</div>
	);
};

export default Education;
