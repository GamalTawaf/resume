import React from "react";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import Card from "../common/card";
import "./styles/education.css";

const Education = ({ education }) => {
	if (!education) return null;

	const items = Array.isArray(education) ? education : [education];

	return (
		<div className="education">
			<Card
				icon={faGraduationCap}
				title="Education"
				body={
					<div className="edu-body">
						{items.map((edu, idx) => (
							<div key={idx} className="edu-item">
								<div className="edu-degree">{edu.degree}</div>
								<div className="edu-institution">{edu.institution}</div>
								<div className="edu-meta">{edu.location} • {edu.year}</div>
							</div>
						))}
					</div>
				}
			/>
		</div>
	);
};

export default Education;