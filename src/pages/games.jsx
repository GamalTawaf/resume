import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import CnTopbar from "../components/common/cnTopbar";
import CnFooter from "../components/common/cnFooter";
import CnBuildList from "../components/common/cnBuildList";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Games = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "games");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Games | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="cn-page">
				<CnTopbar active="games" />

				<main className="cn-wrap">
					<section className="cn-hero cn-hero-lite">
						<div className="cn-eyebrow-row cn-reveal cn-r1">
							<span className="cn-eyebrow">$ ls ~/games</span>
						</div>
						<h1 className="cn-headline cn-reveal cn-r2">
							Games I've built along the way
						</h1>
						<p className="cn-lede cn-reveal cn-r3">
							Small games built to learn new languages and
							frameworks.
						</p>
					</section>

					<section aria-labelledby="cn-games-head">
						<div className="cn-section-head">
							<span className="cn-eyebrow" id="cn-games-head">
								Games
							</span>
							<span className="cn-section-note">
								{INFO.games.length} listed
							</span>
						</div>

						<CnBuildList items={INFO.games} />
					</section>
				</main>

				<CnFooter />
			</div>
		</React.Fragment>
	);
};

export default Games;
