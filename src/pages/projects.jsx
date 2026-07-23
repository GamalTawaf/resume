import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import CnTopbar from "../components/common/cnTopbar";
import CnFooter from "../components/common/cnFooter";
import CnBuildList from "../components/common/cnBuildList";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="cn-page">
				<CnTopbar active="projects" />

				<main className="cn-wrap">
					<section className="cn-hero cn-hero-lite">
						<div className="cn-eyebrow-row cn-reveal cn-r1">
							<span className="cn-eyebrow">
								$ ls ~/repositories
							</span>
						</div>
						<h1 className="cn-headline cn-reveal cn-r2">
							Selected builds — AI agents, apps, and experiments
						</h1>
						<p className="cn-lede cn-reveal cn-r3">
							{INFO.about.description}
						</p>
					</section>

					<section aria-labelledby="cn-repos-head">
						<div className="cn-section-head">
							<span className="cn-eyebrow" id="cn-repos-head">
								Repositories
							</span>
							<span className="cn-section-note">
								{INFO.projects.length} published
							</span>
						</div>

						<CnBuildList items={INFO.projects} />
					</section>
				</main>

				<CnFooter />
			</div>
		</React.Fragment>
	);
};

export default Projects;
