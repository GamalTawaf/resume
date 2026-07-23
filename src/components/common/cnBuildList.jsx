import React from "react";
import { Link } from "react-router-dom";

const CnBuildList = ({ items }) => (
	<div className="cn-builds">
		{items.map((item) => (
			<div className="cn-build" key={item.title}>
				<div className="cn-build-head">
					<span className="cn-build-name">{item.title}</span>
					<span className="cn-build-tag">{item.tag}</span>
				</div>
				<p className="cn-build-desc">{item.description}</p>
				{!item.comingSoon && (
					<div className="cn-build-run">
						<span className="cn-prompt">$</span> open{" "}
						{item.internal ? (
							<Link to={item.link}>{item.linkText} →</Link>
						) : (
							<a
								href={item.link}
								target="_blank"
								rel="noreferrer"
							>
								{item.linkText} →
							</a>
						)}
					</div>
				)}
			</div>
		))}
	</div>
);

export default CnBuildList;
