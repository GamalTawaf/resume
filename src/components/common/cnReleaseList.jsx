import React from "react";
import { Link } from "react-router-dom";

import INFO from "../../data/user";

const CnReleaseList = ({ limit }) => {
	const total = INFO.workHistory.length;
	const shown = limit ? INFO.workHistory.slice(0, limit) : INFO.workHistory;
	const earlierCount = total - shown.length;

	return (
		<React.Fragment>
			<div className="cn-release-list">
				{shown.map((role, index) => {
					const version = total - index;
					return (
						<div
							className={
								index === 0
									? "cn-release cn-active"
									: "cn-release"
							}
							key={`${role.company}-${role.duration}`}
						>
							<span className="cn-v cn-mono">v{version}.0.0</span>
							<div className="cn-release-main">
								<div className="cn-company">{role.company}</div>
								<div className="cn-role">{role.role}</div>
							</div>
							<span className="cn-when">
								{role.duration.replace(" - ", " — ")}
							</span>
						</div>
					);
				})}
			</div>
			{earlierCount > 0 && (
				<div className="cn-collapsed-hint">
					···· {earlierCount} earlier releases (v1.0.0 – v
					{earlierCount}
					.0.0) — full history on <Link to="/about">/about</Link>
				</div>
			)}
		</React.Fragment>
	);
};

export default CnReleaseList;
