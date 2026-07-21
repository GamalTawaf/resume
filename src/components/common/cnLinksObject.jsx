import React from "react";

import INFO from "../../data/user";

const stripProtocol = (url) =>
	url.replace(/^https?:\/\//, "").replace(/\/$/, "");

const linkedinHandle = INFO.socials.linkedin
	.replace(/^https?:\/\/(www\.)?linkedin\.com\//, "")
	.replace(/\/$/, "");

const CnLinksObject = ({ className = "" }) => {
	return (
		<div className={`cn-links-object ${className}`.trim()}>
			<span className="cn-punct">const</span> links = {"{"}
			<br />
			&nbsp;&nbsp;
			<span className="cn-key">github:</span>{" "}
			<a href={INFO.socials.github} target="_blank" rel="noreferrer">
				"{stripProtocol(INFO.socials.github)}"
			</a>
			,<br />
			&nbsp;&nbsp;
			<span className="cn-key">linkedin:</span>{" "}
			<a href={INFO.socials.linkedin} target="_blank" rel="noreferrer">
				"{linkedinHandle}"
			</a>
			,<br />
			&nbsp;&nbsp;
			<span className="cn-key">stack:</span>{" "}
			<a
				href={INFO.socials.stackoverflow}
				target="_blank"
				rel="noreferrer"
			>
				"stackoverflow"
			</a>
			,<br />
			&nbsp;&nbsp;
			<span className="cn-key">certified:</span>{" "}
			<a
				href={INFO.socials.google_certified}
				target="_blank"
				rel="noreferrer"
			>
				"google-cloud"
			</a>
			,<br />
			&nbsp;&nbsp;
			<span className="cn-key">email:</span>{" "}
			<a href={`mailto:${INFO.main.email}`}>"{INFO.main.email}"</a>,
			<br />
			{"}"};
		</div>
	);
};

export default CnLinksObject;
