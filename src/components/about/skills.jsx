import React from "react";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import Card from "../common/card";
import "./styles/skills.css";

const Skills = ({ skills }) => {
	return (
		<div className="skills">
			<Card
				icon={faBrain}
				title="Skills"
				body={
					<div className="skills-body">
						<div className="skill-category">
							<h3>Programming Languages</h3>
							<div className="skill-list">
								{skills.languages.map((lang, index) => (
									<span key={index} className="skill-item">{lang}</span>
								))}
							</div>
						</div>

						<div className="skill-category">
							<h3>Frameworks</h3>
							<div className="skill-list">
								{skills.frameworks.map((framework, index) => (
									<span key={index} className="skill-item">{framework}</span>
								))}
							</div>
						</div>

						<div className="skill-category">
							<h3>Cloud & Infrastructure</h3>
							<div className="skill-list">
								{skills.cloud.map((tech, index) => (
									<span key={index} className="skill-item">{tech}</span>
								))}
							</div>
						</div>

						<div className="skill-category">
							<h3>Tools & Methods</h3>
							<div className="skill-list">
								{skills.tools.map((tool, index) => (
									<span key={index} className="skill-item">{tool}</span>
								))}
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Skills;