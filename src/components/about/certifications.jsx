import React from "react";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import Card from "../common/card";
import "./styles/certifications.css";

const Certifications = ({ certifications }) => {
	if (!certifications || certifications.length === 0) return null;

	return (
		<div className="certifications">
			<Card
				icon={faCertificate}
				title="Certifications"
				body={
					<div className="cert-body">
						{certifications.map((c, idx) => (
							<div key={idx} className="cert-item">
								<div className="cert-name">{c.name}</div>
								<div className="cert-meta">
									<span className="cert-issuer">{c.issuer}</span>
									<span className="cert-date">{c.date}</span>
									{c.link && (
										<a href={c.link} target="_blank" rel="noopener noreferrer">View</a>
									)}
								</div>
							</div>
						))}
					</div>
				}
			/>
		</div>
	);
};

export default Certifications;