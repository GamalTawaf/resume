import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import CnTopbar from "../components/common/cnTopbar";
import CnFooter from "../components/common/cnFooter";

import INFO from "../data/user";

import "./styles/404.css";

const Notfound = () => {
	useEffect(() => {
		document.title = `404 | ${INFO.main.title}`;
	}, []);

	return (
		<React.Fragment>
			<div className="cn-page">
				<CnTopbar />

				<main className="cn-wrap cn-notfound-main">
					<div className="cn-eyebrow-row cn-reveal cn-r1">
						<span className="cn-eyebrow">404.md</span>
					</div>
					<h1 className="cn-headline cn-reveal cn-r2">
						Release not found
					</h1>
					<p className="cn-lede cn-reveal cn-r3">
						We can't seem to find the page you're looking for. The
						requested URL "{window.location.pathname}" was not found
						on this server.
					</p>
					<Link to="/" className="cn-btn cn-reveal cn-r4">
						Back to Home
					</Link>
				</main>

				<CnFooter />
			</div>
		</React.Fragment>
	);
};

export default Notfound;
