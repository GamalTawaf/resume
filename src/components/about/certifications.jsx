import React from "react";

const Certifications = ({ certifications }) => {
	if (!certifications || certifications.length === 0) return null;

	return (
		<div className="cn-panel">
			<div className="cn-panel-title">Certifications</div>
			{certifications.map((c) => (
				<div className="cn-simple-item" key={c.name}>
					<div className="cn-simple-item-title">{c.name}</div>
					<div className="cn-simple-item-meta">
						<span>{c.issuer}</span>
						<span>{c.date}</span>
						{c.link && (
							<a
								href={c.link}
								target="_blank"
								rel="noopener noreferrer"
							>
								View →
							</a>
						)}
					</div>
				</div>
			))}
		</div>
	);
};

export default Certifications;
