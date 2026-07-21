import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import CnTopbar from "../components/common/cnTopbar";
import CnFooter from "../components/common/cnFooter";
import CnLinksObject from "../components/common/cnLinksObject";
import CnReleaseList from "../components/common/cnReleaseList";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/homepage.css";

const stripProtocol = (url) =>
	url.replace(/^https?:\/\//, "").replace(/\/$/, "");

const Homepage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "home");
	const totalReleases = INFO.workHistory.length;

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="cn-page">
				<CnTopbar active="home" />

				<main className="cn-wrap">
					<section className="cn-hero">
						<div className="cn-hero-grid">
							<div className="cn-hero-main">
								<div className="cn-eyebrow-row cn-reveal cn-r1">
									<span className="cn-eyebrow">
										CHANGELOG.md
									</span>
									<span className="cn-status-pill">
										<span className="cn-dot"></span>ACTIVE
									</span>
								</div>

								<div className="cn-version-row cn-reveal cn-r2">
									<span className="cn-version-tag">
										v{totalReleases}.0.0
									</span>
									<span className="cn-name">
										{INFO.main.name}
									</span>
								</div>

								<h1 className="cn-headline cn-reveal cn-r3">
									{INFO.homepage.title}
								</h1>

								<p className="cn-lede cn-reveal cn-r4">
									{INFO.homepage.description}
								</p>
							</div>

							<div className="cn-hero-side cn-reveal cn-r5">
								<CnLinksObject />
							</div>
						</div>
					</section>

					<section aria-labelledby="cn-releases-head">
						<div className="cn-section-head">
							<span className="cn-eyebrow" id="cn-releases-head">
								Release History
							</span>
							<span className="cn-section-note">
								{totalReleases} releases since 2013
							</span>
						</div>
						<CnReleaseList limit={6} />
					</section>

					<section aria-labelledby="cn-builds-head">
						<div className="cn-section-head">
							<span className="cn-eyebrow" id="cn-builds-head">
								Featured Builds
							</span>
							<span className="cn-section-note">
								{INFO.projects.length} published
							</span>
						</div>

						<div className="cn-builds">
							{INFO.projects.map((project) => (
								<div className="cn-build" key={project.title}>
									<div className="cn-build-head">
										<span className="cn-build-name">
											{project.title}
										</span>
										<span className="cn-build-tag">
											{project.tag}
										</span>
									</div>
									<p className="cn-build-desc">
										{project.description}
									</p>
									<div className="cn-build-run">
										<span className="cn-prompt">$</span>{" "}
										open{" "}
										<a
											href={project.link}
											target="_blank"
											rel="noreferrer"
										>
											{stripProtocol(project.link)} →
										</a>
									</div>
								</div>
							))}
						</div>
					</section>
				</main>

				<CnFooter />
			</div>
		</React.Fragment>
	);
};

export default Homepage;
