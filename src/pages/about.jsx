import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import CnTopbar from "../components/common/cnTopbar";
import CnFooter from "../components/common/cnFooter";
import CnLinksObject from "../components/common/cnLinksObject";
import CnReleaseList from "../components/common/cnReleaseList";
import DownloadButton from "../components/common/downloadButton";
import Skills from "../components/about/skills";
import Certifications from "../components/about/certifications";
import Education from "../components/about/education";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");
	const totalReleases = INFO.workHistory.length;

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="cn-page">
				<CnTopbar active="about" />

				<main className="cn-wrap">
					<section className="cn-hero">
						<div className="cn-hero-grid">
							<div className="cn-hero-main">
								<div className="cn-eyebrow-row cn-reveal cn-r1">
									<span className="cn-eyebrow">
										README.md
									</span>
								</div>

								<h1 className="cn-headline cn-reveal cn-r2">
									{INFO.about.title}
								</h1>

								<p className="cn-lede cn-reveal cn-r3">
									{INFO.about.description}
								</p>

								<div className="cn-about-download cn-reveal cn-r4">
									<DownloadButton />
								</div>
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
						<CnReleaseList />
					</section>

					<section aria-labelledby="cn-about-panels-head">
						<div className="cn-section-head">
							<span
								className="cn-eyebrow"
								id="cn-about-panels-head"
							>
								Specs
							</span>
						</div>
						<div className="cn-panels">
							<Skills skills={INFO.skills} />
							<Certifications
								certifications={INFO.certifications}
							/>
							<Education education={INFO.education} />
						</div>
					</section>
				</main>

				<CnFooter />
			</div>
		</React.Fragment>
	);
};

export default About;
