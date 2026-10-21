import React from "react";

import INFO from "../../data/user";

const stripProtocol = (url) =>
	url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

const ExternalValue = ({ href, label, children }) => (
	<a href={href} target="_blank" rel="noreferrer">
		<span className="cn-key">{label}</span> "{children}"
		<span className="cn-external" aria-hidden="true"></span>
		<span className="cn-sr">opens in a new tab</span>
	</a>
);

const CnLinksObject = ({ className = "" }) => {
	return (
		<div className={`cn-links-object ${className}`.trim()}>
			<span className="cn-punct">const</span> links = {"{"}
			<br />
			&nbsp;&nbsp;
			<ExternalValue href={INFO.socials.github} label="github:">
				{stripProtocol(INFO.socials.github)}
			</ExternalValue>
			,<br />
			&nbsp;&nbsp;
			<ExternalValue href={INFO.socials.linkedin} label="linkedin:">
				{stripProtocol(INFO.socials.linkedin)}
			</ExternalValue>
			,<br />
			&nbsp;&nbsp;
			<ExternalValue
				href={INFO.socials.stackoverflow}
				label="stack:"
			>
				stackoverflow
			</ExternalValue>
			,<br />
			&nbsp;&nbsp;
			<ExternalValue
				href={INFO.socials.google_certified}
				label="certified:"
			>
				google-cloud
			</ExternalValue>
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
